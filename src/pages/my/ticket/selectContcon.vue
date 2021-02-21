<template>
  <div class="selectContcon">
    <div class="selectContcon-box">
      <p
        v-for="(item, index) of selectContconProps"
        :key="index"
        :style="{ color: item.color }"
        :ref="'selectname' + index"
        @click="handClickBtn($event, index)"
      >
        {{ item.name }}
      </p>
    </div>
    <div
      class="selectContcon-select"
      :style="{ width: selectWidth, left: distance }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "selectContcon",
  props: {
    selectContconProps: {
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
      if (index == 0) {
        this.$emit("selectlist", false);
      } else {
        this.$emit("selectlist", true);
      }
    },
  },
  mounted() {
    //默认选中位置,宽度
    this.distance = this.$refs.selectname0[0].offsetLeft + "px";
    this.selectWidth = this.$refs.selectname0[0].offsetWidth + "px";
    console.log(this.distance, this.selectWidth);
  },
};
</script>
<style lang="scss" scoped>
.selectContcon {
  position: relative;
  @include WH(100%, 1.05rem);
  padding-top: 0.42rem;
  background: #fff;
  &-box {
    display: flex;
    width: 100%;
    justify-content: space-around;
    p {
      font-size: 0.32rem;
    }
  }
  &-select {
    position: absolute;
    top: 0.9rem;
    width: 0.1rem;
    height: 0.04rem;
    transition: 0.5s;
    background: #ff1818;
  }
}
</style>
