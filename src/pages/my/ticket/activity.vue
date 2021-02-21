<template>
  <ul class="activity" v-show="ifactivity == true">
    <li v-for="(item, index) of activityContent" :key="index" class="activity-box">
      <keep-alive>
        <router-link :to="{ name: 'carnival', query: { list: '01' } }">
          <img
            :src="require(`../../../assets/static/img/my/${item.img}`)"
            alt=""
            class="activity-box-img"
          />
          <div class="activity-box-content"></div>
          <p class="activity-box-item" v-html="item.item"></p>
          <div class="activity-box-btn">去消费</div>
        </router-link>
      </keep-alive>
    </li>
  </ul>
</template>
<script>
export default {
  name: "activity",
  props: {
    ifactivity: {
      type: Boolean,
      default: false,
    },
    activityContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.activity {
  width: 100%;
  &-box {
    position: relative;
    @include WH(7.02rem, 2rem, 0, 0.23rem auto 0);
    border-radius: 0.04rem;
    &-img {
      @include WH(7.02rem, 2rem);
    }
    &-content {
      @include ptl(0, 0);
      @include WH(7.02rem, 2rem);
      background: rgba(0, 0, 0, 0.2);
    }
    &-item {
      @include pbl(0.16rem, 0.19rem);
      @include fzc(0.24rem, #fff);
      z-index: 100;
    }
    &-btn {
      @include ptr(0.5rem, 0.05rem);
      @include WH(1.16rem, 1.16rem);
      @include fzchFa(0.28rem, #f63e33, 1.16rem);
      border-radius: 50%;
      background: #ffffff;
    }
  }
}
</style>
