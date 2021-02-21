<template>
  <div class="search">
    <div class="iconfont">&#xe632;</div>
    <input type="text" class="search-input" :placeholder="searchplaceholder" />
  </div>
</template>
<script>
export default {
  name: "search",
   props: {
    searchplaceholder: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 0 1.1rem 0;
  background: #ff5d20;
  &-input {
    flex: 1;
    height: 0.64rem;
    border: none;
    outline: none;
    @include fzc(0.28rem, #333);
    text-indent: 0.8rem;
    border-radius: 0.32rem;
    margin: 0 0.25rem;
    background: #ffffff;
  }
  .iconfont {
    @include ptl(0.18rem, 0.51rem);
    @include fzc(0.28rem, #999);
  }
}
</style>
