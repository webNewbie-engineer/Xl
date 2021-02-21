<template>
  <div class="top">
    <div
      class="top-Headline"
      :style="{
        background: '#fff',
      }"
    >
      <div class="iconfont top-Headline-return" @click.stop="back">&#xe624;</div>
      <div class="top-Headline-Font">我的邀请</div>
      <div class="top-Headline-Box">
        <div class="left iconfont flex">&#xe61e;</div>
        <div class="CuttingLine"></div>
        <div class="right iconfont flex">&#xe618;</div>
      </div>
    </div>
    <ul class="top-list">
      <li
        v-for="(item, index) of revenueListContent.title"
        :key="index"
        class="top-list-item"
      >
        <div
          :style="{
            background: item.background,
          }"
        ></div>
        {{ `${item.title}${item.num}` }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "top",
  props: {
    revenueListContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000000000000;
  background: #fff;
  &-Headline {
    position: relative;
    display: flex;
    @include WH(100%, 0.97rem, 0.2rem 0 0 0, 0);
    z-index: 100000000;
    background: #fff;
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
    &-Font {
      flex: 1;
      @include fzchFa(0.36rem, #333, 0.64rem);
    }
  }
  &-list {
    display: flex;
    padding-bottom: 0.2rem;
    margin-top: 0.32rem;
    &-item {
      flex: 1;
      display: flex;
      justify-content: center;
      @include fzchFa(0.32rem, #333, 1);
      div {
        @include WH(0.14rem, 0.14rem);
        border-radius: 50%;
        margin: 0.095rem 0.15rem 0 0;
      }
    }
  }
}
</style>
