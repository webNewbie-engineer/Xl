<template>
  <div class="carnival">
    <img :src="require(`../../assets/static/img/activity/carnival.jpg`)" alt="" />
    <ul class="carnival-purchase">
      <li class="carnival-purchase-store" @click="skipIndex">
        <p class="iconfont">&#xe679;</p>
        <p class="title">首页</p>
      </li>
      <li class="carnival-purchase-share">
        <p class="iconfont">&#xe684;</p>
        <p class="title">分享赚红包</p>
      </li>
      <li class="carnival-purchase-btn" @click="purchase">￥199 立即购买</li>
    </ul>
    <popup :popupContentAll="popupContentAll"></popup>
    <UserLogo :logoState="logoState" @logoUndefined="logoUndefined"></UserLogo>
  </div>
</template>
<script>
import popup from "@/common/index/popup";
import axios from "axios";
export default {
  name: "carnival",
  data() {
    return {
      list: {
        money: "",
        earnings: "21.60",
        proportion: "12%",
      },
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      logoState: false,
    };
  },
  components: {
    popup,
    UserLogo: () => import("@/common/index/UserLogo"),
  },

  methods: {
    logoUndefined(e) {
      //未登录
      this.logoState = e;
    },
    purchase() {
      //判断用户是否登陆
      let user = JSON.parse(localStorage.getItem("user"));
      if (user == undefined) {
        this.logoState = true;
        return;
      }
      //时间
      var myDate = new Date();
      let year = myDate.getFullYear(); //获取当前年份(2位)
      let month = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      let date = myDate.getDate(); //获取当前日期
      let hours = myDate.getHours(); //获取当前小时数(0-23)
      let minutes = myDate.getMinutes(); //获取当前分钟数(0-59)

      //今日预估奖励
      let awardArr = user[user.length - 1].award;

      if (awardArr.Today.today == `${year}${month}${date}`) {
        awardArr.Today.num += 19;
      } else {
        //不是今日清空
        awardArr.Today.today = `${year}${month}${date}`;
        awardArr.Today.num = 19;
      }
      //本月
      if (awardArr.ThisMonth.month == `${year}${month}`) {
        awardArr.ThisMonth.num += 19;
      } else {
        //不是本月清空
        awardArr.ThisMonth.month = `${year}${month}`;
        awardArr.ThisMonth.num = 19;
      }
      awardArr.num += 19;
      //增加的钱,存入用户
      //累计
      user[user.length - 1].award = awardArr;
      user[user.length - 1].money += 19;
      localStorage.setItem("user", JSON.stringify(user));
      //获取礼包列表
      let arr = JSON.parse(localStorage.getItem("carnival"));
      if (arr == undefined || arr == null || arr == "") {
        arr = [];
      }
      //生成邀请码
      const info = {};
      const jschars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      let res = "";
      function getyqm(n) {
        for (var i = 0; i < n; i++) {
          let id = Math.ceil(Math.random() * 35);

          res += jschars[id];
        }
        return res;
      }
      //时间
      month += 1;
      date = 9 < date ? date : `0${date}`;
      month = 9 < month ? month : `0${month}`;
      hours = 9 < hours ? hours : `0${hours}`;
      let dataminutes = 9 < minutes ? minutes : `0${minutes}`;
      //提现时间
      info.date = `${year}-${month}-${date}${" "}${hours}:${dataminutes}`;
      //提现单号
      info.oddNumbers = `${year}${month}${date}${hours}${dataminutes}` + getyqm(7);
      //获取用户信息
      info.name = user[user.length - 1].name;
      info.list = this.list;
      //存入数组
      arr.push(info);
      //传入本地储存
      this.popupContentAll = {
        ifnone: true,
        content: "已购买",
      };
      setTimeout((val) => {
        this.popupContentAll = {
          ifnone: false,
          content: "",
        };
      }, 3000);
      localStorage.setItem("carnival", JSON.stringify(arr));
      //奖励list
      let list = JSON.parse(localStorage.getItem("award"));
      if (list == undefined || list == null) {
        list = [];
      }
      const listObj = {};
      listObj.name = "【销售大礼包】-199元免单大礼包";
      listObj.money = 19;
      //判断是否大于10
      listObj.date = `${month}-${date}${" "}${hours}${dataminutes}`;
      list.push(listObj);
      //传入本地储存
      localStorage.setItem("award", JSON.stringify(list));
    },
    getHoemInfo() {
      axios.get("/data/share/share.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      //选择礼包内容
      let arr = res.data.giftBag;
      for (let val of arr) {
        if (val.id == this.$route.query.list) {
          this.list.money = val.money;
          this.list.earnings = val.earnings;
          this.list.proportion = val.proportion;
          this.list.img = val.img;
        }
      }
    },
    skipIndex() {
      //跳转至index
      this.$router.replace("/index"); //返回index
    },
  },
  mounted() {
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.carnival {
  width: 100%;
  img {
    width: 100%;
  }
  &-purchase {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    @include WH(100%, 1.1rem);
    &-store {
      width: 1.2rem;
      background: #fff;
      .iconfont {
        @include fzchFa(0.36rem, #333, 1);
        margin: 0.19rem 0 0.15rem 0;
      }
      .title {
        @include fzchFa(0.22rem, #333, 1);
      }
    }
    &-share {
      width: 1.9rem;
      background: #555555;
      .iconfont {
        @include fzchFa(0.38rem, #fff, 1);
        margin: 0.17rem 0 0.15rem 0;
      }
      .title {
        @include fzchFa(0.22rem, #fff, 1);
      }
    }
    &-btn {
      flex: 1;
      @include fzchFa(0.36rem, #fff, 1.1rem);
      background: #ff5d20;
    }
  }
}
</style>
