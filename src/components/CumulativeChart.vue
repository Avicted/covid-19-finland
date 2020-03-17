<template>
  <v-card 
    min-height="400px"
    max-height="400px"
    >
    <v-card-title>
      Cases by day (cumulative)

      <v-spacer></v-spacer>

      <v-menu 
        v-if="series[0].data !== null || !isLoading"
        bottom 
        left>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            outlined 
            color="primary"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in chartStyles"
            :key="i"
            @click="updateChartType(item)"
            dense
            color="primary"
            :class='[item === type ? "v-list-item--active" : ""]'
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
      :series="series">

    </apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import VueApexCharts from 'vue-apexcharts';
import moment from "moment";

export default Vue.extend({
  name: "CumulativeChart",

  data: () => ({
    isLoading: true,
    type: 'area',
    chartStyles: [
      'area',
      'line',
      'bar'
    ],
    options: {
      theme: {
        mode: 'dark', 
      },
      colors: ['#ce93d8', '#81c784', '#e57373'],
      chart: {
        stacked: false,
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
        crosshairs: {
          show: true,
          width: 1,
          position: 'back',
          opacity: 0.9,        
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 3,
          },
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '90%',
        },
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: true,
        followCursor: true,
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      stroke: {
        show: true,
        curve: 'straight',
        colors: undefined,
        width: 2,
        dashArray: 0,      
      },
      grid: {
        borderColor: '#525252',
        strokeDashArray: 7,
      }
    },
    series: [{
      name: 'Infections (cumulative)',
      data: []
    },
    {
      name: 'Recovered (cumulative)',
      data: []
    },
    {
      name: 'Deaths (cumulative)',
      data: []
    }]
  }),

  methods: {
    updateChartType(newChartStyle: string) {
      this.$data.type = newChartStyle;
    },

    fetchData(caseType: string) {
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
        const casesByDay: any = [];

        const generatedDates = [];
        const todaysDate = new Date().toISOString();
        let oldestDate = new Date().toISOString();

        for (let i = 0; i < confirmedCasesCount; i++) {
          const datetime = confirmedCases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const milliseconds = new Date(date).getTime();

          if (Date.parse(datetime) < Date.parse(oldestDate)) {
            oldestDate = datetime;
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
        const oldest = moment(oldestDate).format("YYYY-MM-DD");

        for (let m = moment(oldest); m.isSameOrBefore(today); m.add(1, "days")) {
          const currentMilliseconds = new Date(m.format("YYYY-MM-DD")).getTime();
          generatedDates.push([currentMilliseconds, 0]);
        }

        // Assign the data to the generated dates
        for (let i = 0; i < generatedDates.length; i++) {
          let caseFoundOnDate = false;

          for (let j = 0; j < casesByDay.length; j++) {
            if (casesByDay[j][0] === generatedDates[i][0]) {
              caseFoundOnDate = true;

              if (i > 0) {
                generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1] + casesByDay[j][1];
              } else {
                generatedDates[i][1] = generatedDates[i][1] + casesByDay[j][1];
              }
            }
          }

          if (i > 0 && !caseFoundOnDate) {
            generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1];
          }
        }

        this.$data.series[seriesId].data = generatedDates;

        resolve();
      });
    }
  },

  async mounted() {
    this.$data.isLoading = true;

    this.$store.subscribe(async (mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        await this.fetchData("confirmed");
        await this.fetchData("recovered");
        await this.fetchData("deaths");

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