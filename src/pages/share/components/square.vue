<template>
  <ul class="square" v-show="ContentBolck.index == 0">
    <li class="square-box" v-for="(item, index) of squareArr" :key="index">
      <keep-alive>
        <router-link
          :to="{
            name: 'shareParticulars',
            query: {
              list: listIndex,
              userId: item.id,
            },
          }"
        >
          <div class="square-box-item">
            <img
              :src="require(`../../../assets/static/img/search/${item.img}`)"
              alt=""
              class="square-box-item-img"
            />
            <p class="square-box-item-earnings">{{ item.earnings }}</p>
            <h4 class="square-box-item-title">{{ item.title }}</h4>
            <div class="square-box-item-name square-box-item-text">
              <p class="iconfont">&#xe679;</p>
              <p class="name">{{ item.name }}</p>
            </div>
            <div class="square-box-item-locationCoten square-box-item-text">
              <p class="iconfont">&#xe611;</p>
              <p class="name">{{ item.locationCoten }}</p>
            </div>
            <h6 class="square-box-item-money">{{ item.money }}</h6>
            <p class="square-box-item-storePrice">{{ item.storePrice }}</p>
            <p class="square-box-item-sold">{{ item.sold }}</p>
            <div class="square-box-item-profit">{{ item.profit }}</div>
          </div>
        </router-link>
      </keep-alive>
    </li>
  </ul>
</template>
<script>
export default {
  name: "square",
  props: {
    squareArr: {
      type: Array,
      default() {
        return [];
      },
    },
    ContentBolck: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      listIndex: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.square {
  width: 100%;
  padding-bottom: 1.3rem;
  background: #f5f5f5;
  &-box {
    width: 100%;
    margin-top: 0.17rem;
    &-item {
      position: relative;
      @include WH(7.02rem, 2.32rem, 0, 0 auto);
      border-radius: 0.08rem;
      background: #ffffff;
      &-img {
        @include ptl(0.16rem, 0.16rem);
        @include WH(2rem, 2rem, 0, 0);
        border-radius: 0.04rem;
      }
      &-earnings {
        @include ptl(0.16rem, 0.16rem);
        @include WH(1.1rem, 0.32rem, 0, 0);
        @include fzchFa(0.2rem, #fff, 0.32rem);
        z-index: 10;
        border-bottom-right-radius: 0.08rem;
        background: #ff9a74;
      }
      &-title {
        @include ptl(0.15rem, 2.33rem);
        @include fzc(0.26rem, #333);
      }
      &-text {
        display: flex;
        p {
          @include fzc(0.24rem, #666);
        }
        .name {
          margin-left: 0.11rem;
        }
      }
      &-name {
        @include ptl(0.58rem, 2.36rem);
      }
      &-locationCoten {
        @include ptl(0.99rem, 2.36rem);
      }
      &-money {
        @include ptl(1.42rem, 2.36rem);
        @include fzc(0.32rem, #ff5d20);
      }
      &-storePrice {
        @include pbl(0.16rem, 2.37rem);
        @include fzc(0.24rem, #999);
      }
      &-sold {
        @include pbr(0.16rem, 0.44rem);
        @include fzc(0.24rem, #999);
      }
      &-profit {
        @include pbr(0.51rem, 0.16rem);
        @include fzc(0.24rem, #fff);
        border-radius: 0.24rem;
        padding: 0.12rem 0.26rem;
        background: #ff5d20;
      }
    }
  }
}
</style>
