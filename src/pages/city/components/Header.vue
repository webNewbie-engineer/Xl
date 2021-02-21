<template>
  <div class="header">
    城市选择
    <router-link to="/index">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  @include fzchFa(0.32rem, #fff, 0.86rem);
  background: #00bcd4;
  &-back {
    @include ptl(0.23rem, 0);
    @include WfzchFa(0.64rem, 0.4rem);
  }
}
</style>