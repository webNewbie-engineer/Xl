<template>
  <div class="nullList" v-show="listContent[0] == undefined">
    <img
      src="../../../../assets/static/img/promotion/nodata_shops.png"
      alt=""
      class="nullList-img"
    />
    <p class="nullList-remind">您暂未邀请店哦~~</p>
    <div class="nullList-title">
      <div class="left"></div>
      <p class="name">今日必邀商家</p>
      <div class="right"></div>
    </div>
    <ul class="nullList-list">
      <li
        v-for="(item, index) of indexcontent[this.$store.state.count]"
        :key="index"
        v-show="index < 3"
        class="nullList-list_Item"
      >
        <keep-alive>
          <router-link
            :to="{
              name: 'particulars',
              query: { list: $store.state.count, userId: item.id },
            }"
          >
            <img
              :src="require(`../../../../assets/static/img/index/${item.img}`)"
              alt=""
              class="nullList-list_Item_Img"
            />
            <h6 class="nullList-list_Item_Title">{{ item.name }}</h6>
            <div class="nullList-list_Item_Score">
              <span
                class="iconfont"
                v-for="itemIndex of 5"
                :key="itemIndex"
                :style="{ color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1' }"
                >&#xe627;</span
              >
            </div>
            <p class="nullList-list_Item_genre">{{ item.genre }}</p>
            <p class="nullList-list_Item_location">{{ item.location }}</p>
            <p class="nullList-list_Item_distance">{{ item.distance }}</p>
            <div
              class="nullList-list_Item_activity"
              :style="{
                background: item.activityColor,
                color: item.activityColor == '#FFF' ? '#FF5D20' : '#fff',
                border: item.activityColor == '#FFF' ? '0.01rem solid #FF5D20' : 'none',
              }"
            >
              {{ item.activity }}
            </div>
          </router-link>
        </keep-alive>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "nullList",
  props: {
    indexcontent: {
      type: Array,
      default() {
        return [];
      },
    },
    listContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.nullList {
  width: 100%;
  overflow: hidden;
  &-img {
    width: 5.26rem;
    transform: translate(-50%, 0);
    margin: 0.77rem 0 0.91rem 50%;
  }
  &-remind {
    @include fzchFa(0.3rem, #666, 1);
    text-indent: 0.2rem;
  }
  &-title {
    display: flex;
    height: 0.28rem;
    align-items: center;
    justify-content: center;
    margin: 1.81rem 0 0.45rem 0;
    .left {
      flex: 1;
      height: 0.01rem;
      opacity: 0.12;
      margin-left: 0.34rem;
      background: #000000;
    }
    .name {
      @include fzch(0.28rem, #333333, 0.28rem);
      padding: 0 0.26rem 0 0.26rem;
    }
    .right {
      flex: 1;
      height: 0.01rem;
      opacity: 0.12;
      margin-right: 0.34rem;
      background: #000000;
    }
  }
  &-list {
    width: 100%;
    padding-bottom: 1.2rem;
    background: #f5f5f5;
    &_Item {
      position: relative;
      @include WH(7.02rem, 1.64rem, 0, 0 auto);
      border-radius: 0.08rem;
      margin-bottom: 0.2rem;
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
  }
}
</style>
