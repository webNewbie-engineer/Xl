<template>
  <ul class="list" v-show="listContent[0] != undefined">
    <li
      v-for="(item, index) of listContent"
      :key="index"
      v-show="index < listRemind.num"
      class="list-item"
    >
      <p class="list-item-date list-item-title">
        下单时间:<span>{{ item.date }}</span>
      </p>
      <p class="list-item-oddNumbers list-item-title">
        订单编号:<span>{{ item.oddNumbers }}</span>
      </p>
      <p class="list-item-name list-item-title">
        购买用户:<span>{{ item.name }}</span>
      </p>
      <img
        :src="require(`../../../../assets/static/img/promotion/${item.list.img}`)"
        alt=""
        class="list-item-img"
      />
      <p class="list-item-money">实付金额￥{{ item.list.money }}</p>
      <p class="list-item-earnings">收益￥{{ item.list.earnings }}</p>
      <p class="list-item-proportion">（比例{{ item.list.proportion }}）</p>
      <p class="title">已结算</p>
    </li>
    <li class="list-remind">{{ listRemind.title }}</li>
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
          num: 2,
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  background: #f5f5f5;
  &-item {
    position: relative;
    @include WH(7.02rem, 4.52rem, 0, 0.25rem auto 0);
    border-radius: 0.08rem;
    background: #ffffff;
    &-title {
      @include fzc(0.24rem, #666);
      span {
        @include fzc(0.24rem, #666);
        margin-left: 0.15rem;
      }
    }
    &-date {
      @include ptl(0.27rem, 0.3rem);
    }
    &-oddNumbers {
      @include ptl(0.72rem, 0.33rem);
    }
    &-name {
      @include ptl(1.15rem, 0.33rem);
    }
    &-img {
      @include ptl(1.67rem, 0.24rem);
      @include WH(6.54rem, 1.86rem);
      border-radius: 0.04rem;
    }
    &-money {
      @include pbl(0.43rem, 0.35rem);
      @include fzc(0.28rem, #666);
    }
    &-earnings {
      @include pbl(0.43rem, 3.2rem);
      @include fzc(0.28rem, #ff5c1e);
    }
    &-proportion {
      @include pbr(0.43rem, 0.25rem);
      @include fzc(0.28rem, #333);
    }
    .title {
      @include ptr(0.72rem, 0.27rem);
      @include fzc(0.28rem, #ff5c1e);
    }
  }
  &-remind {
    @include fzchFa(0.24rem, #c1c1c1, 1);
    margin: 0.55rem 0 1.2rem 0;
  }
}
</style>
