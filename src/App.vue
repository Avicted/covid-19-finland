<template>
  <v-app>
    <!-- <v-app-bar app dense color="primary" dark>
      
    </v-app-bar> -->

    <v-content>
      <CasesByDayChart />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store";
import CasesByDayChart from "./components/CasesByDayChart.vue";

export default Vue.extend({
  name: "App",

  components: {
    CasesByDayChart
  },

  data: () => ({
    //
  }),

  mounted() {
    store.dispatch('virusCasesFinland/fetchData');
  }
});
</script>
