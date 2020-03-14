<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <ConfirmedCases />
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
      </v-row>
  </div>
</template>

<script>
import ConfirmedCases from "../components/ConfirmedCases.vue";
import CasesByDayChart from "../components/CasesByDayChart.vue";
import CumulativeChart from "../components/CumulativeChart.vue";
import CasesPerDistrictChart from "../components/CasesPerDistrictChart.vue";

export default {
  name: "Home",
  components: {
    ConfirmedCases,
    CasesByDayChart,
    CumulativeChart,
    CasesPerDistrictChart,
  }
};
</script>

<style lang="sass">
.apexcharts-canvas
  &.apexcharts-theme-dark
    background: transparent !important
</style>
