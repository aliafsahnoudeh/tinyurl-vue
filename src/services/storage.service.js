import statics from "../constants/statics";
import store from "../store";
// import Vue from "vue";

class StorageService {
  // For unit tests we need to pass vue instance to this function
  // It has a default value for any other cases

  saveNewUrl(newUrl, vueInstance) {
    try {
      const urls = vueInstance.ls.get("urls", []);
      urls.unshift(newUrl);

      //keep list of 10 urls, not more !
      if (urls.length > statics.saved_url_count) {
        urls.splice(statics.saved_url_count, 1);
      }
      // updating the state in vuex
      // RecentUrls will watch recentUrls state and renders on it's changes
      store.dispatch("recentUrls/setRecentUrls", urls);
      //updating other tabs on browser
      vueInstance.ls.set("urls", urls);
    } catch (error) {
      // TODO proper error handeling
      console.error(error);
    }
  }
}

export default StorageService;
