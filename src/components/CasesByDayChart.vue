<template>
  <v-card id="card">
    <v-card-title>
      Cases by day

      <v-spacer></v-spacer>

      <v-menu v-if="series[0].data !== null || !isLoading" bottom left>
        <template v-slot:activator="{ on }">
          <v-btn id="chart-style-btn" text small v-on="on" color="primary">
            Chart style
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in chartStyles"
            :key="i"
            @click="updateChartType(item)"
            dense
            color="primary"
            :class="[item === type ? 'v-list-item--active' : '']"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>

    <v-progress-circular
      v-if="series[0].data == null || isLoading == true"
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <apexchart
      v-else
      ref="chart"
      width="100%"
      height="75%"
      :type="type"
      :options="options"
      :series="series"
    >
    </apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import moment from "moment";
import VueApexCharts from "vue-apexcharts";

export default Vue.extend({
  name: "CasesByDayChart",

  components: {
    apexchart: VueApexCharts
  },

  data: () => ({
    isLoading: true,
    isLoadingData: true,
    isLoadingThlTestData: true,
    type: "area",
    oldestDate: null,
    chartStyles: ["area", "line", "bar"],
    options: {
      theme: {
        mode: "dark"
      },
      colors: ["#ce93d8", "#81c784", "#e57373", "#ffd54f"],
      chart: {
        id: "cases-by-day",
        // group: "covid-cases",
        fontFamily: "Roboto",
        stacked: false,
        animations: {
          enabled: false
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      xaxis: {
        type: "datetime",
        crosshairs: {
          show: true,
          width: 1,
          position: "back",
          opacity: 0.9,
          stroke: {
            color: "#b6b6b6",
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        labels: {
          minWidth: 40
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%"
        }
      },
      stroke: {
        show: true,
        curve: "straight",
        colors: undefined,
        width: [2, 2, 2, 2],
        dashArray: [0, 0, 0, 0]
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: true,
        followCursor: true
      },
      legend: {
        show: true,
        position: "bottom"
      },
      grid: {
        borderColor: "#525252",
        strokeDashArray: 7
      }
    },
    series: [
      {
        name: "New infections",
        data: []
      },
      {
        name: "Recovered",
        data: []
      },
      {
        name: "Deaths",
        data: []
      },
      /* {
        name: "Tests",
        data: []
      } */
    ]
  }),

  methods: {
    updateChartType(newChartStyle: string) {
      this.$data.type = newChartStyle;
    },

    async fetchData(caseType: string) {
      return new Promise((resolve, reject) => {
        let selectedCaseType = "";
        let seriesId = 0;

        switch (caseType) {
          case "confirmed":
            selectedCaseType = "confirmed";
            seriesId = 0;
            break;
          case "recovered":
            selectedCaseType = "recovered";
            seriesId = 1;
            break;
          case "deaths":
            selectedCaseType = "deaths";
            seriesId = 2;
            break;
          default:
            break;
        }

        if (selectedCaseType.length <= 0) {
          reject();
          return;
        }

        const confirmedCases = store.getters["virusCasesFinland/confirmed"];
        const confirmedCasesCount = confirmedCases.length;

        const cases = store.getters[`virusCasesFinland/${selectedCaseType}`];
        const casesCount = cases.length;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const casesByDay: any = [];

        const generatedDates = [];
        const todaysDate = new Date().toISOString();
        // const oldestDate = new Date().toISOString();

        for (let i = 0; i < confirmedCasesCount; i++) {
          const datetime = confirmedCases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const milliseconds = new Date(date).getTime();

          if (Date.parse(datetime) < Date.parse(this.$data.oldestDate)) {
            this.$data.oldestDate = datetime;
          }
        }

        for (let i = 0; i < casesCount; i++) {
          const datetime = cases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          const milliseconds = new Date(date).getTime();

          // Is the current date already stored? If so, increment the case count
          const processedDatesCount = casesByDay.length;
          let dateAlreadyProcessed = false;

          for (let i = 0; i < processedDatesCount; i++) {
            const currentMilliseconds = casesByDay[i][0];

            if (currentMilliseconds === milliseconds) {
              casesByDay[i][1] = casesByDay[i][1] + 1;
              dateAlreadyProcessed = true;
              break;
            }
          }

          // If not store it
          if (!dateAlreadyProcessed) {
            casesByDay.push([milliseconds, 1]);
          }
        }

        // Generate missing dates
        const today = moment(todaysDate).format("YYYY-MM-DD");
        const oldest = moment(this.$data.oldestDate).format("YYYY-MM-DD");

        for (let m = moment(oldest); m.isSameOrBefore(today); m.add(1, "days")) {
          const currentMilliseconds = new Date(
            m.format("YYYY-MM-DD")
          ).getTime();
          generatedDates.push([currentMilliseconds, 0]);
        }

        // Assign the data to the generated dates
        for (let i = 0; i < generatedDates.length; i++) {
          for (let j = 0; j < casesByDay.length; j++) {
            const currentCaseDate = casesByDay[j][0];
            if (currentCaseDate === generatedDates[i][0]) {
              generatedDates[i][1] = generatedDates[i][1] + casesByDay[j][1];
            }
          }
        }

        this.$data.series[seriesId].data = generatedDates;

        resolve();
      });
    },

    async fetchThlTestData() {
      return new Promise((resolve, reject) => {
        const testCases = store.getters["virusCasesFinland/thlTestData"];

        if (testCases === null || testCases === undefined) {
          reject();
        }

        const testCasesCount = testCases.length;
        const todaysDate = new Date().toISOString();
        const today = moment(todaysDate).format("YYYY-MM-DD");
        const oldest = moment(this.$data.oldestDate).format("YYYY-MM-DD");
        const generatedDates = [];

        for (let m = moment(oldest); m.isSameOrBefore(today); m.add(1, "days")) {
          const currentMilliseconds = new Date(
            m.format("YYYY-MM-DD")
          ).getTime();
          generatedDates.push([currentMilliseconds, 0]);
        }

        // Assign the data to the generated dates
        for (let i = 0; i < generatedDates.length; i++) {
          const currentMilliseconds = generatedDates[i][0];

          for (let j = 0; j < testCasesCount; j++) {
            const datetime = testCases[j].date;
            const date = new Date(datetime).toISOString().substr(0, 10);
            const milliseconds = new Date(date).getTime();

            if (currentMilliseconds === milliseconds) {
              generatedDates[i][1] = generatedDates[i][1] + testCases[j].value;
            }
          }
        }

        this.$data.series[3].data = generatedDates;

        resolve();
      });
    }
  },

  async mounted() {
    this.$data.oldestDate = new Date().toISOString();
    this.$data.isLoadingData = true;
    this.$data.isLoadingThlTestData = true;

    let dataFetchStarted = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.$store.subscribe(async (mutation, state) => {
      const { confirmed, thlTestData } = state.virusCasesFinland;

      if (confirmed !== null && thlTestData !== null && dataFetchStarted === false) {
        dataFetchStarted = true;

        await Promise.all([
          this.fetchData("confirmed"),
          this.fetchData("recovered"),
          this.fetchData("deaths")
        ]);

        this.$data.isLoadingData = false;

        /* await this.fetchThlTestData();
        this.$data.isLoadingThlTestData = false; */

        this.$data.isLoading = false;
      }
    });
  }
});
</script>

<style lang="sass" scoped>
#progress-loader
  display: block
  width: 100px
  margin: 0 auto
  margin-top: 120px

#card
  min-height: 400px
  max-height: 400px

@media (max-width: 439px)
  #card
    min-height: 600px
    max-height: 600px
</style>
