<template>
  <v-app>
    <!-- <v-progress-linear
      :active="isLoading"
      :indeterminate="true"
      :top="true"
      color="light-blue"
    ></v-progress-linear> -->
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

  data: () => ({
    isLoading: true
  }),

  mounted() {
    store.dispatch("virusCasesFinland/fetchData").then(() => {
      setTimeout(() => {
        store.dispatch("virusCasesGlobal/fetchData");
      }, 1000);
    });

    this.$store.subscribe(async (mutation, state) => {
      /* if (mutation.type === "virusCasesFinland/LOADING") {
        console.log(mutation.payload);
        if (mutation.payload === true) {
          this.$data.isLoading = true;
        }
      }
      if (mutation.type === "virusCasesGlobal/LOADING") {
        if (mutation.payload === false) {
          this.$data.isLoading = false;
        }
      } */

      if (mutation.type === "virusCasesGlobal/LOADING") {
        if (mutation.payload === false) {
          this.$data.isLoading = false;
        }
      }
    });
  }
});
</script>
