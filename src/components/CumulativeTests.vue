<template>
  <v-card min-height="400px" max-height="400px">
    <v-card-title>
      Tests by day (cumulative)

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
import VueApexCharts from "vue-apexcharts";
import moment from "moment";

export default Vue.extend({
  name: "CumulativeTests",

  data: () => ({
    isLoading: true,
    isLoadingData: true,
    isLoadingThlTestData: true,
    type: "area",
    chartStyles: ["area", "line", "bar"],
    options: {
      theme: {
        mode: "dark"
      },
      colors: ["#ffd54f"],
      chart: {
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
          minWidth: 40,
          formatter: function(value: number) {
            if (value > 1000) {
              const result = (value / 1000).toFixed(0);
              return `${result}k`;
            } else {
              return value;
            }
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%"
        }
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
      stroke: {
        show: true,
        curve: "straight",
        colors: undefined,
        width: 2,
        dashArray: 0
      },
      grid: {
        borderColor: "#525252",
        strokeDashArray: 7
      }
    },
    series: [
      {
        name: "Tests (cumulative)",
        data: []
      }
    ]
  }),

  methods: {
    updateChartType(newChartStyle: string) {
      this.$data.type = newChartStyle;
    },

    fetchData(caseType: string) {
      return new Promise((resolve, reject) => {
        let selectedCaseType = "";

        switch (caseType) {
          case "confirmed":
            selectedCaseType = "confirmed";
            break;
          case "recovered":
            selectedCaseType = "recovered";
            break;
          case "deaths":
            selectedCaseType = "deaths";
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

        for (let i = 0; i < confirmedCasesCount; i++) {
          const datetime = confirmedCases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const milliseconds = new Date(date).getTime();

          if (Date.parse(datetime) < Date.parse(this.$data.oldestDate)) {
            this.$data.oldestDate = datetime;
          }
        }

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

          if (i > 0) {
            generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1];
          }
        }

        this.$data.series[0].data = generatedDates;

        resolve();
      });
    }
  },

  async mounted() {
    this.$data.oldestDate = new Date().toISOString();
    this.$data.isLoadingData = true;
    this.$data.isLoadingThlTestData = true;

    let dataFetchStarted = false;
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

        await this.fetchThlTestData();
        this.$data.isLoadingThlTestData = false;

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
</style>
