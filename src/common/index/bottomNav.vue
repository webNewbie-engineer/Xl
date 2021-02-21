<template>
  <div class="bottomNav">
    <div
      class="bottomNav_item"
      v-for="(item, index) of NavContent"
      :key="index"
    >
      <keep-alive>
        <router-link :to="{ name: item.srcs }" class="routerlink">
          <span
            class="iconfont text"
            v-html="item.iconfont"
            :style="{
              color: index == selected ? '#FF704A' : '#333',
            }"
          ></span>
          <h4
            class="title"
            :style="{
              color: index == selected ? '#FF5D20' : '#333',
            }"
          >
            {{ item.name }}
          </h4>
        </router-link>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "bottomNav",
  props: {
    selected: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      NavContent: {
        type: Array,
        default() {
          return [];
        },
      },
    };
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/common/bottomNav.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      this.NavContent = res.data;
    },
  },
  mounted() {
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.bottomNav {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10000000000000000000000;
  @include WH(100%, 0.96rem);
  background: #fff;
  @include DFFlex1;
  &_item {
    .routerlink {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .text {
      font-size: 0.36rem;
    }
    .title {
      font-size: 0.22rem;
      margin-top: 0.13rem;
    }
  }
}
</style>