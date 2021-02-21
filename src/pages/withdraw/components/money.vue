<template>
  <div class="money">
    <p class="money-title">可提现金额(元)</p>
    <h6 class="money-amount">{{ moneNum }}</h6>
    <div class="money-hint" @click="userClickMoney">
      <p class="money-hint-content">按国家税法规定，平台将预扣个人所得税</p>
      <p class="money-hint-money">22.22元</p>
      <p class="money-hint-iconfont">></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "money",
  props: {
    moneNum: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    userClickMoney() {
      this.$emit("revenueIF", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.money {
  width: 100%;
  padding: 0.44rem 0 0 0;
  background: #fff;
  &-title {
    @include fzchFa(0.28rem, #666, 1);
  }
  &-amount {
    @include fzchFa(0.56rem, #ff5d20, 1);
    margin-top: 0.33rem;
  }
  &-hint {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 0.41rem;
    &-content {
      @include fzch(0.22rem, #999, 0.34rem);
    }
    &-money {
      @include fzch(0.22rem, #ff5d20, 0.34rem);
      margin: 0 0.2rem 0 0.1rem;
    }
    &-iconfont {
      @include fzch(0.28rem, #999, 0.34rem);
    }
  }
}
</style>
