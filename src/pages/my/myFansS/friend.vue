<template>
  <ul class="friend" v-show="displayIndex == 1">
    <li class="friend-item" v-for="(item, index) of friendContent" :key="index">
      <h4 class="friend-item-name">
        <h2>{{ item.name }}</h2>
        <span>{{ item.Mobile }}</span>
        <div
          :style="{ display: item.status == '' ? 'none' : 'block' }"
          class="friend-item-name-friend"
        >
          {{ item.status }}
        </div>
      </h4>
      <p class="friend-item-registered">{{ item.registered }}</p>
      <img
        :src="require(`../../../assets/static/img/my/${item.img}`)"
        alt=""
        class="friend-item-img"
      />
      <div v-show="displayIndex == 1" class="friend-item-string"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "friend",
  props: {
    displayIndex: {
      type: Number,
      default: 0,
    },
    friendContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.friend {
  width: 100%;
  &-item {
    position: relative;
    @include WH(100%, 1.37rem);
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
      &-friend {
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
