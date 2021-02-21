<template>
  <div class="particulars">
    <h4 class="particulars-title">商品详情</h4>
    <p class="particulars-content">
     {{particularsContent.content}}
    </p>
    <img
      :src="require(`../../../assets/static/img/shareParticulars/${particularsContent.img}`)"
      alt=""
      class="particulars-img"
    />
  </div>
</template>
<script>
export default {
  name: "particulars",
  props:{
    particularsContent:{
      type: Object,
      default() {
        return {};
      },
    }
  }
};
</script>
<style lang="scss" scoped>
.particulars {
  width: 100%;
  background: #fff;
  &-title {
    @include fzchFa(0.28rem, #333, 1);
    padding-top: 0.34rem;
  }
  &-content {
    width: 6.7rem;
    @include fzch(0.28rem, #333, 1.7);
    margin: 0.47rem auto 0.37rem;
  }
  &-img {
    width: 100%;
  }
}
</style>
