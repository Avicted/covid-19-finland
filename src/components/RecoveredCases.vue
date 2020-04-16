<template>
  <v-card min-height="110px" max-height="110px">
    <v-card-title class="pb-0 pt-2">
      Recovered cases
    </v-card-title>

    <v-progress-circular
      v-if="recoveredCases == null || isLoading == true"
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card-text v-else>
      <p class="display-2" style="text-align: center; color: #a5d6a7;">
        {{ recoveredCases }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "recoveredCases",

  data: () => ({
    isLoading: true,
    recoveredCases: null
  }),

  methods: {
    fetchRecoveredCases() {
      const recoveredCases = store.getters["virusCasesFinland/recovered"];
      const recoveredCasesCount = recoveredCases.length;
      this.$data.recoveredCases = recoveredCasesCount;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (
      this.$data.recoveredCases === null &&
      store.getters["virusCasesFinland/recovered"] !== null
    ) {
      this.fetchRecoveredCases();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        this.fetchRecoveredCases();
      }
    });
  }
});
</script>

<style lang="sass" scoped>
#progress-loader
  display: block
  width: 100px
  margin: 0 auto

.v-card__text
  p
    font-family: Roboto !important
</style>
