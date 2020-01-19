<template>
  <div class="link-box-container">
    <p class="your-tiny-url-title" v-show="showLink">Your Tiny Url:</p>
    <div class="your-url" v-show="showLink">
      <Link class="link new-link" :tinyUrl="newUrl" />
      <button @click="copyUrl">Copy</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Link from "../Link";

export default {
  name: "linkBox",
  components: {
    Link
  },
  mounted() {
    document.addEventListener("copy", e => {
      e.clipboardData.setData("text/plain", this.newUrl.tiny);
      e.preventDefault();
    });
  },
  computed: {
    ...mapGetters("generate", ["newUrl"]),
    showLink: function() {
      return this.newUrl && this.newUrl.tiny && this.newUrl.tiny.length > 0;
    }
  },
  methods: {
    copyUrl() {
      try {
        document.execCommand("copy");
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>
