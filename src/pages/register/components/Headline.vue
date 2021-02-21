<template>
  <div class="Headline">
    <div class="iconfont Headline-return" @click="back">&#xe624;</div>
    <div class="Headline-Box">
      <div class="left iconfont flex">&#xe61e;</div>
      <div class="CuttingLine"></div>
      <div class="right iconfont flex">&#xe618;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Headline",
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
.Headline {
  position: relative;
  display: flex;
  @include WH(100%, 0.84rem);
  &-return {
    @include ptl(0.37rem, 0.37rem);
    @include fzc(0.34rem, #333);
  }
  &-Box {
    @include ptr(0.22rem, 0.14rem);
    display: flex;
    align-items: center;
    @include WH(1.74rem, 0.64rem);
    background: #ffffff;
    border: 0.01rem solid #eaeaea;
    border-radius: 0.32rem;
    .flex {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    .CuttingLine {
      @include WH(0.01rem, 0.4rem);
      background: #cbcbcb;
      opacity: 0.2;
    }
    .left {
      @include fzc(0.36rem, #000);
    }
    .right {
      @include fzc(0.36rem, #000);
    }
  }
}
</style>
