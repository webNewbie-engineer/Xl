<template>
  <div class="topHeadline">
    <div class="topHeadline_Headline">{{title}}</div>
    <div class="topHeadline_Left">
      <div class="left iconfont flex">&#xe61e;</div>
      <div class="CuttingLine"></div>
      <div class="right flex">
        <img src="../img/topHeadline/topHeadline.jpg" alt="" class="rightimg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topHeadline",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.topHeadline {
  position: relative;
  @include WH(100%, 1.13rem);
  padding-top: 0.22rem;
  background: #ff5d20;
  &_Headline {
    @include fzchFa(0.36rem, #ffffff, 0.64rem, PingFang-SC-Medium);
  }
  &_Left {
    @include ptr(0.22rem, 0.14rem);
    display: flex;
    align-items: center;
    @include WH(1.74rem, 0.64rem);
    border: 0.01rem solid rgba(255, 255, 255, 0.2);
    border-radius: 0.32rem;
    background: rgba(33, 33, 33, 0.2);
    .flex {
      flex: 1;
    }
    .CuttingLine {
      @include WH(0.01rem, 0.4rem);
      background: #ffffff;
      opacity: 0.2;
    }
    .left {
      display: flex;
      justify-content: center;
      @include fzc(0.45rem, #fff);
    }
    .right {
      display: flex;
      justify-content: center;
      &img {
        @include WH(0.36rem, 0.36rem);
      }
    }
  }
}
</style>
