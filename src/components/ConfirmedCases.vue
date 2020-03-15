<template>
  <v-card 
    min-height="150px"
    max-height="150px"
    >
    <v-card-title class="pb-2">
      Confirmed cases
    </v-card-title>

    <v-progress-circular
      v-if="confirmedCases == null || isLoading == true" 
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card-text v-else>
      <p class="display-3" style="text-align: center; color: #ce93d8;">{{ confirmedCases }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "ConfirmedCases",

  data: () => ({
    isLoading: true,
    confirmedCases: null,
  }),

  methods: {
    fetchConfirmedCases() {
      const confirmedCases = store.getters['virusCasesFinland/confirmed'];
      const confirmedCasesCount = confirmedCases.length;
      this.$data.confirmedCases = confirmedCasesCount;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (this.$data.confirmedCases === null && store.getters['virusCasesFinland/confirmed'] !== null) {
      this.fetchConfirmedCases();
    }
    
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        this.fetchConfirmedCases();
      }
    });
  },
});
</script>

<style lang="sass" scoped>
#progress-loader
  display: block
  width: 100px
  margin: 0 auto
</style>