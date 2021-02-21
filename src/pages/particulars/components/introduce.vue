<template>
  <div class="introduce">
      <h2 class="introduce-name">{{introducenameNum.name}}</h2>
      <div class="introduce-Box">
          <div class="introduce-Box-iconfont">
              <span class="iconfont" v-for="(item,index) of 5" :key="index"  :style="{ color:index <  introducenameNum.num ? '#FF5D20' : '#c1c1c1' }">&#xe627;</span>
          </div>
          <p class="introduce-Box-name">{{introducenameNum.genre}}</p>
      </div>
  </div>
</template>
<script>
export default {
  name: "introduce",
  props: {
    introducenameNum: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.introduce {
  position: absolute;
  top: 5.81rem;
  left: 0.16rem;
  z-index: 1000;
  @include WH(7.18rem, 1.56rem, 0, 0);
  box-shadow: 0rem 0.02rem 0.35rem 0rem rgba(0, 92, 178, 0.13);
  border-radius: 0.16rem;
  background: #ffffff;
  &-name {
      @include fzc(0.36rem,#333);
      font-weight:550;
      text-indent: 0.33rem;
      padding-top: 0.27rem;
  }
  &-Box {
      display: flex;
      margin-top: 0.38rem;
      &-iconfont {
          margin-left: 0.3rem;
          span{
              font-size: 0.17rem;
              margin-left: 0.06rem;
              line-height:0.24rem ;
          }
      }
      &-name {
          @include fzch(0.24rem,#999999,0.2rem);
          margin-left: 0.42rem;
      }
  }
}
</style>