<template>
  <v-card>
    <apexchart v-if="series[0].data !== null && isLoading == false" type="bar" :options="options" :series="series"></apexchart>
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
        width: '100%',
        height: '100',
      },
      xaxis: {
        type: 'datetime',
      },
    },
    series: [{
      name: 'Confirmed cases',
      data: []
    }]
  }),

  mounted() {
    this.$data.isLoading = true;

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        const confirmedCases = store.getters['virusCasesFinland/confirmed'];
        const confirmedCasesCount = confirmedCases.length;

        const confirmedCasesByDay: string|any[] = [];

        for (let i = 0; i < confirmedCasesCount; i++) {
          const datetime = confirmedCases[i].date;
          const date = new Date(datetime).toISOString().substr(0, 10);
          const milliseconds = new Date(date).getTime(); 
          
          /*
            datetime:"2020-01-29T11:00:00.000Z"
            date: "2020-01-29"
            milliseconds: 1580256000000
            healthCareDistrict:"Lappi"
            id:"1"
            infectionSource:"unknown"
            infectionSourceCountry:"CHN"
            confirmedCasesOnDate: 1
          */

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
      }

      this.$data.isLoading = false;
    });
  },
});
</script>
