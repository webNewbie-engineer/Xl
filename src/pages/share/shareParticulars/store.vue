<template>
  <div class="store" @click="btn(storeContent.id)">
    <div class="store-box">
      <h6 class="store-box-title">{{ storeContent.name }}</h6>
      <p class="store-box-site">{{ storeContent.site }}</p>
      <p class="store-box-distance">{{ storeContent.distance }}</p>
      <div class="store-box-cut-off"></div>
      <span class="store-box-phone iconfont">&#xe60c;</span>
      <img
        :src="require(`../../../assets/static/img/index/${storeContent.img}`)"
        alt=""
        class="store-box-img"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "store",
  props: {
    storeContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    btn(e) {
      this.$router.push({
        name: "particulars",
        query: {
          list: this.$store.state.count,
          userId: e,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.store {
  width: 100%;
  padding: 0.16rem 0;
  background: #f5f5f5;
  &-box {
    position: relative;
    @include WH(100%, 1.76rem);
    background: #fff;
    &-title {
      @include ptl(0.28rem, 1.7rem);
      @include fzc(0.32rem, #333);
    }
    &-site {
      @include ptl(0.85rem, 1.71rem);
      @include fzc(0.24rem, #333);
      width: 4.15rem;
      @include omit;
    }
    &-distance {
      @include pbl(0.32rem, 1.71rem);
      @include fzc(0.24rem, #999);
    }
    &-cut-off {
      @include ptr(0.75rem, 1.04rem);
      @include WH(0.01rem, 0.6rem);
      background: #e5e5e5;
    }
    &-phone {
      @include ptr(0.83rem, 0.35rem);
      @include fzc(0.48rem, #e60012);
    }
    &-img {
      @include ptl(0.26rem, 0.25rem);
      @include WH(1.238rem, 1.238rem);
      border-radius: 0.08rem;
    }
  }
}
</style>
