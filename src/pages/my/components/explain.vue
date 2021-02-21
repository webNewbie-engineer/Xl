<template>
  <div class="explain">
    <ul class="explain-box">
      <li class="tiem" v-for="(item, index) of explain" :key="index">
        <router-link :to="{ name: item.src }">
          <p class="iconfont" v-html="item.iconfont"></p>
          <p class="title">{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "explain",
  data() {
    return {
      explain: [
        { title: "新人必读", iconfont: "&#xe662;", src: "required" },
        { title: "常见问题", iconfont: "&#xe64e;", src: "faq" },
        { title: "联系我们", iconfont: "&#xe6ab;", src: "service" },
        { title: "关于我们", iconfont: "&#xe6b1;", src: "AboutUs" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.explain {
  padding: 0.27rem 0 1.35rem 0;
  background: #f5f5f5;
  &-box {
    display: flex;
    @include WH(7.02rem, 1.6rem, 0, 0 auto);
    border-radius: 0.08rem;
    background: #ffffff;
    li {
      flex: 1;
      .iconfont {
        @include fzc(0.48rem, #ff5918);
        text-align: center;
        margin-top: 0.3rem;
      }
      .title {
        @include fzc(0.26rem, #333);
        text-align: center;
        margin-top: 0.32rem;
      }
    }
  }
}
</style>
