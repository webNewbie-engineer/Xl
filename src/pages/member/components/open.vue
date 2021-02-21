<template>
  <div class="open" v-show="openContent">
    <div class="open-box">
      <div class="open-box-top">
        <p class="title">已成功开通小鹿会员</p>
        <h2 class="text">专享会员特权</h2>
        <img
          :src="require(`../../../assets/static/img/member/true.png`)"
          alt=""
          class="open-box-top-img"
        />
      </div>
      <h2 class="congratulation">恭喜你获得199积分</h2>
      <p class="textContent">可前往【小鹿来了】兑换超值礼品</p>
      <div class="openBtn" @click="handClickBtn">马上去兑换</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "open",
  props: {
    openContent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handClickBtn() {
      this.$emit("succeedBolck", {
        succeed: true,
        open: false,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.open {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000000000000000000000;
  background: rgba(0, 0, 0, 0.45);
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    @include WH(6.28rem, 6.28rem);
    transform: translate(-50%, -50%);
    border-radius: 0.16rem;
    background: #fff;
    animation: showBox 0.5s;
    &-top {
      position: relative;
      @include WH(100%, 1.86rem);
      border-top-left-radius: 0.16rem;
      border-top-right-radius: 0.16rem;
      background: linear-gradient(-16deg, #eabfa8 0%, #f9e7db 100%);
      .title {
        @include fzchFa(0.32rem, #333, 1);
        padding-top: 0.62rem;
      }
      .text {
        @include fzchFa(0.32rem, #ae8166, 1);
        padding-top: 0.22rem;
      }
      &-img {
        @include ptl(0.58rem, 1.12rem);
        @include WH(0.4rem, 0.4rem);
      }
    }
    .congratulation {
      @include fzchFa(0.36rem, #ff5d20, 1);
      margin-top: 0.84rem;
    }
    .textContent {
      @include fzchFa(0.28rem, #666, 1);
      margin-top: 0.36rem;
    }
    .openBtn {
      @include WH(4.58rem, 0.92rem, 0, 1.07rem auto 0);
      @include fzchFa(0.32rem, #fff, 0.92rem);
      border: 0.01rem solid #ff5d20;
      border-radius: 0.46rem;
      background: #ff5d20;
    }
  }
}

@keyframes showBox {
  from {
    transform: translate(-50%, -50%) scale(0.1, 0.1);
  }
  to {
    transform: translate(-50%, -50%) scale(1, 1);
  }
}
</style>
