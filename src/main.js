import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Storage from "vue-ls";
import VueNotifications from "vue-notifications";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "jquery";

Vue.config.productionTip = false;

function toast({ title, message, type, timeout }) {
  if (type === VueNotifications.types.warn) {
    type = "warning";
  }
  return toastr[type](message, title, { timeOut: timeout });
}

const notificationOptions = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

Vue.use(VueNotifications, notificationOptions);

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
