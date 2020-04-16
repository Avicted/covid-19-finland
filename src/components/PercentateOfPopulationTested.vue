<template>
  <v-card min-height="110px" max-height="110px">
    <v-card-title class="pb-0 pt-2">% of population tested</v-card-title>

    <v-progress-circular
      v-if="hcdTestData == null || isLoading == true"
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card-text v-else>
      <p class="display-2" style="text-align: center; color: rgb(255, 213, 79);">{{ testedPercentage }} %</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "PercentageOfPopulationTested",

  data: () => ({
    isLoading: true,
    hcdTestData: null
  }),

  computed: {
    testedPercentage() {
      if (this.$data.hcdTestData !== null) {
        const tested = this.$data.hcdTestData["Kaikki sairaanhoitopiirit"].tested;
        const population = this.$data.hcdTestData["Kaikki sairaanhoitopiirit"].population;

        const percentageOfPopulationTested = ((tested / population) * 100).toFixed(2);
        return percentageOfPopulationTested;
      } else {
        return null;
      }
    }
  },

  methods: {
    fetchtested() {
      const hcdTestData = store.getters["virusCasesFinland/hcdTestData"];
      this.$data.hcdTestData = hcdTestData;
      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (
      this.$data.tested === null &&
      store.getters["virusCasesFinland/hcdTestData"] !== null
    ) {
      this.fetchtested();
    }

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "virusCasesFinland/HCD_TEST_DATA_FETCHED") {
        this.fetchtested();
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
</style>
