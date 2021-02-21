<template>
  <div class="fail" v-show="certificationBlock.fail">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <img
      :src="require(`../../../assets/static/img/certification/fail.png`)"
      alt=""
      class="fail-img"
    />
    <h4 class="fail-title">身份认证失败!</h4>
    <p class="fail-hint">原因：身份证号码不正确</p>
      <div class="fail-return" @click="failReturn"
        >返回修改</div
      >
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
export default {
  name: "fail",
  props: {
    certificationBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      HeadlineConten: "",
    };
  },
  methods: {
    failReturn() {
      //返回验证
      this.$emit("userBtn", {
        index: true,
        succeed: false,
        fail: false,
      });
    },
  },
  components: {
    Headline,
  },
};
</script>
<style lang="scss" scoped>
.fail {
  width: 100%;
  &-img {
    @include WH(2.82rem, 2.11rem, 0, 1.4rem 0 0 2.34rem);
  }
  &-title {
    @include fzchFa(0.32rem, #333, 1);
    font-family: STXihei;
    margin-top: 0.68rem;
  }
  &-hint {
    @include fzchFa(0.24rem, #666, 1);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-top: 0.32rem;
  }
  &-return {
    display: block;
    @include WH(6.42rem, 0.9rem, 0, 1.23rem auto 0);
    @include fzchFa(0.32rem, #fff, 0.9rem);
    border-radius: 0.08rem;
    background: #ff5d20;
  }
}
</style>
