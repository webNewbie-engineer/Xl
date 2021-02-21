<template>
  <div class="invite">
    <div class="invite-title">
      <div class="left"></div>
      <h6 class="name">今日必邀商家</h6>
      <div class="right"></div>
    </div>
    <div
      class="allBox"
      v-for="(item, index) of necessary"
      :key="index"
      v-show="index < $store.state.dispatchNum"
    >
      <div class="invite_Item">
        <img
          :src="require(`../../../assets/static/img/index/${item.img}`)"
          alt=""
          class="invite_Item_Img"
        />
        <h6 class="invite_Item_Title">{{ item.name }}</h6>
        <div class="invite_Item_Score">
          <span
            class="iconfont"
            v-for="itemIndex of 5"
            :key="itemIndex"
            :style="{ color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1' }"
            >&#xe627;</span
          >
        </div>
        <p class="invite_Item_genre">{{ item.genre }}</p>
        <p class="invite_Item_location">{{ item.location }}</p>
        <p class="invite_Item_distance">{{ item.distance }}</p>
        <div
          class="invite_Item_activity"
          :style="{
            background: item.activityColor,
            color: item.activityColor == '#FFF' ? '#FF5D20' : '#fff',
            border: item.activityColor == '#FFF' ? '0.01rem solid #FF5D20' : 'none',
          }"
        >
          {{ item.activity }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import png1 from '../../../assets/static/goodsmg.png'
export default {
  name: "invite",
  props: {
    necessary: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // src:require('../../../assets/static/goodsmg.png')
    };
  },
};
</script>
<style lang="scss" scoped>
.invite {
  width: 100%;
  padding-top: 0.31rem;
  background: #f5f5f5;
  &-title {
    display: flex;
    height: 0.28rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.33rem;
    .left {
      @include WH(1.87rem, 0.01rem);
      opacity: 0.12;
      background: #000000;
    }
    .name {
      @include fzch(0.28rem, #333333, 0.28rem);
      padding: 0 0.27rem 0 0.3rem;
    }
    .right {
      @include WH(1.87rem, 0.01rem);
      opacity: 0.12;
      background: #000000;
    }
  }
  &_Item {
    position: relative;
    @include WH(7.02rem, 1.64rem, 0, 0 auto);
    border-radius: 0.08rem;
    background: #ffffff;
    &_Img {
      @include ptl(0.16rem, 0.16rem);
      @include WH(1.32rem, 1.32rem);
      border-radius: 0.08rem;
    }
    &_Title {
      width: 2rem;
      @include ptl(0.24rem, 1.73rem);
      @include fzc(0.32rem, #333);
      @include omitN0;
    }
    &_Score {
      @include ptl(0.73rem, 1.76rem);
      span {
        font-size: 0.16rem;
        margin-right: 0.05rem;
      }
    }
    &_genre {
      width: 0.85rem;
      @include ptl(0.72rem, 3.3rem);
      @include fzc(0.2rem, #999);
      @include omitN0;
    }
    &_location {
      width: 1.5rem;
      @include ptl(1.19rem, 1.72rem);
      @include fzc(0.24rem, #666);
      @include omitN0;
    }
    &_distance {
      width: 0.65rem;
      @include ptl(1.21rem, 3.4rem);
      @include fzc(0.24rem, #666);
      @include omitN0;
    }
    &_activity {
      @include ptr(0.7rem, 0.16rem);
      font-size: 0.26rem;
      border-radius: 0.24rem;
      padding: 0.11rem 0.25rem 0.12rem 0.25rem;
    }
  }
  &_upload {
    @include fzchFa(0.26rem, #ccc, 0.52rem);
    background: #f5f5f5;
  }
  .allBox {
    padding-bottom: 0.2rem;
    background: #f5f5f5;
  }
}
</style>
