<template>
  <div class="Headline">
    <div class="Headline_Top">
        <div class="iconfont return" @click="back">&#xe624;</div>
      <h2 class="title">商户详情</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Headline",
  methods: {
    back() {
      this.$store.state.dispatchNum = 5;
     this.$router.replace("/index"); //返回index
    },
  },
};
</script>
<style lang="scss" scoped>
.Headline {
  &_Top {
    position: relative;
    .title {
      @include fzchFa(0.36rem, #333, 0.97rem);
    }
    .return {
      @include ptl(0.33rem, 0.29rem);
      @include fzc(0.35rem, #424242);
    }
  }
}
</style>