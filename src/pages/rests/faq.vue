<template>
  <div class="faq">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <p class="faq-fg"></p>

    <img
      :src="require(`../../assets/static/img/rests/faq/${item}`)"
      alt=""
      class="faq-img"
      v-for="(item, index) of itemimg"
      :key="index"
    />
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
export default {
  name: "faq",
  data() {
    return {
      HeadlineConten: "常见问题",
      itemimg: ["faq01.png","faq02.png","faq03.png","faq04.png"],
    };
  },
  components: {
    Headline,
  },
};
</script>
<style lang="scss" scoped>
.faq {
  &-fg {
    @include WH(100%, 0.1rem);
  }
  &-img {
      width: 100%;
  }
}
</style>
