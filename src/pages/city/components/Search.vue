<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名或拼音"
      v-model="keyword"
    />
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-content-item border-bottom" v-for="item of list"  @click="btn(item.name)" :key="item.id">
          {{ item.name }}
        </li>
        <li class="search-content-item border-bottom" v-show="!list.length">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  methods: {
    btn(e) {
      //换地址
      this.$emit("siteFu", e);
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
            this.list = result;
          });
        }
      }, 100);
    },
  },
  computed: {
    hasList() {
      return !this.list, length;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 7.5rem;
  height: 0.92rem;
  padding: 0.1rem;
  background: #00bcd4;
  &-input {
    margin-left: -0.04rem;
    border: none;
    @include commoninput(100%, 0.52rem, center, 0.06rem);
    @include fzc(0.24rem, #666);
  }
  &-content {
    @include ptl(1.78rem, 0);
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 1;
    background: #eee;
    &-item {
      @include fzch(0.24rem, #666, 0.62rem);
      padding-left: 0.2rem;
      background: #fff;
    }
  }
}
</style>
