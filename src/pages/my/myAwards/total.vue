<template>
  <div class="total">
    <div class="total-date" @click="date">
      <p class="total-date-content">{{ totalDate }}</p>
      <p class="iconfont">&#xe695;</p>
    </div>
    <div class="total-total">合计:<span>￥199</span></div>
  </div>
</template>
<script>
export default {
  name: "total",
  props: {
    totalDate: {
      type: String,
      default: "",
    },
  },
  methods: {
    date() {
      this.$emit("date", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  position: relative;
  @include WH(100%, 1.06rem);
  background: #f5f5f5;
  &-date {
    @include ptl(0.25rem, 0.26rem);
    display: flex;
    @include WH(2.2rem, 0.57rem);
    justify-content: space-between;
    border: 0.01rem solid #d0d0d0;
    border-radius: 0.28rem;
    overflow: hidden;
    background: #ffffff;
    .iconfont {
      @include fzch(0.18rem, #b8b8b8, 0.6rem);
      margin-right: .15rem;
    }
    &-content {
      @include fzch(0.24rem, #333, 0.57rem);
      text-indent: 0.25rem;
    }
  }
  &-total {
    @include ptr(0.39rem, 0.28rem);
    @include fzc(0.24rem, #ff5d20);
    span {
      @include fzc(0.32rem, #ff5d20);
      margin-left: 0.05rem;
    }
  }
}
</style>
