<template>
  <ul class="giftBag" v-show="ContentBolck.index == 1">
    <li class="giftBag-item" v-for="(item, index) of giftBagArr" :key="index">
      <router-link
        :to="{
          name: 'carnival',
          query: { list: item.id },
        }"
      >
        <img
          :src="require(`../../../assets/static/img/search/${item.img}`)"
          alt=""
          class="giftBag-item-img"
        />
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "giftBag",
  props: {
    giftBagArr: {
      type: Array,
      default() {
        return [];
      },
    },
    ContentBolck: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.giftBag {
  width: 100%;
  padding-bottom: 1.3rem;
  background: #f5f5f5;
  &-item {
    margin-top: 0.23rem;
    &-img {
      @include WH(7.02rem, 2rem, 0, 0 0 0 0.24rem);
    }
  }
}
</style>
