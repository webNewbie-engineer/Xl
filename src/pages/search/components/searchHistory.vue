<template>
  <div class="searchHistory" v-show="HistoryDisplay">
    <div class="searchHistory-box">
      <p class="searchHistory-box-search">历史搜索</p>
      <div class="searchHistory-box-iconfont iconfont" @click="handClickDelete">
        &#xe732;
      </div>
    </div>
    <div class="searchHistory-Content">
      <ul class="searchHistory-Content-list">
        <li
          class="searchHistory-Content-list-item"
          v-for="(item, index) of list"
          :key="index"
          @click="handClickBtn(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "searchHistory",
  props: {
    HistoryDisplay: {
      type: Boolean,
      default: true,
    },
    HistoryContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      list: [],
      contentList: [],
      listName: "",
    };
  },
  methods: {
    handClickDelete() {
      //历史搜索删除本地的存储
      let arr = JSON.parse(localStorage.getItem("search"));
      if (arr == undefined || arr == null || arr == "") {
        arr = [];
      }
      arr = [];
      this.$emit("HistoryDelete", []);
      this.list = arr;
      localStorage.removeItem("search");
    },
    handClickBtn(e) {
      //搜索name
      this.listName = e;
      this.$emit("HistoryList", []);
      //inputtext
      this.$emit("HistoryInputContent", e);
      //调接口
      this.getHoemInfo();
    },
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },
    getHoemInfoContent(res) {
      res = res.data.data;
      this.contentList = [];
      for (let val of res) {
        let arr = val.find((item) => {
          if (item.name.includes(this.listName)) {
            this.contentList.push(item);
          }
        });
      }
      this.$emit("HistoryList", this.contentList);
      //searchHistory   none
      this.$emit("Historyifnone", false);
      this.$store.commit("updatesearch", 5);
    },
  },
  activated() {
    //渲染更新历史搜索
    let arr = JSON.parse(localStorage.getItem("search"));
    if (arr == undefined || arr == null || arr == "") {
      arr = [];
    }
    this.list = arr;
    this.$emit("HistoryList", []);
    this.$emit("Historyifnone", true);
  },
  mounted() {
    //渲染历史搜索
    let arr = JSON.parse(localStorage.getItem("search"));
    if (arr == undefined || arr == null || arr == "") {
      arr = [];
    }
    this.list = arr;
  },
  updated() {
    if (this.HistoryContent.length != 0) {
      this.list = this.HistoryContent;
    }
  },
};
</script>
<style lang="scss" scoped>
.searchHistory {
  @include WH(100%, 84vh);
  background: #fff;
  &-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-search {
      @include fzc(0.28rem, #999);
      margin-left: 0.32rem;
    }
    &-iconfont {
      @include fzc(0.28rem, #999);
      margin-right: 0.4rem;
    }
  }
  &-Content {
    width: 100%;
    margin-top: 0.37rem;
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-left: 0.24rem;
      &-item {
        height: 0.56rem;
        @include fzchFa(0.24rem, #333333, 0.56rem);
        padding: 0 0.34rem;
        border: 0.01rem solid #e0e0e0;
        border-radius: 0.28rem;
        margin: 0 0 0.24rem 0.31rem;
      }
    }
  }
}
</style>