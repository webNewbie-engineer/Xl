<template>
  <div class="particulars">
    <div class="particulars-logo">✔</div>
    <p class="particulars-title">支付成功</p>
    <p class="particulars-award">￥{{this.$route.query.introducenum}}的现金奖励</p>
    <div class="particulars-SeeDetails" @click="clickSeeDetails">查看订单详情</div>
  </div>
</template>
<script>
export default {
  name: "particulars",
  methods: {
    clickSeeDetails() {
      //跳转到分享详情
      this.$router.push({
        name: "shareParticulars",
        query: { list: "01", userId: this.$route.query.userId },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.particulars {
  width: 100%;
  padding: 0.35rem 0 0.48rem 0;
  background: #fff;
  &-logo {
    @include WH(0.64rem, 0.64rem, 0, 0 auto);
    @include fzchFa(0.34rem, #fff, 0.64rem);
    border-radius: 50%;
    background: #42b847;
  }
  &-title {
    @include fzchFa(0.32rem, #333, 1);
    font-weight: 800;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin: 0.29rem 0 0 0;
  }
  &-award {
    @include fzchFa(0.3rem, #ff9800, 1);
    margin: 0.29rem 0 0 0;
  }
  &-SeeDetails {
    @include WH(2.97rem, 0.65rem, 0, 0.4rem auto 0);
    @include fzchFa(0.28rem, #666, 0.65rem);
    border: 0.01rem solid #bababa;
    border-radius: 0.32rem;
  }
}
</style>
