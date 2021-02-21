<template>
  <div class="start">
    <router-link to="/index">
      <img src="./img/start.png" alt="" class="start-img" />
      <div class="start_Font">数据加载中，请稍等...</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "start",
};
</script>
<style lang="scss" scoped>
.start {
  position: relative;
  @include WH(100%, 100vh);
  overflow: hidden;
  &-img {
    width: 100%;
  }
  &_Font {
    @include pbl(0, 0);
    @include WfzchFa(100%, 0.26rem, #999, 1.2448rem, PingFang-SC-Medium);
  }
}
</style>