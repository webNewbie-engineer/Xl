<template>
  <div class="nullList" v-show="listContent[0] == undefined">
    <img
      src="../../../../assets/static/img/promotion/sharc.png"
      alt=""
      class="nullList-img"
    />
    <p class="nullList-remind">暂未分享券哦~~</p>
    <div class="nullList-title">
      <div class="left"></div>
      <p class="name">今日必分享赚收益</p>
      <div class="right"></div>
    </div>
    <ul class="nullList-list">
      <li class="nullList-list-box" v-for="(item, index) of nullListContent" :key="index">
        <keep-alive>
          <router-link
            :to="{
              name: 'shareParticulars',
              query: {
                list: '01',
                userId: item.id,
              },
            }"
          >
            <div class="nullList-list-box-item">
              <img
                :src="require(`../../../../assets/static/img/search/${item.img}`)"
                alt=""
                class="nullList-list-box-item-img"
              />
              <p class="nullList-list-box-item-earnings">{{ item.earnings }}</p>
              <h4 class="nullList-list-box-item-title">{{ item.title }}</h4>
              <div class="nullList-list-box-item-name nullList-list-box-item-text">
                <p class="iconfont">&#xe679;</p>
                <p class="name">{{ item.name }}</p>
              </div>
              <div
                class="nullList-list-box-item-locationCoten nullList-list-box-item-text"
              >
                <p class="iconfont">&#xe611;</p>
                <p class="name">{{ item.locationCoten }}</p>
              </div>
              <h6 class="nullList-list-box-item-money">{{ item.money }}</h6>
              <p class="nullList-list-box-item-storePrice">{{ item.storePrice }}</p>
              <p class="nullList-list-box-item-sold">{{ item.sold }}</p>
              <div class="nullList-list-box-item-profit">{{ item.profit }}</div>
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
    nullListContent: {
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
  background: #f5f5f5;
  &-img {
    width: 5.26rem;
    transform: translate(-50%, 0);
    margin: 1.38rem 0 0.91rem 50%;
  }
  &-remind {
    @include fzchFa(0.3rem, #666, 1);
    text-indent: 0.25rem;
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
}
</style>
