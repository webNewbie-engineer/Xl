<template>
  <div class="genre">
    <div class="genre_Headline">
      <div
        class="item"
        v-for="(item, index) of choiceness"
        :key="index"
        :style="{ color: item.handClick ? '#ff5d20' : '#333' }"
        @click="handClickGenre($event, index)"
      >
        {{ item.headline }}
      </div>
    </div>
    <div class="genre_Box" ref="SelectBox">
      <div
        class="genre_Box_Select"
        :style="{ width: length, left: LeftSelect }"
      ></div>
    </div>
    <div class="genre_Genre">
      <span
        class="item"
        v-for="(item, Itemindex) of choiceness[count].genreContent"
        :key="Itemindex"
        :style="{
          color: Itemindex == contentTent ? '#FF5D20' : '#666',
          background: Itemindex == contentTent ? '#FFEEE8' : '#F5F5F5',
        }"
        @click="handClickItem(Itemindex)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "genre",
  props: {
    choiceness: {
      type: Array,
      default() {
        return [];
      },
    },
    length: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      LeftSelect: 0,
      content: 0,
      contentTent: 0,
    };
  },
  methods: {
    handClickGenre(e, index) {
      let el = e.srcElement.offsetLeft;
      let SelectBox = this.$refs.SelectBox.offsetLeft;
      for (let i = 0; i < this.choiceness.length; i++) {
        this.choiceness[i].handClick = false;
      }
      this.choiceness[index].handClick = true;
      this.LeftSelect = el - SelectBox + 1 + "px";
      this.contentTent = 0;
      this.$store.commit("updateCount", index);
      this.$store.commit("updateNum", 5);
    },
    handClickItem(index) {
      this.contentTent = index;
    },
  },
  beforeMount() {
    this.choiceness[this.content] = {
      headline: "精选",
      genreContent: ["全部", "美容美发"],
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
<style lang="scss" scoped>
.genre {
  width: 100%;
  overflow: hidden;
  &_Headline {
    display: flex;
    margin-left: 0.39rem;
    .item {
      font-size: 0.28rem;
      margin-right: 0.57rem;
    }
  }
  &_Box {
    position: relative;
    height: 0.15rem;
    margin-left: 0.39rem;
    &_Select {
      position: absolute;
      top: 0.12rem;
      height: 0.03rem;
      transition: 0.5s;
      background: #ff5d20;
    }
  }
  &_Genre {
    width: 100%;
    height: 0.89rem;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    margin: 0.23rem 0 0 0.24rem;
    &::-webkit-scrollbar {
      // 滚动条整体
      background: none;
    }
    .item {
      font-size: 0.26rem;
      padding: 0.11rem 0.17rem 0.12rem 0.18rem;
      margin-right: 0.25rem;
    }
  }
}
</style>