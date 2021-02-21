<template>
  <ul class="select">
    <li
      v-for="(item, index) of selectContent"
      :key="index"
      :style="{
        color: index == selectIndex ? '#FF5D20' : '#333',
      }"
      @click="clickSelect(index)"
      class="select-item"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "selectx",
  props: {
    selectContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      selectIndex: 0,
    };
  },
  methods: {
    clickSelect(e) {
      //切换
      this.selectIndex = e;
      this.$emit("selectList",e);
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.4rem 0 0.22rem 0;
  background: #fff;
  &-item {
    font-size: 0.28rem;
  }
}
</style>
