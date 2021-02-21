<template>
  <ul class="awardsList">
    <li v-for="(item, index) of listContent" :key="index" v-show="index < listRemind.num" class="awardsList-tiem">
      <p class="awardsList-tiem-name">{{ item.name }}</p>
      <p class="awardsList-tiem-date">{{ item.date }}</p>
      <p class="awardsList-tiem-money">+{{ item.money }}</p>
    </li>
    <li class="awardsList-upload">{{ listRemind.title}}</li>
  </ul>
</template>
<script>
export default {
  name: "awardsList",
  props: {
    listContent: {
      type: Array,
      default() {
        return [];
      },
    },
    listRemind: {
      type: Object,
      default() {
        return {
          title: "全部结果加载完毕",
          num: 7,
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.awardsList {
  width: 100%;
  overflow: hidden;
  background: #fff;
  &-tiem {
    position: relative;
    @include WH(7.5rem, 0.94rem, 0, 0.33rem 0 0 0.14rem);
    border-bottom: 0.01rem solid #f3f3f3;
    background: #fff;
    &-name {
      width: 4.95rem;
      @include ptl(0, 0.34rem);
      @include fzc(0.28rem, #333);
      @include omitN0;
    }
    &-date {
      @include ptl(0.49rem, 0.47rem);
      @include fzc(0.22rem, #999);
    }
    &-money {
      @include ptr(0, 0.4rem);
      @include fzc(0.28rem, #ff5d20);
    }
  }
  &-upload {
    @include fzchFa(0.26rem, #ccc, 0.52rem);
    margin: 0.6rem 0 0.6rem 0;
  }
}
</style>
