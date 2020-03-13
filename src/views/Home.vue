<template>
  <div class="home">
     <v-row>
        <v-col cols="12" sm="12" md="6">
          <CasesByDayChart />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          Right
        </v-col>
      </v-row>
  </div>
</template>

<script>
import CasesByDayChart from "../components/CasesByDayChart.vue";

export default {
  name: "Home",
  components: {
    CasesByDayChart
  }
};
</script>
