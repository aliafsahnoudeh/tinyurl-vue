<template>
  <div class="home">
    <div class="header">
      <p class="header-text">A Tiny Url Service Web Application</p>
    </div>
    <Shortener />
    <RecentUrls />
  </div>
</template>

<script>
import Shortener from "@/components/Shortener";
import RecentUrls from "@/components/RecentUrls";

export default {
  name: "home",
  components: {
    Shortener,
    RecentUrls
  }
};
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
