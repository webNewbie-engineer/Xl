<template>
  <div class="immediately">
    <p class="immediately-title">
      提现申请将在1~3小时内审批到账；如遇高峰期,可能延迟到 账,请耐心等待
    </p>
    <div class="immediately-btn" @click="handClickBtn">立即提现</div>
    <p class="immediately-record" @click="skipRecord">提现记录</p>
  </div>
</template>
<script>
export default {
  name: "immediately",
  methods: {
    handClickBtn() {
     this.$emit("immediatelyverdict",true)
    },
    skipRecord(){
       //跳转到提现记录
        this.$router.replace("/withdrawrecord");
    }
  },
};
</script>
<style lang="scss" scoped>
.immediately {
  width: 100%;
  padding: 0.85rem 0 0 0;
  background: #fff;
  &-title {
    width: 6.75rem;
    @include fzch(0.24rem, #999, 1.4);
    margin: 0 auto;
  }
  &-btn {
    @include WH(7.02rem, 0.97rem, 0, 0.65rem auto 0);
    @include fzchFa(0.36rem, #fff, 0.97rem);
    border-radius: 0.48rem;
    background: #ff5d20;
  }
  &-record {
    @include fzchFa(0.28rem, #666, 1);
    margin-top: 0.53rem;
  }
}
</style>
