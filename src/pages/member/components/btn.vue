<template>
  <div class="btn" @click="handClickBtn">￥199立即开通</div>
</template>
<script>
export default {
  name: "btn",
  methods: {
    handClickBtn() {
      this.$emit("paymentBlock", true);
      //更改本地储存
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == false) {
        return;
      }
      arr[arr.length - 1].member = "会员";
      arr[arr.length - 1].color = "#d6b08a";
      localStorage.setItem("user", JSON.stringify(arr));
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  @include pbl(0.44rem, 0.43rem);
  @include WH(6.64rem, 0.96rem);
  @include fzchFa(0.36rem, #f9ddcb, 0.96rem);
  border-radius: 0.48rem;
  background: linear-gradient(-22deg, #262324 0%, #524a48 100%);
}
</style>
