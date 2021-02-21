<template>
  <ul class="ToBeInvited" v-show="listDisplay.listNum == 0">
    <li
      class="ToBeInvited-content"
      v-for="(item, index) of ToBeInvitedList"
      :key="index"
      v-show="index < listDisplay.num"
    >
      <div class="ToBeInvited-content_Item">
        <img
          alt=""
          :src="require(`../../../assets/static/img/index/${item.img}`)"
          class="ToBeInvited-content_Item_Img"
        />
        <h6 class="ToBeInvited-content_Item_Title">{{ item.name }}</h6>
        <div class="ToBeInvited-content_Item_Score">
          <span
            class="iconfont"
            v-for="itemIndex of 5"
            :key="itemIndex"
            :style="{ color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1' }"
            >&#xe627;</span
          >
        </div>
        <div
          v-text="item.tiem < 1 ? '待邀请失效' : '查看邀请码'"
          class="ToBeInvited-content_Item_status"
        ></div>
        <p class="ToBeInvited-content_Item_genre">{{ item.genre }}</p>
        <p class="ToBeInvited-content_Item_location">{{ item.location }}</p>
        <p class="ToBeInvited-content_Item_distance">{{ item.distance }}</p>
        <p class="ToBeInvited-content_Item_title">待邀请</p>
        <p class="ToBeInvited-content_Item_time">{{ item.tiemRank }}后失效</p>
      </div>
    </li>
    <li class="ToBeInvited-upload">{{listDisplay.upload}}</li>
  </ul>
</template>
<script>
export default {
  name: "ToBeInvited",
  props: {
    listDisplay: {
      type: Object,
      default() {
        return {
          listNum: 0,
          index: 5,
        };
      },
    },
    ToBeInvitedList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.ToBeInvited {
  width: 100%;
  margin-top: 1.23rem;
  background: #f5f5f5;
  &-upload {
    @include fzchFa(0.26rem, #ccc, 0.52rem);
    margin: 0.4rem 0 0.4rem 0;
    background: #f5f5f5;
  }
  &-content {
    padding-bottom: 0.2rem;
    background: #f5f5f5;
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
      &_title {
        @include ptl(0.16rem, 0.16rem);
        @include WH(0.76rem, 0.32rem);
        text-indent: 0.03rem;
        @include fzch(0.2rem, #fff, 0.32rem);
        border-bottom-right-radius: 0.08rem;
        background: #ff9800;
      }
      &_status {
        @include ptr(0.68rem, 0.16rem);
        @include WH(2rem, 0.48rem);
        @include fzchFa(0.26rem, #fff, 0.48rem);
        border-radius: 0.24rem;
        background: #ff5d20;
      }
      &_time {
        @include pbr(0.18rem, 0.32rem);
        @include fzc(0.22rem, #ff9800);
      }
    }
  }
}
</style>
