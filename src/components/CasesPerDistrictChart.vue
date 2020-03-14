<template>
  <v-card 
    min-height="500px"
    max-height="500px"
    >
    <v-card-title>
      Infections by health care district
    </v-card-title>

    <v-progress-circular
      v-if="isLoading == true" 
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
  name: "CasesPerDistrictChart",

  data: () => ({
    isLoading: true,
    options: {
      theme: {
        mode: 'dark',
        palette: 'palette7' // upto palette10
      },
      // colors: ['#ec407a', '#4caf50'],
      chart: {
        stacked: false,
        type: 'donut',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {

      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'right',
      },
      responsive: [{
        breakpoint: 600,
        options: {
          legend: {
            show: true,
            position: 'bottom',
          },
        },
      }],
      labels: []
    },
    series: [],
  }),

  methods: {
    fetchCasesPerHealthCareDistrict() {
      const casesPerHealthCareDistrict: string|any[] = [];

      const confirmedCases = store.getters['virusCasesFinland/confirmed'];
      const confirmedCasesCount = confirmedCases.length;

      for (let i = 0; i < confirmedCasesCount; i++) {
        let found = false;

        for (let j = 0; j < casesPerHealthCareDistrict.length; j++) {
          if (confirmedCases[i].healthCareDistrict === casesPerHealthCareDistrict[j].healthCareDistrict) {
            found = true;
            casesPerHealthCareDistrict[j].count = casesPerHealthCareDistrict[j].count + 1;
            break;
          }
        }

        if (!found) {
          casesPerHealthCareDistrict.push({
            healthCareDistrict: confirmedCases[i].healthCareDistrict,
            count: 1
          });
        }
      }


      // Add the count to the name of the healthCareDistrict
      const lables: string[] = [];
      const series: number[] = [];

      for (let i = 0; i < casesPerHealthCareDistrict.length; i++) {
        const healthCareDistrict = casesPerHealthCareDistrict[i].healthCareDistrict;
        const count = casesPerHealthCareDistrict[i].count;

        casesPerHealthCareDistrict[i].healthCareDistrict = `${healthCareDistrict} (${count})`;
        lables.push(casesPerHealthCareDistrict[i].healthCareDistrict);
        series.push(count);
      }

      this.$data.options.labels = lables;
      this.$data.series = series;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (this.$data.series === null && store.getters['virusCasesFinland/confirmed'] !== null) {
      this.fetchCasesPerHealthCareDistrict();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        this.fetchCasesPerHealthCareDistrict();
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
  margin-top: 160px
</style>