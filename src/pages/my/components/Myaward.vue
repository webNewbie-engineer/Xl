<template>
  <div class="award" @click="skip">
    <div class="award-box">
      <h2 class="award-box-title">我的奖励</h2>
      <div class="award-box-examine">
        <span class="award-box-examine-btn">查看奖励</span>
        <span class="award-box-examine-iconfont iconfont">&#xe624;</span>
      </div>
      <div class="award-box-time">
        <div class="time" v-for="(item, index) of award" :key="index">
          <p class="title">{{ item.date }}</p>
          <p class="money">{{ item.money }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Myaward",
  props: {
    award: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    skip() {
      //看用户是否登陆
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined) {
        this.$emit("logoUndefined", true);
        return;
      }
      //跳转我的奖励
      this.$router.push({ name: "myAward" });
    },
  },
};
</script>
<style lang="scss" scoped>
.award {
  width: 100%;
  padding-top: 0.25rem;
  z-index: 1000;
  background: #f5f5f5;
  &-box {
    position: relative;
    @include WH(7.02rem, 2.3rem, 0, 0 auto);
    background: #ffffff;
    border-radius: 0.08rem;
    &-title {
      @include ptl(0.31rem, 0.27rem);
      @include fzc(0.36rem, #333);
    }
    &-examine {
      @include ptr(0.35rem, 0.31rem);
      &-btn {
        @include fzch(0.26rem, #999, 0.26rem);
      }
      &-iconfont {
        @include fzch(0.15rem, #999, 0.26rem);
        transform: rotate(180deg);
        margin-left: 0.16rem;
      }
    }
    &-time {
      @include ptl(1.15rem, 0);
      display: flex;
      @include WH(100%, 1.15rem);
      .time {
        flex: 1;
        .title {
          @include fzc(0.26rem, #999);
          text-align: center;
        }
        .money {
          @include fzc(0.4rem, #ff5d20);
          text-align: center;
          margin-top: 0.29rem;
        }
      }
    }
  }
}
</style>
