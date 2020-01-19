import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Storage from "vue-ls";

Vue.config.productionTip = false;

const options = {
  namespace: "recent_",
  name: "ls",
  storage: "local"
};
Vue.use(Storage, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
