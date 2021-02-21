<template>
  <div class="AboutUs">
    <div class="AboutUs-iconfont iconfont" @click="back">&#xe624;</div>
    <div class="AboutUs-box">
      <div class="AboutUs-box-logo">鹿</div>
      <h2 class="AboutUs-box-title">小鹿日记</h2>
      <p class="AboutUs-box-versions">版本V5.20</p>
      <p class="AboutUs-box-text">轻享身边美好</p>
      <img src="~@/assets/static/img/rests/01.jpg" alt="" class="AboutUs-box-img" />
      <div class="AboutUs-box-content">小鹿日记是基于S2B2C的生活服务导购优惠社交电商平台，依托大量同城实体门店线上向用户提供优惠券，用户通过分享优惠劵获取商家佣金的同时，帮助实体商家引流拓客。同时基于会员电商机制，由入驻商户将服务费支付给产生购买与分享行为的会员，实现会员自购省钱，分享赚钱。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
.AboutUs {
  position: relative;
  @include WH(100%, 100vh);
  &-iconfont {
    @include ptl(0.37rem, 0.16rem);
    @include fzc(0.35rem, #424242);
  }
  &-box {
    @include ptl(3.26rem, 0);
    width: 100%;
    &-logo {
      @include WH(1rem, 1rem, 0, 0 auto);
      @include fzchFa(0.7rem, #fff, 1rem, STKaiti);
      background: linear-gradient(-27deg, #ff1818 0%, #ff5f27 100%);
      border-radius: 0.16rem;
    }
    &-title {
      @include fzc(0.36rem, #333);
      font-family: STSong;
      text-align: center;
      margin-top: 0.18rem;
    }
    &-versions {
      @include fzc(0.24rem, #999);
      text-align: center;
      margin-top: 0.18rem;
    }
    &-text {
      @include fzc(0.32rem, #333);
      font-weight: 1000;
      text-align: center;
      font-family: Microsoft YaHei;
      margin-top: 0.36rem;
    }
    &-img {
      @include WH(3.22rem, 0.44rem, 0, 0.06rem 0 0 1.93rem);
    }
    &-content {
        width:6.67rem;
        @include fzch(.28rem,#333,1.5);
        text-indent: 2em;
        margin: .56rem auto 0;
    }
  }
}
</style>
