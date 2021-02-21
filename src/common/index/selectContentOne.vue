<template>
  <div class="select">
    <ul class="select-box">
      <li
        class="select-box-tiem"
        v-for="(item, index) of selectContent"
        :key="index"
        :ref="'selectname' + index"
        @click="handClickBtn($event, index)"
      >
        {{item}}
      </li>
    </ul>
    <div :style="{ width: selectWidth, left: distance }" class="select-string"></div>
  </div>
</template>
<script>
export default {
  name: "selectContentOne",
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
      distance: "0px",
      selectWidth: "0px"
    };
  },
  methods: {
    handClickBtn(e, index) {
      //点击选中位置,宽度
      let el = event.currentTarget;
      this.distance = el.offsetLeft + "px";
      this.selectWidth = el.offsetWidth + "px";
      this.$emit("selectBtn",index);
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
.select {
  position: relative;
  width: 100%;
  padding: 0.4rem 0 0.28rem 0;
  background: #fff;
  &-box {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &-tiem {
      @include fzc(0.3rem, #333);
    }
  }
  &-string {
    position: absolute;
    bottom: 0.04rem;
    height: 0.03rem;
    transition: 0.5s;
    background: #ff693a;
  }
}
</style>
