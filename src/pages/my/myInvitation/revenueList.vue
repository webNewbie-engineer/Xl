<template>
  <ul class="revenueList">
    <li
      class="revenueList-box"
      v-for="(item, index) of revenueListContent.title"
      :key="index"
      :style="{
        marginLeft: index == 0 ? '0' : '.14rem',
        borderBottom: index == revenueListContent.num ? '.07rem solid #FF5D20' : 'none',
      }"
      @click="handClickBtn(index)"
    >
      <h4
        class="revenueList-box-num"
        :style="{
          color: index == revenueListContent.num ? '#C1C1C1' : '#333',
        }"
      >
      {{item.num}}
        <span>家</span>
      </h4>
      <div class="revenueList-box-title" :style="{ background: item.background }">
        {{item.title}}
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "revenueList",
  props: {
    revenueListContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handClickBtn(index) {
      //选中第几个
      this.$emit("listIndex",index)
    },
  },
};
</script>
<style lang="scss" scoped>
.revenueList {
  display: flex;
  @include ptl(2.2rem, 50%);
  width: 6.82rem;
  transform: translate(-50%, 0);
  &-box {
    flex: 1;
    height: 1.8rem;
    border-radius: 0.04rem;
    background: #fff;
    &-num {
      font-size: 0.485rem;
      text-align: center;
      padding-top: 0.39rem;
      span {
        font-size: 0.2425rem;
      }
    }
    &-title {
      @include WH(0.96rem, 0.37rem, 0, 0.32rem auto 0);
      @include fzchFa(0.24rem, #fff, 0.35rem);
      border-radius: 0.04rem;
    }
  }
}
</style>
