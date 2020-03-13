<template>
  <v-container>
    <ul v-if="confirmedCasesFinland">
      {{ confirmedCasesFinland }}
    </ul>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
   
  }),

  computed: {
    confirmedCasesFinland: () => store.getters['virusCasesFinland/confirmed']
  },

});
</script>
