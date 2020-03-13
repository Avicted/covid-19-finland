import Vue from "vue";
import Vuex from "vuex";
import virusCasesFinland from "./modules/virusCasesFinland";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    virusCasesFinland,
  }
});
