<template>
  <div class="recent-link-container">
    <p>Your Recent Urls:</p>
    <div class="table-container">
      <!-- TODO better table -->
      <table>
        <col width="40%">
        <col width="60%">
        <tr>
          <th>Tiny</th>
          <th>Original</th>
        </tr>
        <tr v-for="(url, index) in localRecentUrls" :key="index">
          <!-- TODO whole area should be clickable -->
          <td class="link-cell">
            <Link :tinyUrl="url" />
          </td>
          <td class="link-cell">
            <Link :tinyUrl="url" :showOriginal="true" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Link from "../Link";

export default {
  name: "RecentUrls",
  components: {
    Link
  },
  data: function() {
    return {
      localRecentUrls: []
    };
  },
  computed: {
    ...mapGetters("recentUrls", ["recentUrls"])
  },
  watch: {
    // this is for watching current tab changes on recent url
    recentUrls: function(value) {
      this.localRecentUrls = value;
    }
  },
  created() {
    this.localRecentUrls = this.$ls.get("urls", []);
    // this will be triggerd when other tabs on browser adding new url to recent urls
    this.$ls.on("urls", val => {
      this.localRecentUrls = val;
    });
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>
