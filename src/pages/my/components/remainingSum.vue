<template>
  <div class="remainingSum">
    <div class="remainingSum-box">
      <p class="remainingSum-box-uesr">账户余额(元)</p>
      <p class="remainingSum-box-unit">{{ remainingSumuUnit }}</p>
      <div class="remainingSum-box-withdraw" @click="skipwithdraw">去提现</div>
    </div>
    <div class="remainingSum-circle"></div>
  </div>
</template>
<script>
export default {
  name: "remainingSum",
  props: {
    remainingSumuUnit: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    skipwithdraw() {
      //看用户是否登陆
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined) {
        this.$emit("logoUndefined", true);
        return;
      }
      if (arr[arr.length - 1].identityCard == undefined) {
        this.$emit("idTrue", true);
        return;
      }
      //跳转到提现
      this.$router.replace("/withdraw");
    },
  },
};
</script>
<style lang="scss" scoped>
.remainingSum {
  position: relative;
  width: 100%;
  background: #333;
  &-box {
    position: relative;
    @include WH(7.02rem, 1.74rem, 0, 0 auto);
    background: linear-gradient(-13deg, #c19658 0%, #d9c091 100%);
    border-radius: 0.12rem;
    &-uesr {
      @include ptl(0.28rem, 0.41rem);
      @include fzc(0.28rem, #fff);
    }
    &-unit {
      @include ptl(0.79rem, 0.41rem);
      @include fzc(0.64rem, #fff);
    }
    &-withdraw {
      @include ptr(0.4rem, 0.26rem);
      @include WH(2.25rem, 0.72rem, 0, 0);
      @include fzchFa(0.32rem, #9f7435, 0.72rem);
      border-radius: 0.36rem;
      background: #ffffff;
    }
  }
}
</style>
