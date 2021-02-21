<template>
  <div class="payment" v-show="paymentConten">
    <div class="payment-box">
      <div class="payment-box-content">
        <span class="iconfont" @click="handClickShut">&#xe6a4;</span>
        <img
          :src="require(`../../../assets/static/img/member/vip.png`)"
          alt=""
          class="payment-box-content-img"
        />
        <h2 class="title">小鹿会员</h2>
        <p class="money">￥199</p>
        <div class="paymentBtn" @click="handClickOpen">微信支付</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "payment",
  props: {
    paymentConten: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handClickShut() {
      this.$emit("paymentBlock", false);
    },
    handClickOpen() {
      this.$emit("paymentOpen", {
          open:true,
          payment:false
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.payment {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000000000000000000000000;
  background: rgba(0, 0, 0, 0.45);
  &-box {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1002;
    &-content {
      position: relative;
      @include WH(7.5rem, 4.32rem);
      background: #f5f5f5;
      .iconfont {
        @include ptr(0.24rem, 0.22rem);
        @include fzc(0.32rem, #ccc);
      }
      &-img {
        @include ptl(0.68rem, 2.84rem);
        @include WH(0.4rem, 0.4rem);
      }
      .title {
        @include ptl(0.72rem, 3.38rem);
        @include fzc(0.32rem, #333);
      }
      .money {
        @include ptl(1.45rem, 0);
        width: 100%;
        @include fzc(0.64rem, #ff5d20);
        text-align: center;
      }
      .paymentBtn {
        @include pbl(0.24rem, 0.25rem);
        @include WH(7.02rem, 0.96rem);
        @include fzchFa(0.36rem, #fff, 0.96rem);
        text-indent: 0.5em;
        border-radius: 0.08rem;
        background: #ff5d20;
      }
    }
  }
}
</style>
