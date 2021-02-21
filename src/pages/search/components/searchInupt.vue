<template>
  <div class="search">
    <div class="search-iconfont iconfont">&#xe632;</div>
    <input
      type="text"
      class="search-input"
      placeholder="请输入关键字"
      v-model="searchConten"
      @keydown.enter="searchAllCompany"
    />
    <div class="search-btn" @click="handClickBtn">取消</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "searchInupt",
  data() {
    return {
      searchConten: "",
      listContent: [],
      HistoryContent: [],
    };
  },

  methods: {
    searchAllCompany() {
      //本地的存储
      if (this.searchConten != "") {
        let arr = JSON.parse(localStorage.getItem("search"));
        if (arr == undefined || arr == null || arr == "") {
          arr = [];
        }
        let info = this.searchConten;
        arr.push(info);
        localStorage.setItem("search", JSON.stringify(arr));
        this.$emit("listContent", []);
        //调接口
        this.getHoemInfo();
        //历史搜索none
        this.$emit("HistoryDisplay", false);
        //历史content
        this.HistoryContent = arr;
        this.$emit("HistoryContent", this.HistoryContent);
      }
    },
    handClickBtn() {
      this.searchConten = "";
      //历史搜索block
      this.$emit("HistoryDisplay", true);
    },
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },
    getHoemInfoContent(res) {
      res = res.data.data;
      this.listContent = [];
      for (let val of res) {
        let arr = val.find((item) => {
          if (item.name.includes(this.searchConten)) {
            this.listContent.push(item);
          }
        });
      }
      this.$emit("listContent", this.listContent);
      this.$store.commit("updatesearch", 5);
    },
  },
  watch: {
    searchConten: function (val) {
      if (this.searchConten == "") {
        //历史搜索block
        this.$emit("HistoryDisplay", true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0.19rem 0 0.36rem 0;
  background: #fff;
  &-input {
    @include commoninput(6.12rem, 0.72rem, left, 0.36rem);
    @include fzc(0.26rem, #333);
    border: none;
    text-indent: 0.85rem;
    margin-left: 0.24rem;
    background: #f5f5f5;
  }
  &-iconfont {
    @include ptl(0.41rem, 0.57rem);
    @include fzc(0.28rem, #333);
  }
  &-btn {
    @include WH(1.14rem, 0.72rem);
    @include fzchFa(0.28rem, #333, 0.72rem);
  }
}
</style>
