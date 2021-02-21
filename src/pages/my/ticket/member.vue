<template>
  <div class="member" v-show="uesrOpen == true">
    <div class="member-img">
      <p class="member-img-title">已开通会员，尊享8大权益</p>
      <div class="member-img-btn">
        <keep-alive>
          <router-link to="/vipRights">查看权益</router-link>
        </keep-alive>
      </div>
      <p class="member-img-hint">
        <span>已奖励</span
        ><span class="member-img-hint-span">199积分</span>,前往【小鹿来了】兑换超值礼品
        <span class="member-img-hint-btn">>></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "member",
  props: {
    uesrOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.member {
  width: 100%;
  padding-top: 0.3rem;
  background: #fff;
  &-img {
    position: relative;
    @include WH(6.7rem, 3.3rem, 0, 0 auto);
    background-image: url(~@/assets/static/img/my/vip.png);
    background-size: cover;
    border-radius: 0.08rem;
    &-title {
      @include ptl(1.28rem, 0);
      width: 100%;
      @include fzc(0.32rem, #4e2b1b);
      text-align: center;
      font-family: STHeiti Light [STXihei];
    }
    &-btn {
      @include ptl(1.9rem, 50%);
      @include WH(3.32rem, 0.72rem);
      @include fzchFa(0.32rem, #785848, 0.72rem);
      transform: translate(-50%, 0);
      border: 0.02rem solid #f5dabf;
      box-shadow: 0 0.1rem 0.3rem 0 rgba(222, 132, 83, 0.4);
      border-radius: 0.36rem;
      a {
        color: #785848;
      }
    }
    &-hint {
      @include pbl(0, 0);
      @include WH(100%, 0.56rem);
      text-indent: 0.3rem;
      @include fzch(0.24rem, #fff, 0.56rem);
      border-bottom-right-radius: 0.08rem;
      border-bottom-left-radius: 0.08rem;
      background: rgba(0, 0, 0, 0.4);

      &-span {
        @include fzch(0.24rem, #ffbe5d, 0.56rem);
        display: inline;
      }
      span {
        font-size: 0.24rem;
      }
      &-btn {
        @include fzch(0.24rem, #f5f5f5, 0.56rem);
      }
    }
  }
}
</style>
