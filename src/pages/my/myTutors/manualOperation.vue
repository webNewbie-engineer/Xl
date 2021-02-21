<template>
  <div class="operation">
    <h4 class="operation-title">推荐导师</h4>
    <div class="operation-btn" @click="handClickBtn">
      <p class="operation-btn-plus">+</p>
      <p class="operation-btn-manual">手动添加导师</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "manualOperation",
  methods: {
    handClickBtn() {
      //搜索
      this.$emit("searchbtn", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.operation {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.35rem;
  &-title {
    @include fzch(0.4rem, #333, 0.64rem);
    text-indent: 0.3rem;
  }
  &-btn {
    display: flex;
    @include WH(2.7rem, 0.64rem, 0, 0 0.24rem 0 0);
    border-radius: 0.32rem;
    background: #ff5d20;
    justify-content: center;
    &-plus {
      @include fzch(0.38rem, #fff, 0.64rem);
    }
    &-manual {
      @include fzch(0.28rem, #fff, 0.64rem);
      margin-left: 0.15rem;
    }
  }
}
</style>
