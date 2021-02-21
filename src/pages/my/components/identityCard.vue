<template>
  <div class="identityCard" v-show="identityCardNone">
    <div class="identityCard-box">
      <img
        src="~@/assets/static/img/my/identityCard.png"
        alt=""
        class="identityCard-box-img"
      />
      <p class="identityCard-box-title">实名认证即可提现</p>
      <p class="identityCard-box-content">
        提现收益时需按国家规定预扣个人所 得税，因此需要您先完成实名认证
      </p>
      <div class="identityCard-box-btn" @click="certification">好的，去认证</div>
    </div>
    <div class="cancel" @click="cancel">X</div>
  </div>
</template>
<script>
export default {
  name: "identityCard",
  data() {
    return {
      identityCardNone: false,
    };
  },
  methods: {
    cancel() {
      //隐藏认证提醒
      this.identityCardNone = false;
    },
    certification() {
      //去认证
      this.identityCardNone = false;
      this.$router.replace("/certification");
    },
  },
};
</script>
<style lang="scss" scoped>
.identityCard {
  @include CoverLayer;
  &-box {
    @include ptl(50%, 50%);
    width: 5.2rem;
    transform: translate(-50%, -50%);
    border-radius: 0.2rem;
    background: #fff;
    animation: showBox 0.5s;
    &-img {
      width: 100%;
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
    }
    &-title {
      @include fzchFa(0.36rem, #ff5d20, 1);
      margin-top: 0.49rem;
    }
    &-content {
      width: 4.5rem;
      @include fzch(0.28rem, #666, 1.4);
      margin: 0.31rem auto 0;
    }
    &-btn {
      @include WH(4.4rem, 0.79rem, 0, 0.77rem auto 0.53rem);
      @include fzchFa(0.32rem, #fff, 0.79rem);
      border-radius: 0.1rem;
      background: #ff5d20;
    }
  }
  .cancel {
    @include ptl(75%, 50%);
    @include WH(0.8rem, 0.8rem);
    @include fzchFa(0.36rem, #fff, 0.8rem);
    transform: translate(-50%, 0);
    border: 0.02rem solid #ffffff;
    border-radius: 50%;
    animation: showcancel 0.5s;
  }
  @keyframes showBox {
    from {
      transform: translate(-50%, -50%) scale(0.1, 0.1);
    }
    to {
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
  @keyframes showcancel {
    from {
      transform: translate(-75%, -50%) scale(0.1, 0.1);
    }
    to {
      transform: translate(-75%, -50%) scale(1, 1);
    }
  }
}
</style>
