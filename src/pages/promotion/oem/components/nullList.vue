<template>
  <div class="nullList" v-show="listContent[0] == undefined">
    <img
      src="../../../../assets/static/img/promotion/nodata_package.png"
      alt=""
      class="nullList-img"
    />
    <p class="nullList-remind">暂未分享礼包哦~~</p>
    <div class="nullList-title">
      <div class="left"></div>
      <p class="name">分享礼包赚收益</p>
      <div class="right"></div>
    </div>
    <ul class="nullList-item">
      <li
        class="nullList-item-list"
        v-for="(item, index) of nullListContent"
        :key="index"
      >
        <router-link :to="{ name: 'carnival', query: { list: item.id } }">
          <img
            :src="require(`../../../../assets/static/img/search/${item.img}`)"
            alt=""
            class="nullList-item-list-img"
          />
        </router-link>
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
  &-img {
    width: 5.26rem;
    transform: translate(-50%, 0);
    margin: 1.39rem 0 0.91rem 50%;
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
  &-item {
    width: 100%;
    padding: 0.44rem 0 0.6rem 0;
    background: #f5f5f5;
    &-list {
      margin-bottom: 0.23rem;
      &-img {
        @include WH(7.02rem, 2rem, 0, 0 0 0 0.24rem);
      }
    }
  }
}
</style>
