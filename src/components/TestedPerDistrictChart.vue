<template>
  <v-card id="card">
    <v-card-title>
      Tests by health care district
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
  name: "TestedPerDistrictChart",

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
        offsetY: -20,
        style: {
          fontSize: "11px",
          fontWeight: "light"
        }
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
    fetchTestsPerHealthCareDistrict() {
      const healthCareDistrictData = store.getters["virusCasesFinland/hcdTestData"];

      for (const district in healthCareDistrictData) {
        if (district === "Kaikki sairaanhoitopiirit") {
          continue;
        }

        const districtName = district;
        const districtTestCases = healthCareDistrictData[district].tested;
        const newDataSeries = {
          name: districtName,
          data: [districtTestCases]
        };

        this.$data.options.xaxis.categories.push(districtName);
        this.$data.series.push(newDataSeries);
      }

      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (
      this.$data.series === null &&
      store.getters["virusCasesFinland/hcdTestData"] !== null
    ) {
      this.fetchTestsPerHealthCareDistrict();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/HCD_TEST_DATA_FETCHED") {
        this.fetchTestsPerHealthCareDistrict();
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
