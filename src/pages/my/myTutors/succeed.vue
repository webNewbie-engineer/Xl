<template>
  <div class="succeed" v-show="succeedBolck">
    <div class="succeed-box">✔</div>
    <p class="succeed-content">导师添加成功!</p>
  </div>
</template>
<script>
export default {
  name: "succeed",
  props: {
    succeedBolck: {
      type: Boolean,
      default: false,
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
  z-index: 10000000000000;
  background: rgba(0, 0, 0, 0.45);
  &-box {
    @include WH(0.98rem, 0.98rem, 0, 5rem auto 0.45rem);
    @include fzchFa(0.68rem, #28c189, 0.9rem);
    border-radius: 50%;
    border: 0.03rem solid #28c189;
  }
  &-content {
    @include fzchFa(0.32rem, #fff, 1);
  }
}
</style>
