<template>
  <div class="link-container" @click="openLink">
    <!-- show one p and handle value in beforeMount -->
    <p class="link" v-if="showOriginal" type="text">
      {{ tinyUrl.original }}
    </p>
    <p class="link" v-else type="text">
      {{ tinyUrl.tiny }}
    </p>
  </div>
</template>

<script>
import TinyUrlModel from "@/constants/tinyUrl";
export default {
  name: "Link",
  props: {
    tinyUrl: {
      default() {
        return new TinyUrlModel("", "");
      },
      type: Object
    },
    showOriginal: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    openLink() {
      window.open(this.tinyUrl.original, "_blank");
    }
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>
