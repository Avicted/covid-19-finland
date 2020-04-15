<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="12" md="6" xl="3">
        <ConfirmedCases />
      </v-col>
      <v-col cols="12" sm="12" md="6" xl="3">
        <RecoveredCases />
      </v-col>
      <v-col cols="12" sm="12" md="6" xl="3">
        <DeathCases />
      </v-col>
      <v-col cols="12" sm="12" md="6" xl="3">
        <IncreaseToday />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <CasesByDayChart />
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <CumulativeChart />
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <CasesPerDistrictChart />
      </v-col>
      <!-- <v-col cols="12" sm="12" md="6">
        <InfectionSourceChart />
      </v-col> -->
      <!-- <v-col cols="12" sm="12" md="6">
        <CasesByDayChartLog />
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="12">
        <p class="display-1 mb-0 mt-5" style="font-family: monospace !important;">
          Global COVID-19 data
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <GlobalCumulativeChart />
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <GlobalPerCountryChart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Data for Finland
import ConfirmedCases from "../components/ConfirmedCases.vue";
import RecoveredCases from "../components/RecoveredCases.vue";
import DeathCases from "../components/DeathCases.vue";
import IncreaseToday from "../components/IncreaseToday.vue";

import CasesByDayChart from "../components/CasesByDayChart.vue";
import CumulativeChart from "../components/CumulativeChart.vue";
import CasesPerDistrictChart from "../components/CasesPerDistrictChart.vue";
import GlobalPerCountryChart from "../components/GlobalPerCountryChart.vue";

// @Note: not in use at the moment because the new api v2 does not provide this data
// import InfectionSourceChart from "../components/InfectionSourceChart.vue";

// GLobal data
import GlobalCumulativeChart from "../components/GlobalCumulativeChart.vue";

// @Note: logarithmic: true is broken in ApexCharts at the moment
// import CasesByDayChartLog from "../components/CasesByDayChartLog.vue";

export default {
  name: "Home",
  components: {
    ConfirmedCases,
    RecoveredCases,
    DeathCases,
    IncreaseToday,

    CasesByDayChart,
    CumulativeChart,
    CasesPerDistrictChart,
    GlobalPerCountryChart,
    // InfectionSourceChart,
    // CasesByDayChartLog,

    GlobalCumulativeChart
  }
};
</script>

<style lang="sass">
#app
  font-family: monospace !important

.apexcharts-canvas
  &.apexcharts-theme-dark
    background: transparent !important
    .apexcharts-tooltip
      .apexcharts-tooltip-series-group
        padding-bottom: 5px
        .apexcharts-tooltip-text
          line-height: 12px

.v-menu__content
  &::-webkit-scrollbar
    height: 8px
    width: 8px

  &::-webkit-scrollbar-track
    background: #2b2b2b
    border-radius: 10px

  &::-webkit-scrollbar-thumb
    background: #6f6f6f
    border-radius: 8px

.menuable__content__active
  z-index: 1000 !important

.v-application
  background: linear-gradient(#182833, #0b0f17) !important

  .v-card
    background-color: rgba(12, 12, 12, 0.75)

.v-card__title
  font-size: 1rem

#chart-style-btn
    &::before
      opacity: 0.08
    &:hover
      &::before
        opacity: 0.16
</style>
