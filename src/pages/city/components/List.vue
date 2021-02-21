<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="list-area">
        <div class="list-area-title border-topbottom">当前城市</div>
        <div class="list-area-button">
          <div class="list-area-button-wrapper">
            <div class="list-area-button-wrapper-list">
              {{ site }}
            </div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="list-area">
        <div class="list-area-title border-topbottom">热门城市</div>
        <div class="list-area-button">
          <div
            class="list-area-button-wrapper"
            v-for="item of hot"
            @click="btn(item.name)"
            :key="item.id"
          >
            <div class="list-area-button-wrapper-list">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="list-area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="list-area-title border-topbottom">{{ key }}</div>
        <div class="list-area-list">
          <div
            class="list-area-list-item border-bottom"
            v-for="innerItem of item"
            @click="btn(innerItem.name)"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CityList",
  data() {
    return {
      msg: "af",
    };
  },
  methods: {
    btn(e) {
      //换地址
      this.$emit("siteFu", e);
    },
  },
  props: {
    hot: {
      type: Array,
      default() {
        return [];
      },
    },
    cities: {
      type: Object,
      default() {
        return {};
      },
    },
    letter: {
      type: String,
      default: "",
    },
    site: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  @include ptl(1.78rem, 0);
  right: 0;
  bottom: 0;
  overflow: auto;
  &-area {
    &-title {
      padding-left: 0.2rem;
      @include fzch(0.24rem, #666, 0.54rem);
      background: #eee;
    }
    &-button {
      display: flex;
      flex-wrap: wrap;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      &-wrapper {
        width: 33.33%;
        &-list {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }
    &-list {
      &-item {
        @include fzch(0.2rem, #666, 0.54rem);
        padding-left: 0.2rem;
      }
    }
  }
}
.border-topbottom {
  &::before {
    background-color: #ccc;
  }
  &::after {
    background-color: #ccc;
  }
}
.border-bottom {
  &::before {
    background-color: #ccc;
  }
  &::after {
    background-color: #ccc;
  }
}
</style>
