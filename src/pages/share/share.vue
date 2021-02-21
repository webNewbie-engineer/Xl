<template>
  <div class="share">
    <topHeadlin :title="title"></topHeadlin>
    <search :searchplaceholder="searchplaceholder"></search>
    <swiper :options="swiperOption" class="swiper share-advertising">
      <swiper-slide class="swiper-slide" v-for="(item, index) in swiperArr" :key="index">
        <img
          :src="require(`../../assets/static/img/search/${item}`)"
          alt=""
          class="share-advertising-img"
        />
      </swiper-slide>
    </swiper>
    <selectContcon :titleArr="titleArr" @selectlist="selectlist"></selectContcon>
    <giftBag :giftBagArr="giftBagArr" :ContentBolck="ContentBolck"></giftBag>
    <square :squareArr="squareArr" :ContentBolck="ContentBolck"></square>
    <bottomNav :selected="selected"></bottomNav>
  </div>
</template>
<script>
import Swiper from "swiper";
import topHeadlin from "@/pages/index/components/topHeadline";
import search from "./components/search";
import selectContcon from "@/common/index/selectContcon";
import giftBag from "./components/giftBag";
import square from "./components/square";
import bottomNav from "@/common/index/bottomNav";
import axios from "axios";
export default {
  name: "share",
  data() {
    return {
      swiperOption:
        {
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false,
          },
          //开启循环模式
          loop: true,
        } || {},
      title: "分享券",
      searchplaceholder: "搜索体验券",
      titleArr: [
        {
          name: "好券广场",
          color: "#333",
        },
        {
          name: "狂欢节礼包",
          color: "#333",
        },
      ],
      giftBagArr: [],
      ContentBolck: {
        index: 0,
        num: 5,
      },
      squareArr: [],
      selected: 1,
      swiperArr: ["advertising.jpg", "advertising.jpg"],
    };
  },
  components: {
    topHeadlin,
    search,
    selectContcon,
    giftBag,
    square,
    bottomNav,
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/share/share.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      //选择
      this.titleArr = res.data.title;
      //狂欢节礼包内容
      this.giftBagArr = res.data.giftBag;
      //广场内容
      this.squareArr = res.data.square;
    },
    selectlist(e) {
      //更换列表
      this.ContentBolck.index = e;
      this.ContentBolck.num = 5;
    },
  },
  activated() {
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.share {
  position: relative;
  @include WH(100%, 100vh);
  background: #f5f5f5;
  &-advertising {
    @include ptl(2.15rem, 0.24rem);
    @include WH(7.02rem, 2.4rem, 0, 0);
    border-radius: 0.08rem;
    z-index: 100;
    &-img {
      @include WH(7.02rem, 2.4rem, 0, 0);
    }
  }
}
</style>
