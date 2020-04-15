<template>
  <v-app>
    <!-- <v-app-bar app dense color="primary" dark>
      
    </v-app-bar> -->

    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="display-1 mb-0" style="font-family: monospace !important;">
            Finland COVID-19 data
          </p>
        </v-col>
      </v-row>

      <v-content style="margin-bottom: 25px;">
        <router-view></router-view>
      </v-content>

      <v-footer
        class="font-weight-light"
        style="background: transparent; font-family: monospace;"
      >
        <v-col class="text-center" cols="12">
          <p class="mb-0">
            <a href="https://github.com/Avicted/covid-19-finland">Source code</a>
          </p>
          <p class="mb-0">
            <a href="https://github.com/HS-Datadesk/koronavirus-avoindata">Finland data source</a>
            | Helsingin Sanomat
          </p>
          <p class="mb-0">
            <a href="https://ourworldindata.org/coronavirus-source-data">Global data source</a>
            | World Health Organization (WHO)
          </p>
          <p class="mb-0">
            Developed by:
            <a href="https://twitter.com/Victoranderssen">Victor Anderssén</a>
          </p>
        </v-col>
      </v-footer>
    </v-container>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store";

export default Vue.extend({
  name: "App",

  mounted() {
    store.dispatch("virusCasesFinland/fetchData");

    this.$store.subscribe(async (mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        store.dispatch("virusCasesGlobal/fetchData");
      }
    });
  }
});
</script>
