<template>
  <div class="manner">
    <p class="manner-title">提现方式</p>
    <ul class="manner-box">
      <li class="manner-box-tiem">
        <div class="iconfont">&#xe61a;</div>
        <h2 class="title">微信</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "manner",
};
</script>
<style lang="scss" scoped>
.manner {
  width: 100%;
  padding: 0.98rem 0 0 0;
  background: #fff;
  &-title {
    @include fzc(0.32rem, #333);
    text-indent: 0.3rem;
  }
  &-box {
    display: flex;
    width: 100%;
    margin: 0.39rem 0 0 0;
    &-tiem {
      display: flex;
      justify-content: center;
      align-items: center;
      @include WH(3.37rem, 1rem, 0, 0 0 0 0.24rem);
      border: 0.02rem solid #ff5d20;
      border-radius: 8px;
      background: #fff5f2;
      .iconfont {
        @include fzc(0.4rem, #42b847);
      }
      .title {
        @include fzc(0.28rem, #333);
        font-family: Microsoft JhengHei;
        margin-left: 0.19rem;
      }
    }
  }
}
</style>
