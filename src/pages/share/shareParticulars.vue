<template>
  <div class="shareParticulars">
    <Headline :skip="skip"></Headline>
    <introduce :introduceContent="introduceContent" @btnPoster="btnPoster"></introduce>
    <matter :matterContnent="matterContnent"></matter>
    <store :storeContent="storeContent"></store>
    <particulars :particularsContent="particularsContent"></particulars>
    <ul class="shareParticulars-box">
      <li class="share" @click="btnPoster(true)">{{ share }}</li>
      <li class="purchase" @click="clickPurchase">{{ purchase }}</li>
    </ul>
    <open></open>
    <buy :introduceContent="introduceContent" ref="buyData" @logoUndefined="logoUndefined"></buy>
    <poster :posterList="posterList" @btnPoster="btnPoster"></poster>
    <popup :popupContentAll="popupContentAll"></popup>
    <UserLogo :logoState="logoState" @logoUndefined="logoUndefined"></UserLogo>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import introduce from "./shareParticulars/introduce";
import matter from "./shareParticulars/matter";
import store from "./shareParticulars/store";
import particulars from "./shareParticulars/particulars";
import open from "./shareParticulars/open";
import buy from "./shareParticulars/buy";
import axios from "axios";
export default {
  name: "shareParticulars",
  data() {
    return {
      skip: "/share",
      introduceContent: { img: "project.png" },
      storeContent: {
        img: "goodsmg.png",
      },
      particularsContent: { img: "project.png" },
      matterContnent: [],
      share: "",
      purchase: "",
      posterList: {
        title: "SPA按摩 90分钟舒缓经络",
        name: "雅瑜养生会所",
        headPortrait: "goodsmg.png",
        commodity: "project1.png",
        price: "100",
        originalPrice: "118",
        referrer: "逆风如解",
      },
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      logoState: false,
    };
  },
  components: {
    Headline,
    introduce,
    matter,
    store,
    particulars,
    open,
    buy,
    poster: () => import("./shareParticulars/poster"),
    popup: () => import("@/common/index/popup"),
    UserLogo: () => import("@/common/index/UserLogo"),
  },
  methods: {
    logoUndefined(e) {
      //未登录
      this.logoState = e;
    },
    getHoemInfo() {
      axios.get("/data/share/share.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data.data;
      //data那个[]中的{},通过id查找
      const arr = res.square.find((item) => item.id === this.$route.query.userId);
      //introduce内容
      this.introduceContent = arr.introduce;
      //store内容
      this.storeContent = arr.merchant;
      //particulars内容
      this.particularsContent = arr.particulars;
      //matter内容
      this.matterContnent = arr.items;
      //share内容
      this.share = arr.share;
      //purchase内容
      this.purchase = arr.purchase;
      //海报
      this.posterList = arr.poster;
    },
    clickPurchase() {
      this.$refs.buyData.buy = true;
    },
    btnPoster(e) {
      //用户信息
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == null || arr == "") {
        return (this.logoState = e);
      }
      this.posterList.display = e;
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
  activated() {
    //调接口
    this.getHoemInfo();
    //刷新
    this.$refs.buyData.buy = false;
  },
};
</script>
<style lang="scss" scoped>
.shareParticulars {
  width: 100%;
  background: 100%;
  &-box {
    position: fixed;
    display: flex;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 100;
    li {
      flex: 1;
      height: 0.96rem;
      @include fzchFa(0.32rem, #fff, 0.96rem);
    }
    .share {
      background: #333333;
    }
    .purchase {
      background: #ff5d20;
    }
  }
}
</style>
