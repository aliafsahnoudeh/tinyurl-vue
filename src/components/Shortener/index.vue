<template>
  <div class="shortener-container">
    <input v-model="url" />
    <button @click="handleClick">Convert !</button>
    <linkBox />
  </div>
</template>

<script>
import linkBox from "../LinkBox";
import ShortenerService from "../../services/shortener.serivce";

export default {
  name: "Shortener",
  components: { linkBox },
  data() {
    return {
      shortenerService: new ShortenerService(),
      url: ""
    };
  },
  methods: {
    handleClick() {
      this.shortenerService.generateTinyUrl(this.url);
      this.url = "";
    }
  }
};
</script>

<style lang="scss">
@import url("./style.scss");
</style>
