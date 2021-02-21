<template>
  <div class="open" v-show="uesrOpen == false">
    <div class="open-img">
      <p class="open-img-content">尚未开通会员 升级会员立享收益翻倍</p>
      <div class="open-img-btn">
        <keep-alive>
          <router-link to="/member"> 马上开通 </router-link>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "open",
  props: { 
    uesrOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.open {
  width: 100%;
  padding-top: 0.3rem;
  background: #fff;
  &-img {
    position: relative;
    @include WH(6.7rem, 3.3rem, 0, 0 auto);
    background-image: url(~@/assets/static/img/my/vip.png);
    background-size: cover;
    &-content {
      @include ptl(1.45rem, 0);
      width: 100%;
      @include fzc(0.32rem, #4e2b1b);
      text-align: center;
    }
    &-btn {
      @include ptl(2.12rem, 50%);
      @include WH(3.7rem, 0.85rem);
      text-align: center;
      transform: translate(-50%, 0);
      border-radius: 0.4rem;
      background: linear-gradient(-13deg, #323232 0%, #626262 100%);
      a {
        @include fzchFa(0.36rem, #f1d2be, 0.85rem);
      }
    }
  }
}
</style>
