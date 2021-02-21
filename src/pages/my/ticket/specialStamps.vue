<template>
  <ul class="stamps" v-show="ifactivity == false">
    <li class="stamps-box" v-for="(item, index) of stampsContent" :key="index">
      <div class="stamps-box-top">
        <h4 class="title">{{ item.name }}</h4>
        <p class="condition">{{ item.condition }}</p>
      </div>
      <img
        :src="require(`../../../assets/static/img/index/${item.img}`)"
        alt=""
        class="stamps-box-titleimg"
      />
      <img
        :src="require(`../../../assets/static/img/index/${item.img}`)"
        alt=""
        class="stamps-box-img"
      />
      <p class="stamps-box-content">
        <span v-show="item.stamps != ''">{{ item.stamps }}</span> {{ item.title }}
      </p>
      <h6 class="stamps-box-money">{{ item.money }}</h6>
      <p class="stamps-box-item">{{ item.item }}</p>
      <div class="stamps-box-btn">去消费</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "specialStamps",
  props: {
    stampsContent: {
      type: Array,
      default() {
        return [];
      },
    },
    ifactivity: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.stamps {
  width: 100%;
  padding: 0.18rem 0 0.4rem 0;
  background: #f5f5f5;
  &-box {
    position: relative;
    @include WH(7.02rem, 2.56rem, 0, 0 auto 0.18rem);
    border-radius: 0.08rem;
    background: #ffffff;
    &-top {
      width: 6.53rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.01rem solid #eee;
      margin: 0 auto;
      .title {
        @include fzchFa(0.3rem, #333, 0.73rem);
        text-indent: 0.6rem;
      }
      .condition {
        @include fzchFa(0.26rem, #999, 0.73rem);
      }
    }
    &-titleimg {
      @include ptl(0.17rem, 0.24rem);
      @include WH(0.4rem, 0.4rem);
      border-radius: 0.08rem;
    }
    &-img {
      @include ptl(0.99rem, 0.25rem);
      @include WH(1.32rem, 1.32rem);
      border-radius: 0.08rem;
    }
    &-content {
      @include ptl(1.05rem, 1.85rem);
      @include fzc(0.28rem, #333);
      span {
        @include fzc(0.22rem, #ff9800);
        padding: 0.05rem 0.08rem 0.06rem 0.07rem;
        border: 0.01rem solid #ff9800;
      }
    }
    &-money {
      @include ptl(1.61rem, 1.86rem);
      @include fzc(0.28rem, #ff1818);
    }
    &-item {
      @include pbl(0.27rem, 1.86rem);
      @include fzc(0.22rem, #999);
    }
    &-btn {
      @include pbr(0.25rem, 0.25rem);
      @include WH(1.44rem, 0.56rem);
      @include fzchFa(0.24rem, #ff1818, 0.56rem);
      border: 0.01rem solid #ff1818;
      border-radius: 0.28rem;
    }
  }
}
</style>
