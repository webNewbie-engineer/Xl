<template>
  <ul class="list" v-show="listContent[0] != undefined">
    <li
      v-for="(item, index) of listContent"
      :key="index"
      v-show="index < listRemind.num"
      class="list_Item"
    >
      <img
        :src="require(`../../../../assets/static/img/index/${item.img}`)"
        alt=""
        class="list_Item_Img"
      />
      <h6 class="list_Item_Title">{{ item.name }}</h6>
      <div class="list_Item_Score">
        <span
          class="iconfont"
          v-for="itemIndex of 5"
          :key="itemIndex"
          :style="{ color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1' }"
          >&#xe627;</span
        >
      </div>
      <p class="list_Item_genre">{{ item.genre }}</p>
      <p class="list_Item_location">{{ item.location }}</p>
      <p class="list_Item_distance">{{ item.distance }}</p>
      <p class="list_Item-date">{{ item.date }}</p>
      <h4 class="list_Item-money">+￥{{ item.money }}</h4>
      <p class="list_Item-title">{{ item.title }}</p>
    </li>
    <li class="list-remind">{{listRemind.title}}</li>
  </ul>
</template>
<script>
export default {
  name: "list",
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
          title: "下拉加载",
          num: 4,
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 0.3rem 0 0 0;
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
    &-date {
      @include ptr(1.19rem, 0.2rem);
      @include fzc(0.24rem, #666);
    }
    &-money {
      @include ptr(0.7rem, 0.35rem);
      @include fzc(0.36rem, #ff5d20);
    }
    &-title {
      @include ptl(0.16rem, 0.16rem);
      @include WH(0.9rem, 0.32rem);
      @include fzchFa(0.24rem, #fff, 0.32rem);
      border-bottom-right-radius: 0.07rem;
      background: #ff5d20;
    }
  }
  &-remind {
    @include fzchFa(0.24rem, #c1c1c1, 1);
    margin: 0.55rem 0 1.2rem 0;
  }
}
</style>
