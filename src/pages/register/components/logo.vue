<template>
  <div class="logo">
    <div class="logo-box">
      <div class="logo-box-logo">鹿</div>
      <p class="logo-box-content">轻松生活 <span></span> 乐享美好</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "logo",
};
</script>
<style lang="scss" scoped>
.logo {
  position: fixed;
  top: 2.24rem;
  left: 0;
  width: 100%;
  &-box {
    &-logo {
      @include WH(1rem, 1rem,0,0 auto);
      @include fzchFa(0.7rem,#fff,1rem,STKaiti);
      background: linear-gradient(-27deg, #ff1818 0%, #ff5f27 100%);
      border-radius: 0.16rem;
    }
    &-content {
        @include fzc(0.3rem,#333);
        text-align: center;
        margin-top: 0.4rem;
        span {
            @include WH(0.01rem,0.01rem,0,0 0.05rem);
        }
    }
  }
}
</style>