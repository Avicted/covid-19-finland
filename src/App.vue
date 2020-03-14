<template>
  <v-app>
    <!-- <v-app-bar app dense color="primary" dark>
      
    </v-app-bar> -->

    <v-container style="margin-bottom: 75px;">
      <v-row>
        <v-col cols="12">
          <p class="display-1">Finland COVID-19 data</p>
        </v-col>
      </v-row>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>

    <v-footer absolute class="font-weight-light" style="background: transparent;">
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} - <strong><a href="https://github.com/Avicted">Avicted</a></strong>
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
    store.dispatch('virusCasesFinland/fetchData');
  }
});
</script>