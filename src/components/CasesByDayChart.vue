<template>
  <v-container>
    <ul v-if="confirmedCasesFinland !== null">
      <div v-for="entry in confirmedCasesFinland" :key="entry.id">
        {{ entry }}
      </div>
    </ul>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "CasesByDayChart",

  data: () => ({
    
  }),

  computed: {
    confirmedCasesFinland: () => store.getters['virusCasesFinland/confirmed']
  },

});
</script>
