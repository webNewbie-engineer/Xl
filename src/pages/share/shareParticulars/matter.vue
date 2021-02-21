<template>
  <ul class="matter">
    <li class="matter-box" v-for="(item, index) of matterContnent" :key="index">
      <h4 class="matter-box-title">{{ item.title }}</h4>
      <p class="matter-box-content" v-for="(items, indexs) of item.content" :key="indexs">
        {{ items }}
      </p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "matter",
  props: {
    matterContnent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.matter {
  width: 100%;
  padding: 0 0 0.45rem 0;
  background: #fff;
  &-box:before {
    content: "";
    float: left;
    width: 0.12rem;
    height: 0.12rem;
    margin: 0.07rem 0.13rem 0 0.24rem;
    background-color: #ff5d20;
    border-radius: 50%;
  }
  &-box {
    margin: 0.45rem 0 0 0;
    &-title {
      @include fzc(0.28rem, #333);
    }
    &-content {
      width: 6.55rem;
      @include fzch(0.28rem, #333,1.6);
      margin: 0.21rem auto 0;
    }
  }
}
</style>
