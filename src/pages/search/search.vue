<template>
  <div class="searchBox">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <searchInupt
      ref="search"
      @listContent="listFun"
      @HistoryDisplay="hdisplay"
      @HistoryContent="HistoryContentFu"
    ></searchInupt>
    <searchHistory
      :HistoryDisplay="HistoryDisplay"
      :HistoryContent="HistoryContent"
      @HistoryDelete="deleteContent"
      @Historyifnone="Historyifnone"
      @HistoryList="HistoryList"
      @HistoryInputContent="inputContent"
    ></searchHistory>
    <searchContent :listContent="listContent"></searchContent>
    <searchNone :HistoryDisplay="HistoryDisplay" :listContent="listContent"></searchNone>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import searchInupt from "./components/searchInupt";
import searchHistory from "./components/searchHistory";
import searchContent from "./components/searchContent";
import searchNone from "./components/searchNone";
export default {
  name: "search",
  data() {
    return {
      HeadlineConten: "搜索",
      listContent: [],
      HistoryDisplay: true,
      HistoryContent: [],
      inputtext: "",
    };
  },
  components: {
    Headline,
    searchInupt,
    searchHistory,
    searchContent,
    searchNone,
  },
  methods: {
    hdisplay(e) {
      //历史搜索none
      this.HistoryDisplay = e;
    },
    HistoryContentFu(e) {
      //历史content
      this.HistoryContent = e;
    },
    deleteContent(e) {
      //历史清空
      this.HistoryContent = e;
    },
    listFun(e) {
      //input搜索
      this.listContent = e;
    },
    HistoryList(e) {
      //历史搜索
      this.listContent = e;
    },
    Historyifnone(e) {
      //历史搜索none
      this.HistoryDisplay = e;
    },
    inputContent(e) {
      //inputtext
      this.$refs.search.searchConten = e;
    },
  },
  activated() {
    this.$refs.search.searchConten = "";
  },
};
</script>
<style lang="scss" scoped>
.searchBox {
  @include WH(100%, 100vh);
  overflow: scroll;
  background: #f5f5f5;
}
</style>
