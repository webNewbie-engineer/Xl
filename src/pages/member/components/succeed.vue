<template>
  <div class="succeed" v-show="succeedContent">
    <div class="succeed-box">
      <div class="succeed-box-content">
        <span class="iconfont" @click="handClickBtn">&#xe6a4;</span>
        <img
          :src="require(`../../../assets/static/img/member/xlll_erweima.jpg`)"
          alt=""
          class="succeed-box-content-img"
        />
        <p class="succeed-box-content-text">199积分奖励已存入积分账户</p>
        <p class="succeed-box-content-text2">扫码前往【小鹿来了-商城】兑换超值礼品</p>
        <p class="hint">若您已兑换完成，请忽略</p>
      </div>
    </div>
    <div class="succeed-btn">
      <router-link to="/my">长按扫码进入</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "succeed",
  props: {
    succeedContent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handClickBtn() {
      this.$emit("succeedBolck", {
        succeed: false,
        open: false,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.succeed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000000000000;
  background: rgba(0, 0, 0, 0.4);
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &-content {
      position: relative;
      @include WH(6.28rem, 6.28rem);
      border-radius: 0.16rem;
      background: #ffffff;
      animation: showBox 0.5s;
      .iconfont {
        @include ptr(0.21rem, 0.27rem);
        @include fzc(0.36rem, #999);
      }
      &-img {
        @include WH(3.58rem, 3.58rem, 0, 0.57rem 0 0 1.35rem);
      }
      &-text {
        @include fzchFa(0.28rem, #333, 1);
        margin-top: 0.45rem;
      }
      &-text2 {
        @include fzchFa(0.28rem, #333, 1);
        margin-top: 0.15rem;
      }
      .hint {
        @include fzchFa(0.22rem, #999, 1);
        margin-top: 0.4rem;
      }
    }
  }
  &-btn {
    position: fixed;
    top: 10.06rem;
    left: 50%;
    @include WH(5.37rem, 0.81rem);
    @include fzchFa(0.32rem, #fff, 0.81rem);
    transform: translate(-50%, 0);
    border: 0.01rem solid rgb(196, 196, 196);
    border-radius: 0.4rem;
    a {
      color: #fff;
    }
    animation: showBtn 0.5s;
  }
}
@keyframes showBox {
  from {
    transform: scale(0.1, 0.1);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes showBtn {
  from {
    transform: translate(-50%, 0) scale(0.1, 0.1);
  }
  to {
    transform: translate(-50%, 0) scale(1, 1);
  }
}
</style>
