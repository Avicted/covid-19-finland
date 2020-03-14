<template>
  <v-card 
    min-height="500px"
    max-height="500px"
    >
    <v-card-title>
      Reported infections / Recovered by day (Cumulative)
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
import moment from "moment";

export default Vue.extend({
  name: "CumulativeChart",

  data: () => ({
    isLoading: true,
    options: {
      colors: ['#ec407a', '#4caf50'],
      chart: {
        stacked: false,
        type: 'area',
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
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: false
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
      }
    },
    series: [{
      name: 'Infections (cumulative)',
      data: []
    },
    {
      name: 'Recovered (cumulative)',
      data: []
    }]
  }),

  methods: {
    fetchChartDataConfirmed() {
      const confirmedCases = store.getters['virusCasesFinland/confirmed'];
      const confirmedCasesCount = confirmedCases.length;
      const confirmedCasesByDay: any = [];
      
      const generatedDates = [];
      const todaysDate = new Date().toISOString();
      let oldestDate = new Date().toISOString();

      for (let i = 0; i < confirmedCasesCount; i++) {
        const datetime = confirmedCases[i].date;
        const date = new Date(datetime).toISOString().substr(0, 10);
        const milliseconds = new Date(date).getTime(); 

        if (Date.parse(datetime) < Date.parse(oldestDate)) {
          oldestDate = datetime;
        }

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

      // Generate missing dates
      const today = moment(todaysDate);
      const oldest = moment(oldestDate);

      for (let m = moment(oldest); m.diff(today, 'days') <= 0; m.add(1, 'days')) {
        const currentMilliseconds = new Date(m.format('YYYY-MM-DD')).getTime();
        generatedDates.push([currentMilliseconds, 0]);
      }

    
      console.log(generatedDates);

      // Assign the data to the generated dates
      for (let i = 0; i < generatedDates.length; i++) {
        let caseFoundOnDate = false;

        for (let j = 0; j < confirmedCasesByDay.length; j++) {
          if (confirmedCasesByDay[j][0] === generatedDates[i][0]) {
            caseFoundOnDate = true;

            if (i > 0) {
              generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1] + confirmedCasesByDay[j][1];
            }
            else {
              generatedDates[i][1] = generatedDates[i][1] + confirmedCasesByDay[j][1];
            }
          }
        }

        if (i > 0 && !caseFoundOnDate) {
          generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1];
        }
      }

      for (let i = 0; i < generatedDates.length; i++) {
        this.$data.series[0].data.push(generatedDates[i])
      }
    },

    fetchChartDataRecovered() {
      const recoveredCases = store.getters['virusCasesFinland/recovered'];
      const recoveredCasesCount = recoveredCases.length;
      const recoveredCasesByDay: string|any[] = [];
      
      const generatedDates = [];
      const todaysDate = new Date().toISOString();
      let oldestDate = new Date().toISOString();

      for (let i = 0; i < recoveredCasesCount; i++) {
        const datetime = recoveredCases[i].date;
        const date = new Date(datetime).toISOString().substr(0, 10);
        const milliseconds = new Date(date).getTime(); 

        if (Date.parse(datetime) < Date.parse(oldestDate)) {
          oldestDate = datetime;
        }

        // Is the current date already stored? If so, increment the case count
        const processedDatesCount = recoveredCasesByDay.length;
        let dateAlreadyProcessed = false;

        for (let i = 0; i < processedDatesCount; i++) {
          const currentMilliseconds = recoveredCasesByDay[i][0];

          if (currentMilliseconds === milliseconds) {
            recoveredCasesByDay[i][1] = recoveredCasesByDay[i][1] + 1;
            dateAlreadyProcessed = true;
            break;
          }
        }

        // If not store it
        if (!dateAlreadyProcessed) {
          recoveredCasesByDay.push([milliseconds, 1]);
        }
      }

      // Generate missing dates
      const today = moment(todaysDate);
      const oldest = moment(oldestDate);

      for (let m = moment(oldest); m.diff(today, 'days') <= 0; m.add(1, 'days')) {
        const currentMilliseconds = new Date(m.format('YYYY-MM-DD')).getTime();
        generatedDates.push([currentMilliseconds, 0]);
      }

      // Assign the data to the generated dates
      for (let i = 0; i < generatedDates.length; i++) {
        let caseFoundOnDate = false;

        for (let j = 0; j < recoveredCasesByDay.length; j++) {
          if (recoveredCasesByDay[j][0] === generatedDates[i][0]) {
            caseFoundOnDate = true;

            if (i > 0) {
              generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1] + recoveredCasesByDay[j][1];
            }
            else {
              generatedDates[i][1] = generatedDates[i][1] + recoveredCasesByDay[j][1];
            }
          }
        }

        if (i > 0 && !caseFoundOnDate) {
          generatedDates[i][1] = generatedDates[i][1] + generatedDates[i - 1][1];
        }
      }

      for (let i = 0; i < generatedDates.length; i++) {
        this.$data.series[1].data.push(generatedDates[i])
      }

      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (this.$data.series[0].data === null && store.getters['virusCasesFinland/confirmed'] !== null) {
      this.fetchChartDataConfirmed();
    }
    if (this.$data.series[0].data === null && store.getters['virusCasesFinland/recovered'] !== null) {
      this.fetchChartDataRecovered();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        this.fetchChartDataConfirmed();
        this.fetchChartDataRecovered();
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