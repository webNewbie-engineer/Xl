<template>
  <div class="Headline">
    <div class="iconfont" @click.stop="back">&#xe624;</div>
    <h4 class="title">提现</h4>
  </div>
</template>
<script>
export default {
  name: "Headlinetwo",
  props: {
    skip: {
      type: String,
      default: "",
    },
  },
  methods: {
    back() {
      if (this.skip != "") {
        this.$router.replace(this.skip); //返回上一层
      } else {
        this.$router.go(-1); //返回上一层
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Headline {
  display: flex;
  width: 100%;
  background: #fff;
  .iconfont {
    @include fzch(0.35rem, #333, 1.2rem);
    margin-left: 0.39rem;
  }
  .title {
    flex: 1;
    @include fzchFa(0.36rem, #333, 1.2rem);
  }
}
</style>
