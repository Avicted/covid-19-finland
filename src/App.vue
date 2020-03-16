<template>
  <v-app>
    <!-- <v-app-bar app dense color="primary" dark>
      
    </v-app-bar> -->

    <v-container style="margin-bottom: 120px;">
      <v-row>
        <v-col cols="12">
          <p class="display-1 mb-0" style="font-family: monospace !important;">
            Finland COVID-19 data
          </p>
        </v-col>
      </v-row>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>

    <v-footer
      absolute
      class="font-weight-light"
      style="background: transparent; font-family: monospace;"
    >
      <v-col class="text-center" cols="12">
        <p class="mb-0">
          <a href="https://github.com/Avicted/covid-19-finland">Source code</a>
        </p>
        <p class="mb-0">
          <a href="https://github.com/HS-Datadesk/koronavirus-avoindata">Data source</a>
          © 2020 Helsingin Sanomat
        </p>
        <p class="mb-0">
          Developed by:
          <a href="https://twitter.com/Victoranderssen">Victor Anderssén</a>
        </p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store";

export default Vue.extend({
  name: "App",

  mounted() {
    store.dispatch("virusCasesFinland/fetchData");
  }
});
</script>
