<template>
  <div class="land" v-show="userShow == false">
    <div class="land-img">
      <img src="~@/assets/static/img/my/undefined.png" alt="" />
    </div>
    <div class="land-box">
      <keep-alive>
        <router-link to="/register" class="land-box-text">登录</router-link>
      </keep-alive>
      <span class="land-box-text land-box-margin">/</span>
      <keep-alive>
        <router-link to="/register" class="land-box-text">注册</router-link>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: "land",
  props: {
    userContent: {
      type: Object,
      default() {
        return {};
      },
    },
    userShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.land {
  display: flex;
  width: 100%;
  padding: 0.4rem 0 0.51rem 0;
  background: #333;
  &-img {
    @include WH(1.12rem, 1.12rem, 0, 0 0 0 0.27rem);
    border-radius: 50%;
    background: #ffffff;
    img {
      @include WH(0.82rem, 1rem, 0, 0);
      margin: 0.06rem 0 0 0.15rem;
    }
  }
  &-box {
    margin-left: 0.25rem;
    &-text {
      @include fzch(0.36rem, #fff, 1.12rem);
      text-decoration: none;
    }
    &-margin {
      margin: 0 0.1rem;
    }
  }
}
</style>
