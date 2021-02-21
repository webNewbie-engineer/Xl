<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in swiper"
      :key="index"
    >
      <img :src="item" />
    </swiper-slide>
  </swiper>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "swiperBOX",
  props: {
    swiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
    data() {
      return {
        swiperOption: {
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
.swiper {
  width: 100%;
  height: 5rem;
  overflow: hidden;
    img {
      @include WH(100%, 5rem);
    }
}
</style>