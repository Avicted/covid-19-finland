<template>
  <v-app>
    <v-app-bar app dense color="primary" dark>
      
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),

  mounted() {
    store.dispatch('virusCasesFinland/fetchData');
  }
});
</script>
