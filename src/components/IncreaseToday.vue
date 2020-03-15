<template>
  <v-card 
    min-height="150px"
    max-height="150px"
    >
    <v-card-title class="pb-2">
      Infections change today
    </v-card-title>

    <v-progress-circular
      v-if="increaseToday == null || isLoading == true" 
      id="progress-loader"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card-text v-else>
      <p class="display-3" style="text-align: center; color: #cacaca;">{{ increaseToday }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
import moment from "moment";

export default Vue.extend({
  name: "IncreaseToday",

  data: () => ({
    isLoading: true,
    increaseToday: null,
  }),

  methods: {
    fetchIncreaseToday() {
      const confirmedCases = store.getters['virusCasesFinland/confirmed'];
      const confirmedCasesCount = confirmedCases.length;
      const confirmedCasesByDay: string|any[] = [];
      
      const generatedDates = [];
      const todaysDate = new Date().toISOString();
      let oldestDate = new Date().toISOString();

      for (let i = 0; i < confirmedCasesCount; i++) {
        const datetime = confirmedCases[i].date;
        const date = new Date(datetime).toISOString().substr(0, 10);
        const milliseconds = new Date(date).getTime(); 

        if (Date.parse(datetime) < Date.parse(oldestDate)) {
          oldestDate = datetime;
        }

        // Is the current date already stored? If so, increment the case count
        const processedDatesCount = confirmedCasesByDay.length;
        let dateAlreadyProcessed = false;

        for (let i = 0; i < processedDatesCount; i++) {
          const currentMilliseconds = confirmedCasesByDay[i][0];

          if (currentMilliseconds === milliseconds) {
            confirmedCasesByDay[i][1] = confirmedCasesByDay[i][1] + 1;
            dateAlreadyProcessed = true;
            break;
          }
        }

        // If not store it
        if (!dateAlreadyProcessed) {
          confirmedCasesByDay.push([milliseconds, 1]);
        }
      }

      // Generate missing dates
      const today = moment(todaysDate);
      const oldest = moment(oldestDate);

      for (let m = moment(oldest); m.diff(today, 'days') <= 0; m.add(1, 'days')) {
        const currentMilliseconds = new Date(m.format('YYYY-MM-DD')).getTime();
        generatedDates.push([currentMilliseconds, 0]);
      }

      // Assign the data to the generated dates
      for (let i = 0; i < generatedDates.length; i++) {
        for (let j = 0; j < confirmedCasesByDay.length; j++) {
          const currentCaseDate = confirmedCasesByDay[j][0];
          if (currentCaseDate === generatedDates[i][0]) {
            generatedDates[i][1] = generatedDates[i][1] + confirmedCasesByDay[j][1];
          }
        }
      }

      // Calculate the increase in cases today compared to yesterday
      const casesToday = generatedDates[generatedDates.length - 2][1];
      const casesYesterday = generatedDates[generatedDates.length - 3][1];


      const total = casesToday - casesYesterday;

      if (total > 0) {
        this.$data.increaseToday = `+ ${casesToday - casesYesterday}`;
      } else if (total > 0) {
        this.$data.increaseToday = `- ${casesToday - casesYesterday}`;
      } else {
        this.$data.increaseToday = `${casesToday - casesYesterday}`;
      }

      this.$data.isLoading = false;
    }
  },

  mounted() {
    this.$data.isLoading = true;

    if (this.$data.increaseToday === null && store.getters['virusCasesFinland/confirmed'] !== null) {
      this.fetchIncreaseToday();
    }
    
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'virusCasesFinland/DATA_FETCHED') {
        this.fetchIncreaseToday();
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