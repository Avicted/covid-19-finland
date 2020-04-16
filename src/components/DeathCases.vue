<template>
  <v-card min-height="110px" max-height="110px">
    <v-card-title class="pb-0 pt-2">
      Deaths
    </v-card-title>

    <v-progress-circular
      v-if="deathCases == null || isLoading == true"
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card-text v-else>
      <p class="display-2" style="text-align: center; color: #e57373;">
        {{ deathCases }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "DeathCases",

  data: () => ({
    isLoading: true,
    deathCases: null
  }),

  methods: {
    fetchdeathCases() {
      const deathCases = store.getters["virusCasesFinland/deaths"];
      const deathCasesCount = deathCases.length;
      this.$data.deathCases = deathCasesCount;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (
      this.$data.deathCases === null &&
      store.getters["virusCasesFinland/deaths"] !== null
    ) {
      this.fetchdeathCases();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/DATA_FETCHED") {
        this.fetchdeathCases();
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
