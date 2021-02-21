<template>
  <div class="advertising">
    <div class="advertising_TrueColor"></div>
    <div class="advertising_FalseColor"></div>
    <swiper :options="swiperOption" class="swiper advertising_Img">
      <swiper-slide class="swiper-slide" v-for="(item, index) in swiperArr" :key="index">
        <img :src="require(`../img/advertising/${item}`)" class="advertising_Img-img" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "advertising",
  props: {
    swiperArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption:
        {
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          //开启循环模式
          loop: true,
        } || {},
    };
  },
};
</script>
<style lang="scss" scoped>
.advertising {
  position: relative;
  &_TrueColor {
    @include WH(100%, 1.1rem);
    background: #ff5d20;
  }
  &_FalseColor {
    @include WH(100%, 2.02rem);
    background: #fff;
  }
  &_Img {
    @include ptl(0.25rem, 0.24rem);
    @include WH(7.02rem, 2.4rem);
    overflow: hidden;
    &-img {
      @include WH(7.02rem, 2.4rem);
    }
  }
}
</style>
