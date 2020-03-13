<template>
  <v-card 
    min-height="500px"
    max-height="500px"
    >
    <v-card-title>
      Reported infections by day
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
      height="80%"
      :options="options" 
      :series="series">
    </apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import VueApexCharts from 'vue-apexcharts';

export default Vue.extend({
  name: "CasesByDayChart",

  data: () => ({
    isLoading: true,
    options: {
      chart: {
        stacked: false,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '75%',
        },
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom',
      },
    },
    series: [{
      name: 'New infections',
      data: []
    }]
  }),

  methods: {
    fetchChartData() {
      const confirmedCases = store.getters['virusCasesFinland/confirmed'];
        const confirmedCasesCount = confirmedCases.length;

        const confirmedCasesByDay: string|any[] = [];

        for (let i = 0; i < confirmedCasesCount; i++) {
          const datetime = confirmedCases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          const milliseconds = new Date(date).getTime(); 
          
          // Is the current date already stored? If so, increment the case count
          const processedDatesCount = confirmedCasesByDay.length;
          let dateAlreadyProcessed = false;

          for (let i = 0; i < processedDatesCount; i++) {
            const currentMilliseconds = confirmedCasesByDay[i][0];

            if (currentMilliseconds === milliseconds) {
              confirmedCasesByDay[i][1] = confirmedCasesByDay[i][1] + 1;
              dateAlreadyProcessed = true;
              break;
            }
          }

          // If not store it
          if (!dateAlreadyProcessed) {
            confirmedCasesByDay.push([milliseconds, 1]);
          }
        }

        // Example data format: data: [[1324508400000, 34], [1324594800000, 54]]
        // Format the final data for the chart
        const processedDatesCount = confirmedCasesByDay.length;
        for (let i = 0; i < processedDatesCount; i++) {
          this.$data.series[0].data.push(confirmedCasesByDay[i])
        }

      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (this.$data.series[0].data === null && store.getters['virusCasesFinland/confirmed'] !== null) {
      this.fetchChartData();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        this.fetchChartData();
      }
    });
  },
});
</script>

<style lang="sass" scoped>
#progress-loader
  display: block
  width: 100px
  margin: 0 auto
  margin-top: 170px
</style>