<template>
  <div class="Box" id="dody">
    <topHeadlin :title="title"></topHeadlin>
    <search :searchplaceholder="searchplaceholder" :site="site"></search>
    <advertising :swiperArr="swiperArr"></advertising>
    <genre :choiceness="choiceness" :length="length"></genre>
    <indexConten
      :indexcontent="indexcontent"
      :IndexcontentContent="IndexcontentContent"
      @posterCode="posterCode"
    ></indexConten>
    <bottomNav :selected="selected"></bottomNav>
    <member></member>
    <poster :posterContent="posterContent" @posterCode="posterCode"></poster>
    <logo ref="logo"></logo>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import topHeadlin from "./components/topHeadline";
import search from "./components/search";
import advertising from "./components/advertising";
import genre from "./components/genre";
import indexConten from "./components/Indexcontent";
import axios from "axios";
import bottomNav from "@/common/index/bottomNav";
import member from "./components/member";
export default {
  name: "index",
  data() {
    return {
      choiceness: [],
      length: "",
      indexcontent: [],
      selected: 0,
      IndexcontentContent: "下拉加载",
      title: "邀请店",
      searchplaceholder: "搜索商店名",
      posterContent: {
        display: false,
        img: "goodsmg.png",
        name: "小鹿养生会所",
        referrer: "逆风如解意",
      },
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      site: "",
      swiperArr: ["advertising.png", "advertising.png"],
    };
  },
  components: {
    topHeadlin,
    search,
    advertising,
    genre,
    indexConten,
    bottomNav,
    member,
    poster: () => import("./components/poster"),
    logo: () => import("./components/logo"),
    popup: () => import("@/common/index/popup"),
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/index/choiceness.json").then(this.getHoemInfoSucc);
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      //分类
      this.choiceness = res.data.content;
      this.length = res.data.length;
    },
    getHoemInfoContent(res) {
      //列表
      res = res.data;
      this.indexcontent = res.data;
    },
    posterCode(e) {
      //海报
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == null || arr == "") {
        return this.$refs.logo.display =true;
      }
      this.posterContent = e;
    },
    popupMessage(e) {
      this.popupContentAll = {
        ifnone: true,
        content: e,
      };
      setTimeout((val) => {
        this.popupContentAll = {
          ifnone: false,
          content: "",
        };
      }, 3000);
    },
  },
  mounted() {
    //调接口
    this.getHoemInfo();
    this.$nextTick(() => {
      // 进入nexTick
      let bady = document.getElementById("dody"); // 获取滚动条的dom
      // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
      bady.onscroll = () => {
        // 获取距离顶部的距离
        let scrollTop = bady.scrollTop;
        // 获取可视区的高度
        let windowHeight = bady.clientHeight;
        // 获取滚动条的总高度
        let scrollHeight = bady.scrollHeight;
        if (scrollTop + windowHeight >= scrollHeight) {
          // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
          if (
            this.$store.state.dispatchNum <=
            this.indexcontent[this.$store.state.count].length
          ) {
            this.IndexcontentContent = "正在加载...";
            setTimeout((val) => {
              this.$store.state.dispatchNum += 5;
              if (
                this.$store.state.dispatchNum <
                this.indexcontent[this.$store.state.count].length
              ) {
                this.IndexcontentContent = "下拉加载";
              } else {
                this.IndexcontentContent = "全部结果加载完毕";
              }
            }, 2000);
          }
          this.shows = false;
        }
      };
    });
  },
  activated() {
    //地址;
    let arr = localStorage.getItem("site");
    if (arr == undefined || arr == null || arr == "undefined") {
      arr = "长沙";
      this.site = arr;
      localStorage.setItem("site", arr);
    }
    this.site = arr;
  },
};
</script>
<style lang="scss" scoped>
.Box {
  width: 100%;
  overflow: scroll;
}
.Box::-webkit-scrollbar {
  display: none;
}
</style>
