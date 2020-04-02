<template>
  <v-card min-height="700px" max-height="700px">
    <v-card-title>
      Global per country chart
      <v-spacer></v-spacer>

      <v-select
        :items="countries"
        v-model="selectedCountries"
        :menu-props="{ maxHeight: '600' }"
        label="Select countries"
        multiple
        :loading="isLoading"
        outlined
        hint="Select countries"
        dense
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="grey--text caption">
            (+{{ selectedCountries.length - 1 }} others)
          </span>
        </template>
      </v-select>

      <v-menu v-if="series !== null && !isLoading" bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" outlined color="primary">
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
            :class="[item === type ? 'v-list-item--active' : '']"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>

    <v-progress-circular
      v-if="series == null && isLoading == true"
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <apexchart
      ref="chart"
      v-else
      width="100%"
      height="75%"
      :type="type"
      :options="options"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import moment from "moment";

export default Vue.extend({
  name: "GlobalPerCountryChart",

  data: () => ({
    rawData: [],
    isLoading: true,
    type: "line",
    chartStyles: ["bar", "line", "area"],
    countries: [],
    selectedCountries: ["Finland"],
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
        },
        selection: {
          enabled: false
        },
        animations: {
          enabled: false
        }
      },
      markers: {
        size: 0
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
              const result = (value / 1000).toFixed(0);
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
      /* {
        name: "Infections World (cumulative)",
        data: []
      },
      {
        name: "Deaths World (cumulative)",
        data: []
      } */
    ]
  }),

  watch: {
    // whenever the selectedCountries changes, this function will run
    selectedCountries: function(newSelectedCountries, oldSelectedCountries) {
      this.updateChartData(newSelectedCountries);
    }
  },

  methods: {
    updateChartType(newChartStyle: string) {
      this.$data.type = newChartStyle;
    },

    updateChartData(newSelectedCountries: any) {
      const updatedDataSeries = [];

      for (let i = 0; i < this.$data.rawData.length; i++) {
        const countryName = this.$data.rawData[i].name;

        if (newSelectedCountries.includes(countryName)) {
          updatedDataSeries.push(this.$data.rawData[i]);
        }
      }

      this.$data.series = updatedDataSeries;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    groupBy<T extends any, K extends keyof T>(array: T[], key: K): any {
      return array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, {} as any);
    },

    fetchData() {
      return new Promise((resolve, reject) => {
        const confirmedCases = store.getters["virusCasesGlobal/data"];

        if (!confirmedCases) {
          reject();
        }

        // this.$data.rawData = confirmedCases;

        let casesPerCountry = [];

        // Map all cases to an array of countries with each date as an object
        casesPerCountry = this.groupBy(confirmedCases, "location");

        /* const currentDayData = {
          date: confirmedCases[i].date,
          milliseconds: milliseconds,
          location: confirmedCases[i].location,
          newCases: confirmedCases[i].new_cases,
          newDeaths: confirmedCases[i].new_deaths,
          totalCases: confirmedCases[i].total_cases,
          totalDeaths: confirmedCases[i].total_deaths
        }; */

        // @Note apexcharts shared tooltips does not work with missing dates, therefore
        // we need to generate the same time series for all data series.
        const generatedDates = [];
        const todaysDate = new Date().toISOString();
        let oldestDate = new Date().toISOString();

        // Loop all countries
        for (const countryName in casesPerCountry) {
          this.$data.countries.push(countryName);

          // Loop all cases in selected country
          for (let j = 0; j < casesPerCountry[countryName].length; j++) {
            const datetime = casesPerCountry[countryName][j].date;
            const date = new Date(datetime).toISOString().substr(0, 10);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const milliseconds = new Date(date).getTime();

            if (Date.parse(datetime) < Date.parse(oldestDate)) {
              oldestDate = datetime;
            }
          }
        }

        // Generate missing dates
        const today = moment(todaysDate).format("YYYY-MM-DD");
        const oldest = moment(oldestDate).format("YYYY-MM-DD");

        for (let m = moment(oldest); m.isBefore(today); m.add(1, "days")) {
          const currentMilliseconds = new Date(
            m.format("YYYY-MM-DD")
          ).getTime();
          generatedDates.push([currentMilliseconds, 0]);
        }

        // Actual data assignment to chart data series
        // Loop all countries
        for (const countryName in casesPerCountry) {
          if (countryName === "World") {
            continue;
          }

          /* if (countryName !== "Finland" && countryName !== "Sweden") {
            continue;
          } */

          const dataSeries: any = {
            name: `${countryName}`,
            data: []
          };

          // Create a copy of generatedDates for the current countrys date series
          const dates = generatedDates;

          // Loop all generated dates
          for (let i = 0; i < dates.length; i++) {
            // Loop all cases in selected country
            let dateMatch = false;

            for (let j = 0; j < casesPerCountry[countryName].length; j++) {
              const datetime = casesPerCountry[countryName][j].date;
              const date = new Date(datetime).toISOString();
              const milliseconds = new Date(date).getTime();

              const totalCases = casesPerCountry[countryName][j].total_cases;
              const dataPoint = [milliseconds, totalCases];

              if (milliseconds === dates[i][0]) {
                dateMatch = true;
                dataSeries.data.push(dataPoint);
              }
            }

            if (!dateMatch) {
              dataSeries.data.push(dates[i]);
            }
          }

          // this.$data.series.push(dataSeries);
          this.$data.rawData.push(dataSeries);
        }

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
        this.updateChartData(this.selectedCountries);
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
