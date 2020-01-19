<template>
  <p v-if="showError">Sorry the link isn't exists</p>
</template>

<script>
import StorageService from "../../services/storage.service";

export default {
  name: "Redirector",
  data() {
    return {
      showError: false,
      storageService: new StorageService()
    };
  },
  mounted() {
    const linkId = window.location.href;
    if (!linkId) return (this.showError = true);
    const urls = this.$ls.get("urls", []);
    for (let i = 0; i < urls.length; i++) {
      if (window.location.href === urls[i].tiny) {
        return window.location.replace(urls[i].original);
      }
    }
    this.showError = true;
  }
};
</script>

<style></style>
