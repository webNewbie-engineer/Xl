<template>
  <div class="searchNone" v-show="!HistoryDisplay && listContent.length == 0">
    <img src="~@/assets/imgs/search/404.png" alt="" class="searchNone-img" />
    <p class="searchNone-contene">无搜索结果，换个词试试吧~</p>
  </div>
</template>
<script>
export default {
  name: "searchNone",
  props: {
    HistoryDisplay: {
      type: Boolean,
      default: true,
    },
    listContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.searchNone {
  width: 100%;
  &-img {
    @include WH(100%, 3.32.5rem, 0, 1.9rem 0 0 0);
  }
  &-contene {
      @include fzc(0.28rem,#666);
      text-align: center;
      margin-top: 0.5rem;
  }
}
</style>