import VueNotifications from "vue-notifications";

export default {
  showInvalidUrl: {
    type: VueNotifications.types.warn,
    title: "Warning",
    message: "Entered url has invalid format",
    timeout: 3000
  },
  showDynamicMsg: {
    type() {
      const { info, success } = VueNotifications.types;
      return new Date().getSeconds() % 2 === 0 ? info : success;
    },
    title() {
      return `My title: ${1}`;
    },
    message() {
      return `Current time is${new Date().getTime()}`;
    }
  }
};
