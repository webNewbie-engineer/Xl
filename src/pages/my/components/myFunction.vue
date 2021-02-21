<template>
  <ul class="function">
    <li
      class="function-box"
      v-for="(item, index) of functionArr"
      :key="index"
      @click="btn(index)"
    >
      <div class="function-box-content">
        <h6 class="title">{{ item.title }}</h6>
        <p class="num">
          <span class="num-content">{{ item.num }}</span>
          <span class="iconfont">&#xe624;</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "myFunction",
  props: {
    functionArr: {
      type: Array,
      default() {
        return [
          {
            title: "我的劵包",
            num: "3个待使用",
          },
          {
            title: "我的邀请",
            num: "2个待邀请",
          },
        ];
      },
    },
  },
  methods: {
    //跳转路由
    btn(e) {
      //没登录跳转登录页面
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == null || arr == "") {
        return this.$router.push({ name: "register" });
      }
      if (e == 0) {
        this.$router.push({ name: "ticket" });
      } else {
        this.$router.push({ name: "myInvitation" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.function {
  &-box {
    width: 100%;
    padding-top: 0.25rem;
    background: #f5f5f5;
    &-content {
      position: relative;
      @include WH(7.02rem, 1.12rem, 0, 0 auto);
      background: #ffffff;
      border-radius: 0.08rem;
      .title {
        @include ptl(0.39rem, 0.27rem);
        @include fzc(0.36rem, #333333);
      }
      .num {
        @include ptr(0.43rem, 0.31rem);
        &-content {
          @include fzc(0.26rem, #ff5d20);
          margin-right: 0.18rem;
        }
        .iconfont {
          @include fzch(0.15rem, #999, 0.26rem);
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
