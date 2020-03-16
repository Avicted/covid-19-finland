<template>
  <v-card id="card">
    <v-card-title>
      Infection source countries
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
      :series="series"
    >
    </apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "InfectionSourceChart",

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
        stacked: false,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: "right"
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
              height: "80%"
            }
          }
        }
      ],
      tooltip: {
        fillSeriesColor: false
      },
      labels: []
    },
    series: []
  }),

  methods: {
    fetchInfectionSourceCountries() {
      const casesPerSourceCountry: string | any[] = [];

      const confirmedCases = store.getters["virusCasesFinland/confirmed"];
      const confirmedCasesCount = confirmedCases.length;

      for (let i = 0; i < confirmedCasesCount; i++) {
        let found = false;
        if (
          confirmedCases[i].infectionSourceCountry === "null" ||
          confirmedCases[i].infectionSourceCountry === null ||
          confirmedCases[i].infectionSourceCountry === ""
        ) {
          confirmedCases[i].infectionSourceCountry = "Unknown";
        }

        for (let j = 0; j < casesPerSourceCountry.length; j++) {
          if (
            confirmedCases[i].infectionSourceCountry ===
            casesPerSourceCountry[j].infectionSourceCountry
          ) {
            found = true;
            casesPerSourceCountry[j].count = casesPerSourceCountry[j].count + 1;
            break;
          }
        }

        if (!found) {
          casesPerSourceCountry.push({
            infectionSourceCountry: confirmedCases[i].infectionSourceCountry,
            count: 1
          });
        }
      }

      // Add the count to the name of the infectionSourceCountry
      const lables: string[] = [];
      const series: number[] = [];

      for (let i = 0; i < casesPerSourceCountry.length; i++) {
        const infectionSourceCountry =
          casesPerSourceCountry[i].infectionSourceCountry;
        const count = casesPerSourceCountry[i].count;

        casesPerSourceCountry[
          i
        ].infectionSourceCountry = `${infectionSourceCountry} (${count})`;
        lables.push(casesPerSourceCountry[i].infectionSourceCountry);
        series.push(count);
      }

      this.$data.options.labels = lables;
      this.$data.series = series;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        this.fetchInfectionSourceCountries();
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
  min-height: 500px
  max-height: 500px

@media (max-width: 1400px)
  #card
    min-height: 600px
    max-height: 600px
</style>
