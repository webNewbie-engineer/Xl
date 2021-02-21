<template>
  <div class="listNull" v-show="listNullBolck.list[listNullBolck.num] == 0">
    <div class="listNull-img"></div>
    <h4 class="listNull-title">暂无待邀请店哦~~</h4>
  </div>
</template>
<script>
export default {
  name: "listNull",
  props: {
    listNullBolck: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.listNull {
  width: 100%;
  &-img {
    @include WH(5.7rem, 3.5rem, 0, 2.08rem auto 0);
    background-image: url(~@/assets/static/img/my/nodata_shops.png);
    background-size: contain;
  }
  &-title {
    @include fzchFa(0.3rem, #666, 1);
    margin-top: 0.15rem;
  }
}
</style>
