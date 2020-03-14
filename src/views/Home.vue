<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <ConfirmedCases />
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <RecoveredCases />
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <DeathCases />
      </v-col>
      <v-col cols="12" sm="12" md="3">
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
        <v-col cols="12" sm="12" md="6">
          <CasesPerDistrictChart />
        </v-col>
        <!-- <v-col cols="12" sm="12" md="6">
          <CasesByDayChartLog />
        </v-col> -->
      </v-row>
  </div>
</template>

<script>
import ConfirmedCases from "../components/ConfirmedCases.vue";
import RecoveredCases from "../components/RecoveredCases.vue";
import DeathCases from "../components/DeathCases.vue";
import IncreaseToday from "../components/IncreaseToday.vue";

import CasesByDayChart from "../components/CasesByDayChart.vue";
import CumulativeChart from "../components/CumulativeChart.vue";
import CasesPerDistrictChart from "../components/CasesPerDistrictChart.vue";
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
    // CasesByDayChartLog,
  }
};
</script>

<style lang="sass">
.apexcharts-canvas
  &.apexcharts-theme-dark
    background: transparent !important
</style>
