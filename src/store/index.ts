import Vue from "vue";
import Vuex from "vuex";
import virusCasesFinland from "./modules/virusCasesFinland";
import virusCasesGlobal from "./modules/virusCasesGlobal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    virusCasesFinland,
    virusCasesGlobal
  }
});
