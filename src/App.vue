<template>
  <v-app>
    <v-progress-linear
      :active="isLoading"
      :indeterminate="false"
      :top="true"
      :value="loadingValue"
      :buffer-value="0"
      :stream="true"
      color="primary"
    ></v-progress-linear>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="display-1 mb-0 font-weight-light">
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
    isLoading: false,
    loadingValue: 0
  }),

  async mounted() {
    this.$data.isLoading = true;

    await Promise.all([
      store.dispatch("virusCasesFinland/fetchData"),
      store.dispatch("virusCasesFinland/fetchHcdTestData"),
      store.dispatch("virusCasesFinland/fetchThlTestData")
    ]);

    this.$data.loadingValue = 75;

    setTimeout(() => {
      store.dispatch("virusCasesGlobal/fetchData").then(() => {
        this.$data.loadingValue = 100;
        this.$data.isLoading = false;
      });
    }, 1000);
  }
});
</script>
