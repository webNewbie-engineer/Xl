<template>
  <ul class="today">
    <li class="today-title">
      <div class="today-title-string left"></div>
      <h4>今日必赚</h4>
      <div class="today-title-string right"></div>
    </li>
    <li class="today-box" v-for="(item, index) of todayContent" :key="index" v-show="index <3">
      <keep-alive>
        <router-link
          :to="{
            name: 'particulars',
            query: { list: 0, userId: item.id },
          }"
        >
          <div class="today-box-earnings">待邀请</div>
          <img
            :src="require(`../../../assets/static/img/index/${item.img}`)"
            alt=""
            class="today-box-img"
          />
          <h4 class="today-box-title">{{ item.name }}</h4>
          <div class="today-box-name today-box-Font">
            <span class="iconfont">&#xe679;</span>
            <span class="title">{{ item.name }}</span>
          </div>
          <div class="today-box-titlename today-box-Font">
            <span class="iconfont">&#xe611;</span>
            <span class="title">{{ item.location }}</span>
          </div>
          <p class="today-box-originalcost">￥{{ item.money }}</p>
          <p class="today-box-currentprice">￥{{ parseFloat(item.money) + 20 }}</p>
          <div class="today-box-share">{{ item.profit }}</div>
        </router-link>
      </keep-alive>
    </li>
  </ul>
</template>
<script>
export default {
  name: "today",
  props: {
    todayContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.today {
  width: 100%;
  padding: 0.4rem 0 0.4rem 0;
  background: #f5f5f5;
  &-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.43rem;
    h4 {
      @include fzc(0.28rem, #333);
      margin: 0 0.34rem;
    }
    &-string {
      flex: 1;
      height: 0.02rem;
      background: #ccc2bf;
    }
    .left {
      margin-left: 0.34rem;
    }
    .right {
      margin-right: 0.34rem;
    }
  }
  &-box {
    position: relative;
    @include WH(7.02rem, 2.32rem, 0, 0 auto 0.15rem);
    border-radius: 0.08rem;
    background: #ffffff;
    &-img {
      @include ptl(0.16rem, 0.16rem);
      @include WH(2rem, 2rem);
      border-radius: 0.04rem;
    }
    &-earnings {
      @include ptl(0.16rem, 0.16rem);
      @include WH(1.11rem, 0.32rem);
      @include fzch(0.2rem, #fff, 0.31rem);
      text-indent: 0.15rem;
      border-bottom-right-radius: 0.08rem;
      z-index: 100;
      background: #ff9a74;
    }
    &-title {
      @include ptl(0.15rem, 2.34rem);
      width: 4.47rem;
      @include fzc(0.26rem, #333);
      line-height: 1.5;
    }
    &-name {
      @include ptl(0.97rem, 2.36rem);
    }
    &-titlename {
      @include ptl(1.38rem, 2.36rem);
    }
    &-Font {
      span {
        @include fzc(0.24rem, #666);
      }
      .title {
        margin-left: 0.12rem;
      }
    }
    &-originalcost {
      @include pbl(0.21rem, 2.38rem);
      @include fzc(0.32rem, #ff5d20);
    }
    &-currentprice {
      @include pbl(0.21rem, 3.42rem);
      @include fzc(0.26rem, #999);
      text-decoration: line-through;
    }
    &-share {
      @include pbr(0.17rem, 0.16rem);
      @include WH(1.8rem, 0.48rem);
      @include fzchFa(0.24rem, #fff, 0.48rem);
      border-radius: 0.24rem;
      background: #ff5d20;
    }
  }
}
</style>
