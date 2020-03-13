<template>
  <v-app>
    <!-- <v-app-bar app dense color="primary" dark>
      
    </v-app-bar> -->

    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="display-1">Finland COVID-19 data</p>
        </v-col>
      </v-row>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
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
