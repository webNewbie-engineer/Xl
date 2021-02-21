<template>
  <ul class="selectContcon">
    <li
      class="selectContcon-item"
      v-for="(item, index) of titleArr"
      :key="index"
      :style="{ color: item.color, marginLeft: 0 < index ? '1.25rem' : '0' }"
      :ref="'selectname' + index"
      @click="handClickBtn($event, index)"
    >
      {{ item.name }}
    </li>
    <li
      :style="{ width: selectWidth, left: distance }"
      class="selectContcon-item-select"
    ></li>
  </ul>
</template>
<script>
export default {
  name: "selectContcon",
  props: {
    titleArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      distance: "0px",
      selectWidth: "0px",
    };
  },
  methods: {
    handClickBtn(e, index) {
      //点击选中位置,宽度
      let el = event.currentTarget;
      this.distance = el.offsetLeft + "px";
      this.selectWidth = el.offsetWidth + "px";
      //更换列表
      this.$emit("selectlist", index);
    },
  },
  mounted() {
    //默认选中位置,宽度
    this.distance = this.$refs.selectname0[0].offsetLeft + "px";
    this.selectWidth = this.$refs.selectname0[0].offsetWidth + "px";
  },
};
</script>
<style lang="scss" scoped>
.selectContcon {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.15rem 0 0.4rem 0;
  background: #fff;
  &-item {
    font-size: 0.32rem;
    &-select {
      position: absolute;
      bottom: 0.13rem;
      height: 0.03rem;
      transition: 0.5s;
      background: #ff5d20;
    }
  }
}
</style>
