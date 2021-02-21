<template>
  <div class="revenue">
    <div class="revenue-box">
      <div class="revenue-box-title">总收益&nbsp;:<span v-html="money"></span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "totalRevenue",
  props: {
    money: {
      type: String,
      default: "",
    },
  }
};
</script>
<style lang="scss" scoped>
.revenue {
  width: 100%;
  padding-top: 0.12rem;
  background: #fff;
  &-box {
    @include WH(7.5rem, 2.25rem);
    background: #ff5d20;
    &-title {
      width: 100%;
      @include fzchFa(0.32rem, #eee, 0.4rem);
      text-align: center;
      padding-top: 0.47rem;
      span {
        @include fzchFa(0.4rem, #fff, 0.4rem);
        margin-left: 0.25rem;
      }
    }
  }
}
</style>
