<template>
  <ul class="member" v-show="displayIndex == 0">
    <li class="member-item" v-for="(item, index) of fansContent" :key="index">
      <h4 class="member-item-name">
        <h2>{{ item.name }}</h2>
        <span>{{ item.Mobile }}</span>
        <div
          :style="{ display: item.status == '' ? 'none' : 'block' }"
          class="member-item-name-member"
        >
          {{ item.status }}
        </div>
      </h4>
      <p class="member-item-registered">{{ item.registered }}</p>
      <p class="member-item-open">{{ item.open }}</p>
      <img
        :src="require(`../../../assets/static/img/my/${item.img}`)"
        alt=""
        class="member-item-img"
      />
      <div v-show="displayIndex == 0" class="member-item-string"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "member",
  props: {
    displayIndex: {
      type: Number,
      default: 0,
    },
    fansContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.member {
  width: 100%;
  margin-top: 0.02rem;
  &-item {
    position: relative;
    @include WH(100%, 1.62rem);
    &-name {
      display: flex;
      @include ptl(0.29rem, 1.35rem);
      h2 {
        @include fzch(0.3rem, #333, 0.36rem);
      }
      span {
        @include fzch(0.24rem, #666);
        margin: 0.13rem 0 0 0.13rem;
      }
      &-member {
        height: 0.33rem;
        @include fzch(0.22rem, #ff5d20, 0.33rem);
        border: 0.01rem solid #ff5d20;
        margin: 0.03rem 0 0 0.24rem;
        padding: 0 0.07rem;
      }
    }
    &-registered {
      @include ptl(0.76rem, 1.36rem);
      @include fzc(0.22rem, #999);
    }
    &-open {
      @include ptl(1.13rem, 1.36rem);
      @include fzc(0.22rem, #999);
    }
    &-img {
      @include ptl(0.26rem, 0.25rem);
      @include WH(0.88rem, 0.88rem);
      border-radius: 50%;
    }
    &-string {
      @include pbr(0, 0);
      @include WH(6.14rem, 0.01rem);
      background: #eee;
    }
  }
}
</style>
