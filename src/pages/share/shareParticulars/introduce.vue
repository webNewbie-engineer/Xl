<template>
  <div class="introduce">
    <h4 class="introduce-title">{{ introduceContent.particularstitle }}</h4>
    <div class="introduce-price">
      <h6 class="introduce-price-rulingPrice">￥{{ introduceContent.rulingPrice }}</h6>
      <div class="introduce-price-num">{{ introduceContent.matter }}</div>
      <p class="introduce-price-originalCost">{{ introduceContent.originalCost }}</p>
    </div>
    <img
      :src="
        require(`../../../assets/static/img/shareParticulars/${introduceContent.img}`)
      "
      alt=""
      class="introduce-project"
    />
    <div class="introduce-earnings">
      <p class="introduce-earnings-title">预计收益</p>
      <h6 class="introduce-earnings-money">￥{{ introduceContent.introducenum }}</h6>
      <p class="introduce-earnings-proportion">
        收益比例:{{ introduceContent.proportion }}
      </p>
      <div class="introduce-earnings-share" @click="share">
        <p class="introduce-earnings-share-top">立即</p>
        <p class="introduce-earnings-share-bottom">分享</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "introduce",
  props: {
    introduceContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    share() {
      //海报true
      this.$emit("btnPoster", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.introduce {
  width: 100%;
  margin: 0.3rem 0 0.05rem 0;
  &-title {
    @include fzchFa(0.4rem, #333, 1);
  }
  &-price {
    display: flex;
    width: 100%;
    height: 0.37rem;
    justify-content: center;
    margin: 0.29rem 0 0 0;
    &-rulingPrice {
      @include fzch(0.37rem, #ff5d20, 0.37rem);
    }
    &-num {
      @include fzc(0.24rem, #ff5d20);
      height: 0.3rem;
      border: 0.01rem solid #ff5d20;
      border-radius: 0.04rem;
      padding: 0 0.06rem;
      margin: 0.02rem 0.12rem 0;
    }
    &-originalCost {
      @include fzch(0.28rem, #999, 0.37rem);
      text-decoration: line-through;
    }
  }
  &-project {
    width: 7.02rem;
    border-radius: 0.12rem;
    margin: 0.26rem 0 0 0.24rem;
  }
  &-earnings {
    position: relative;
    @include WH(7.02rem, 1.48rem, 0, 0.25rem auto 0);
    border-radius: 0.08rem;
    background: #ffeee8;
    &-title {
      @include ptl(0.32rem, 0.33rem);
      @include fzc(0.28rem, #ff5d20);
    }
    &-money {
      @include ptl(0.84rem, 0.25rem);
      @include fzc(0.48rem, #ff5d20);
      font-weight: 530;
    }
    &-proportion {
      @include ptl(0.95rem, 2.4rem);
      @include fzc(0.28rem, #333);
    }
    &-share {
      @include ptr(0.17rem, 0.19rem);
      @include WH(1.14rem, 1.14rem);
      border-radius: 50%;
      background: #ff5d20;
      p {
        @include fzchFa(0.28rem, #fff, 1);
      }
      &-top {
        margin-top: 0.25rem;
      }
      &-bottom {
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
