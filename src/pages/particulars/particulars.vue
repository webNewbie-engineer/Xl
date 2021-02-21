<template>
  <div>
    <Headline></Headline>
    <swiperBOX :swiper="swiper"></swiperBOX>
    <introduce :introducenameNum="introducenameNum"></introduce>
    <contentBox :contentObj="contentObj" @create="create"></contentBox>
    <invite :necessary="necessary"></invite>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import Headline from "./components/Headline";
import swiperBOX from "./components/swiperBOX";
import introduce from "./components/introduce";
import contentBox from "./components/content";
import invite from "./components/invite";
import popup from "@/common/index/popup";
import axios from "axios";
export default {
  name: "particulars",
  data() {
    return {
      swiper: [],
      arr: {},
      introducenameNum: {
        name: "",
        num: "",
        genre: "",
      },
      contentObj: {
        item: "",
        phone: "",
        profit: "",
        distance: "",
        locationCoten: "",
      },
      necessary: [],
      listArr: {},
      popupContentAll: {
        ifnone: false,
        content: "",
      },
    };
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },
    getHoemInfoContent(res) {
      res = res.data.data;
      console.log(res);
      //data那个[]中的{},通过id查找
      const arr = res[this.$route.query.list].find(
        (item) => item.id === this.$route.query.userId
      );
      this.listArr = arr;
      //swiper
      this.swiper = arr.swiper;
      //introduce
      this.introducenameNum.name = arr.name;
      this.introducenameNum.num = arr.star;
      this.introducenameNum.genre = arr.genre;
      //contentBox
      this.contentObj.item = arr.item;
      this.contentObj.phone = arr.phone;
      this.contentObj.profit = arr.profit;
      this.contentObj.locationCoten = arr.locationCoten;
      this.contentObj.distance = arr.distance;
      //invite
      this.necessary = arr.necessary;
    },
    create(e) {
      //判断用户是否登陆
      let user = JSON.parse(localStorage.getItem("user"));
      if (user == undefined) {
        this.popupContentAll = {
          ifnone: true,
          content: "您未登录暂时不可以邀请",
        };
        setTimeout((val) => {
          this.popupContentAll = {
            ifnone: false,
            content: "",
          };
        }, 3000);
        return;
      }
      //生成邀请店列表
      //提示
      this.popupContentAll = {
        ifnone: true,
        content: "已邀请",
      };
      setTimeout((val) => {
        this.popupContentAll = {
          ifnone: false,
          content: "",
        };
      }, 3000);
      //获取邀请店列表
      let arr = JSON.parse(localStorage.getItem("inviteInvitation"));
      if (arr == undefined || arr == null || arr == "") {
        arr = [];
      }
      const info = {};
      //生成列表信息
      info.img = this.listArr.img;
      info.name = this.listArr.name;
      info.star = this.listArr.star;

      const date = new Date();
      // 获取本  日
      const current_date = date.getDate();
      // 获取本  月
      let month = date.getMonth() + 1;
      let getHours = date.getHours(); //获取当前小时（0~23）
      let getMinutes = date.getMinutes(); //获取当前分钟数（0~59）
      let getSeconds = date.getSeconds(); //获取当前秒数（0~59）
      info.date = `${month < 10 ? "0" + month : month}-${
        current_date < 10 ? "0" + current_date : current_date
      }${" "}${getHours < 10 ? "0" + getHours : getHours}:${
        getMinutes < 10 ? "0" + getMinutes : getMinutes
      }:${getSeconds < 10 ? "0" + getSeconds : getSeconds}`;
      //时间
      let tiem = Math.ceil(Math.random() * 10000);
      if (tiem == 0) {
        tiem = 10000;
      }
      info.tiem = tiem;
      info.tiemRank = "00:00:00";
      info.genre = this.listArr.genre;
      info.distance = this.listArr.distance;
      info.location = this.listArr.location;
      info.money = this.listArr.money;
      info.title = "已邀请";
      //存入数组
      arr.push(info);
      //时间
      var myDate = new Date();
      let myyear = myDate.getFullYear(); //获取当前年份(2位)
      let mymonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      let mydate = myDate.getDate(); //获取当前日期
      //今日预估奖励
      let awardArr = user[user.length - 1].award;
      if (awardArr.Today.today == `${myyear}${mymonth}${mydate}`) {
        awardArr.Today.num += parseFloat(info.money);
      } else {
        //不是今日清空
        awardArr.Today.today = `${myyear}${mymonth}${mydate}`;
        awardArr.Today.num = parseFloat(info.money);
      }
      //本月
      if (awardArr.ThisMonth.month == `${myyear}${mymonth}`) {
        awardArr.ThisMonth.num += parseFloat(info.money);
      } else {
        //不是本月清空
        awardArr.ThisMonth.month = `${myyear}${mymonth}`;
        awardArr.ThisMonth.num = parseFloat(info.money);
      }
      awardArr.num += parseFloat(info.money);
      //累计
      user[user.length - 1].award = awardArr;
      user[user.length - 1].money += parseFloat(info.money);
      //奖励list
      let list = JSON.parse(localStorage.getItem("award"));
      if (list == undefined || list == null) {
        list = [];
      }
      const listObj = {};
      listObj.name = `【分享】-${this.listArr.name}`;
      listObj.money = parseFloat(info.money);
      mymonth += 1;
      mymonth = mymonth < 10 ? `0${mymonth}` : mymonth;
      mydate = mydate < 10 ? `0${mydate}` : mydate;
      getMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
      getSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;
      listObj.date = `${mymonth}-${mydate}${" "}${getMinutes}:${getSeconds}`;
      list.push(listObj);
      //传入本地储存
      console.log(list);
      localStorage.setItem("award", JSON.stringify(list));
      //传入本地储存
      localStorage.setItem("inviteInvitation", JSON.stringify(arr));
      localStorage.setItem("user", JSON.stringify(user));
      //审核中
      let audit = JSON.parse(localStorage.getItem("audit"));
      if (audit == undefined || audit == null || audit == "") {
        audit = [];
      }
      //深拷贝
      const _obj = JSON.stringify(info);
      const objClone = JSON.parse(_obj);
      objClone.title = "审核中";
      audit.push(objClone);
      localStorage.setItem("audit", JSON.stringify(audit));
    },
  },
  components: {
    Headline,
    swiperBOX,
    introduce,
    contentBox,
    invite,
    popup,
  },
  activated() {
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped></style>
