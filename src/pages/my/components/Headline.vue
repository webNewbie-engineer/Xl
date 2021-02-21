<template>
  <div class="Headline">
    <!-- 头部 -->
    <div class="Headline-top">
      <div class="Headline-top-Box">
        <div class="left iconfont flex">&#xe61e;</div>
        <div class="CuttingLine"></div>
        <div class="right iconfont flex">&#xe618;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Headline",
};
</script>
<style lang="scss" scoped>
.Headline {
  width: 100%;
  background: #333;
  //   头部
  &-top {
    position: relative;
    @include WH(100%, 0.92rem, 0.2rem 0 0 0, 0 0 -0.02rem 0);
    &-Box {
      @include ptr(0.22rem, 0.14rem);
      display: flex;
      align-items: center;
      @include WH(1.74rem, 0.64rem);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.32rem;
      .flex {
        flex: 1;
        display: flex;
        justify-content: center;
      }
      .CuttingLine {
        @include WH(0.01rem, 0.4rem);
        background: #fff;
        opacity: 0.2;
      }
      .left {
        @include fzc(0.36rem, #fff);
      }
      .right {
        @include fzc(0.36rem, #fff);
      }
    }
  }
}
</style>