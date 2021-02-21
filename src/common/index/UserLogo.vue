<template>
  <div class="logo" v-show="logoState">
    <div class="logo-box">
      <img src="~@/assets/static/img/my/undefined.png" alt="" class="logo-box-img" />
      <h4 class="logo-box-title">小鹿日记</h4>
      <p class="logo-box-text">乐享身边优惠 轻松长久赚钱</p>
      <div @click="btn" class="logo-box-btn">开启乐享生活</div>
      <div @click="btnTwo" class="logo-box-look">再看看</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "logo",
  props: {
    logoState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    btn() {
      this.$emit("logoUndefined", false);
      //跳转至注册页面
      this.$router.replace("/register");
    },
    btnTwo() {
      this.$emit("logoUndefined", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  @include CoverLayer;
  &-box {
    @include ptl(50%, 50%);
    @include WH(5.32rem, 5.78rem);
    transform: translate(-50%, -50%);
    animation: showBox 0.5s;
    border-radius: 0.16rem;
    background: #fff;
    &-img {
      @include WH(0.73rem, 0.96rem, 0, 0.68rem 0 0 2.355rem);
    }
    &-title {
      @include fzchFa(0.4rem, #48342d, 1);
      font-family: FangSong;
      margin-top: 0.2rem;
    }
    &-text {
      @include fzchFa(0.28rem, #333, 1);
      margin: 0.44rem 0 1.06rem 0;
    }
    &-btn {
      @include WH(4.2rem, 0.88rem, 0, 0 auto);
      @include fzchFa(0.32rem, #fff, 0.88rem);
      border-radius: 0.44rem;
      background: #ff5d20;
    }
    &-look {
      @include fzchFa(0.26rem, #999, 1);
      margin-top: 0.3rem;
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
