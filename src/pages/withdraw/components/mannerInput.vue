<template>
  <div class="mannerInput">
    <p class="mannerInput-title">提现金额</p>
    <div class="mannerInput-box">
      <input
        type="text"
        placeholder="请输入提现金额"
        v-model="manner"
        class="mannerInput-box-input"
      />
      <p class="mannerInput-box-manner">￥</p>
      <p class="mannerInput-box-all" @click="allImmediately">全部提现</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "mannerInput",
  data() {
    return {
      manner: "",
      num: 0,
    };
  },
  props: {
    moneNum: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    allImmediately() {
      //全部提现
      //获取用户信息
      let arr = JSON.parse(localStorage.getItem("user"));
      this.manner = arr[arr.length - 1].money;
    },
  },
  watch: {
    manner: function (val) {
      this.manner = val.replace(/\D/g, "");
    },
  },
};
</script>
<style lang="scss" scoped>
.mannerInput {
  width: 100%;
  padding: 0.84rem 0 0 0;
  background: #fff;
  &-title {
    @include fzc(0.32rem, #333);
    text-indent: 0.3rem;
  }
  &-box {
    position: relative;
    width: 100%;
    margin: 0.68rem 0 0 0;
    &-input {
      @include commoninput(6.81rem, 0.74rem, left, none);
      @include fzc(0.32rem, #333);
      text-indent: 0.61rem;
      border: none;
      border-bottom: 0.01rem solid #f0f0f0;
      margin-left: 0.3rem;
    }
    &-manner {
      @include ptl(0.1rem, 0.41rem);
      @include fzc(0.48rem, #333);
    }
    &-all {
      @include ptr(0.18rem, 0.4rem);
      @include fzc(0.24rem, #ff9800);
    }
  }
}
</style>
