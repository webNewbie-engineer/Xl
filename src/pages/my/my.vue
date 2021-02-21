<template>
  <div>
    <Headline></Headline>
    <land :userContent="userContent" :userShow="userShow"></land>
    <user :userContent="userContent" :userShow="userShow" @userMember="userMember"></user>
    <remainingSum
      :remainingSumuUnit="remainingSumuUnit"
      @logoUndefined="logoUndefined"
      @idTrue="idTrue"
    ></remainingSum>
    <Myaward :award="award" @logoUndefined="logoUndefined"></Myaward>
    <myFunction></myFunction>
    <myfans :fans="fans" @logoUndefined="logoUndefined"></myfans>
    <explain></explain>
    <bottomNav :selected="selected"></bottomNav>
    <identityCard ref="idCard"></identityCard>
    <popup :popupContentAll="popupContentAll"></popup>
    <UserLogo :logoState="logoState" @logoUndefined="logoUndefined"></UserLogo>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "my",
  data() {
    return {
      remainingSumuUnit: 0,
      selected: 3,
      userContent: {},
      userShow: false,
      award: [
        { date: "今日预估奖励", money: "0.00" },
        {
          date: "本月预估奖励",
          money: "0.00",
        },
        {
          date: "累计预估奖励",
          money: "0.00",
        },
      ],
      fans: [],
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      logoState: false,
    };
  },
  components: {
    Headline: () => import("./components/Headline"),
    land: () => import("./components/land"),
    user: () => import("./components/user"),
    remainingSum: () => import("./components/remainingSum"),
    Myaward: () => import("./components/Myaward"),
    myFunction: () => import("./components/myFunction"),
    myfans: () => import("./components/myfans"),
    explain: () => import("./components/explain"),
    bottomNav: () => import("@/common/index/bottomNav"),
    popup: () => import("@/common/index/popup"),
    identityCard: () => import("./components/identityCard"),
    UserLogo: () => import("@/common/index/UserLogo"),
  },
  methods: {
    userMember(e) {
      //升级会员
      this.userContent.member = e.name;
      this.userContent.color = e.color;
      let arr = JSON.parse(localStorage.getItem("user"));
      arr[arr.length - 1] = this.userContent;
      localStorage.setItem("user", JSON.stringify(arr));
    },
    getHoemInfo() {
      axios.get("/data/my/my.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data.data;
      this.fans = res.fans;
    },
    userUndefined(e) {
      //用户未登录不能提现
      this.popupContentAll = {
        ifnone: true,
        content: "您未登录暂时不可以提现",
      };
      setTimeout((val) => {
        this.popupContentAll = {
          ifnone: false,
          content: "",
        };
      }, 3000);
    },
    logoUndefined(e) {
      //未登录
      this.logoState = e;
    },
    idTrue(e) {
      //查看是否实名实名认证
      this.$refs.idCard.identityCardNone = e;
    },
  },
  activated() {
    let arr = JSON.parse(localStorage.getItem("user"));
    if (arr == undefined || arr == null || arr == "") {
      arr = [];
      this.userContent = {};
      this.userShow = false;
      this.remainingSumuUnit = 0;
      this.fans = [
        {
          title: "我的好友",
          num: 0,
        },
        {
          title: "我的粉丝",
          num: 0,
        },
        {
          title: "我的会员",
          num: 0,
        },
        {
          title: "新增用户",
          num: 0,
        },
      ];
    } else {
      this.userContent = arr[arr.length - 1];
      this.userShow = true;
      //时间
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      //今日预估奖励
      let awardArr = arr[arr.length - 1].award;
      if (awardArr.Today.today == `${year}${month}${date}`) {
        this.award[0].money = awardArr.Today.num;
      } else {
        //不是今日清空
        awardArr.Today.today = `${year}${month}${date}`;
        this.award[0].money = 0;
        awardArr.Today.num = 0;
      }
      //本月
      if (awardArr.ThisMonth.month == `${year}${month}`) {
        this.award[1].money = awardArr.ThisMonth.num;
      } else {
        //不是本月清空
        awardArr.ThisMonth.month = `${year}${month}`;
        this.award[1].money = 0;
        awardArr.ThisMonth.num = 0;
      }
      this.remainingSumuUnit = arr[arr.length - 1].money;
      //累计
      this.award[2].money = awardArr.num;
      arr[arr.length - 1].award = awardArr;
      localStorage.setItem("user", JSON.stringify(arr));
      this.getHoemInfo();
    }
  },
};
</script>
<style lang="scss" scoped></style>
