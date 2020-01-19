import Vue from "vue";
import Vuex from "vuex";
import generate from "./modules/generate";
import recentUrls from "./modules/recentUrls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    generate,
    recentUrls
  }
});
