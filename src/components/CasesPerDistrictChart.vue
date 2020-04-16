<template>
  <v-card id="card">
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
      height="87%"
      :options="options"
      :series="series"
    >
    </apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "CasesPerDistrictChart",

  data: () => ({
    isLoading: true,
    options: {
      theme: {
        mode: "dark"
      },
      colors: [
        "#e57373",
        "#f06292",
        "#ba68c8",
        "#9575cd",
        "#7986cb",
        "#64b5f6",
        "#4fc3f7",
        "#4dd0e1",
        "#4db6ac",
        "#81c784",
        "#aed581",
        "#dce775",
        "#fff176",
        "#ffd54f",
        "#ffb74d",
        "#ff8a65",
        "#a1887f"
      ],
      chart: {
        fontFamily: "Roboto",
        stacked: false,
        animations: {
          enabled: false
        },
        type: "bar",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: "middle",
        offsetY: -20
      },
      legend: {
        show: true,
        position: "right"
      },
      grid: {
        borderColor: "#525252",
        strokeDashArray: 7
      },
      xaxis: {
        type: "category",
        categories: [],
        labels: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "100%",
          dataLabels: {
            position: "top"
          }
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            legend: {
              show: true,
              position: "bottom",
              itemMargin: {
                horizontal: 3,
                vertical: 3
              }
            },
            chart: {
              width: "100%",
              height: "85%"
            }
          }
        }
      ],
      tooltip: {
        fillSeriesColor: false,
        shared: false,
        followCursor: true,
        x: {
          show: false
        }
      }
    },
    series: []
  }),

  methods: {
    fetchCasesPerHealthCareDistrict() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const casesPerHealthCareDistrict: string | any[] = [];

      const confirmedCases = store.getters["virusCasesFinland/confirmed"];
      const confirmedCasesCount = confirmedCases.length;

      for (let i = 0; i < confirmedCasesCount; i++) {
        let found = false;

        for (let j = 0; j < casesPerHealthCareDistrict.length; j++) {
          if (confirmedCases[i].healthCareDistrict === null) {
            confirmedCases[i].healthCareDistrict = "Unknown";
          }

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
      const labels: string[] = [];
      const series: number[] = [];

      for (let i = 0; i < casesPerHealthCareDistrict.length; i++) {
        const healthCareDistrict =
          casesPerHealthCareDistrict[i].healthCareDistrict;
        const count = casesPerHealthCareDistrict[i].count;

        // eslint-disable-next-line prettier/prettier
        casesPerHealthCareDistrict[i].healthCareDistrict = `${healthCareDistrict}`;
        labels.push(casesPerHealthCareDistrict[i].healthCareDistrict);
        series.push(count);
      }

      // Create data series
      this.$data.options.xaxis.categories = labels;
      // this.$data.options.xaxis.tickAmount = labels.length;

      for (let i = 0; i < labels.length; i++) {
        const newDataSeries = {
          name: labels[i],
          data: [series[i]]
        };

        this.$data.series.push(newDataSeries);
      }

      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (
      this.$data.series === null &&
      store.getters["virusCasesFinland/confirmed"] !== null
    ) {
      this.fetchCasesPerHealthCareDistrict();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        this.fetchCasesPerHealthCareDistrict();
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
  margin-top: 160px

#card
  min-height: 520px
  max-height: 520px

@media (max-width: 1400px)
  #card
    min-height: 620px
    max-height: 620px
</style>
