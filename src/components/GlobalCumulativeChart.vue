<template>
  <v-card min-height="400px" max-height="400px">
    <v-card-title>
      Cases by day (cumulative)
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

export default Vue.extend({
  name: "GlobalCumulativeChart",

  data: () => ({
    isLoading: true,
    type: "area",
    chartStyles: ["bar", "line", "area"],
    options: {
      theme: {
        mode: "dark"
      },
      colors: ["#ce93d8", "#e57373"],
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
      /* yaxis: {
        tickAmount: 4,
        logarithmic: false,
      }, */
      yaxis: {
        labels: {
          formatter: function(value: number) {
            if (value > 1000) {
              return `${value / 1000}k`;
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
        followCursor: true,
        y: {
          formatter: function(value: number) {
            if (value > 1000) {
              const result = (value / 1000).toFixed(2);
              return `${result}k`;
            } else {
              return value;
            }
          }
        }
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
        name: "Cases World (cumulative)",
        data: []
      },
      {
        name: "Deaths World (cumulative)",
        data: []
      }
    ]
  }),

  methods: {
    updateChartType(newChartStyle: string) {
      this.$data.type = newChartStyle;
    },

    fetchData() {
      return new Promise((resolve, reject) => {
        const confirmedCases = store.getters["virusCasesGlobal/data"];
        const confirmedCasesCount = confirmedCases.length;

        const worldCasesTotal = [];
        const worldCasesDeaths = [];

        for (let i = 0; i < confirmedCasesCount; i++) {
          if (confirmedCases[i].location === "World") {
            const datetime = confirmedCases[i].date;
            const date = new Date(datetime).toISOString();
            const milliseconds = new Date(date).getTime();

            /* const currentDayData = {
              date: confirmedCases[i].date,
              milliseconds: milliseconds,
              location: confirmedCases[i].location,
              newCases: confirmedCases[i].new_cases,
              newDeaths: confirmedCases[i].new_deaths,
              totalCases: confirmedCases[i].total_cases,
              totalDeaths: confirmedCases[i].total_deaths
            }; */

            const currentTotal = [milliseconds, confirmedCases[i].total_cases];

            worldCasesTotal.push(currentTotal);

            const currentDeaths = [milliseconds, confirmedCases[i].total_deaths];

            worldCasesDeaths.push(currentDeaths);
          }
        }

        this.$data.series[0].data = worldCasesTotal;
        this.$data.series[1].data = worldCasesDeaths;
        resolve();
      });
    }
  },

  async mounted() {
    this.$data.isLoading = true;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.$store.subscribe(async (mutation, state) => {
      if (mutation.type === "virusCasesGlobal/DATA_FETCHED") {
        await this.fetchData();
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
