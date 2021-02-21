<template>
  <div class="buy" v-show="buy">
    <div class="buy-box">
      <p class="buy-box-title">{{ introduceContent.particularstitle }}</p>
      <span class="buy-box-cancel iconfont" @click="clickCancel">&#xe6a4;</span>
      <img
        src="../../../assets/static/img/shareParticulars/ticketIcon.png"
        alt=""
        class="buy-box-logo"
      />
      <div class="buy-box-price">
        <p class="logo">￥</p>
        {{ introduceContent.rulingPrice }}
        <div class="num">{{ introduceContent.matter }}</div>
      </div>
      <p class="buy-box-award">支付后奖励￥{{ introduceContent.introducenum }}</p>
      <div class="buy-box-payment" @click="clickPay">微信支付</div>
    </div>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import popup from "@/common/index/popup";
export default {
  name: "buy",
  props: {
    introduceContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      buy: false,
      popupContentAll: {
        ifnone: false,
        content: "",
      },
    };
  },
  components: {
    popup,
  },
  methods: {
    clickCancel() {
      this.buy = false;
    },
    clickPay() {
      //分享列表
      let arr = JSON.parse(localStorage.getItem("share"));
      //user信息
      let user = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined) {
        arr = [];
      }
      if (user == undefined) {
        this.$emit("logoUndefined", true);
        return;
      }
      //添加存入列表数据
      const info = {};
      //生成邀请码
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
      var myDate = new Date();
      let year = myDate.getFullYear(); //获取当前年份(2位)
      let month = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      let date = myDate.getDate(); //获取当前日期
      let hours = myDate.getHours(); //获取当前小时数(0-23)
      let minutes = myDate.getMinutes(); //获取当前分钟数(0-59)
      //今日预估奖励
      let awardArr = user[user.length - 1].award;
      if (awardArr.Today.today == `${year}${month}${date}`) {
        awardArr.Today.num =
          parseFloat(awardArr.Today.num) + parseFloat(this.introduceContent.introducenum);
      } else {
        //不是今日清空
        awardArr.Today.today = `${year}${month}${date}`;
        awardArr.Today.num = parseFloat(this.introduceContent.introducenum);
      }
      //本月
      if (awardArr.ThisMonth.month == `${year}${month}`) {
        awardArr.ThisMonth.num =
          parseFloat(awardArr.ThisMonth.num) +
          parseFloat(this.introduceContent.introducenum);
      } else {
        //不是本月清空
        awardArr.ThisMonth.month = `${year}${month}`;
        awardArr.ThisMonth.num = parseFloat(this.introduceContent.introducenum);
      }
      awardArr.num =
        parseFloat(awardArr.num) + parseFloat(this.introduceContent.introducenum);
      //增加的钱,存入用户
      //累计
      user[user.length - 1].award = awardArr;
      user[user.length - 1].money =
        parseFloat(user[user.length - 1].money) +
        parseFloat(this.introduceContent.introducenum);
      //传入本地储存
      localStorage.setItem("user", JSON.stringify(user));
      month += 1;
      date = 9 < date ? date : `0${date}`;
      month = 9 < month + 1 ? month : `0${month}`;
      hours = 9 < hours ? hours : `0${hours}`;
      let dataminutes = 9 < minutes ? minutes : `0${minutes}`;
      //提现时间
      info.date = `${year}-${month}-${date}${" "}${hours}:${dataminutes}`;
      //提现单号
      info.oddNumbers = `${year}${month}${date}${hours}${dataminutes}` + getyqm(7);
      //获取用户信息
      info.name = user[user.length - 1].name;
      //img信息
      info.img = this.introduceContent.img;
      //金额
      info.money = this.introduceContent.rulingPrice;
      //收益
      info.introducenum = this.introduceContent.introducenum;
      //比例
      info.proportion = this.introduceContent.proportion;
      //店铺名字
      info.particularstitle = this.introduceContent.particularstitle;
      //存入数组
      arr.push(info);
      this.popupContentAll = {
        ifnone: true,
        content: "已购买",
      };
      setTimeout((val) => {
        this.popupContentAll = {
          ifnone: false,
          content: "",
        };
        //奖励list
        let list = JSON.parse(localStorage.getItem("award"));
        if (list == undefined || list == null) {
          list = [];
        }
        const listObj = {};
        listObj.name = `【分享】-${info.particularstitle}`;
        listObj.money = parseFloat(this.introduceContent.introducenum);
        listObj.date = `${month}-${date}${" "}${hours}:${dataminutes}`;
        list.push(listObj);
        //传入本地储存
        localStorage.setItem("award", JSON.stringify(list));
        //传入本地储存
        localStorage.setItem("share", JSON.stringify(arr));
        //跳转到支付成功
        this.$router.push({
          name: "sharePaySuccess",
          query: {
            introducenum: this.introduceContent.introducenum,
            userId: this.$route.query.userId,
          },
        });
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
.buy {
  @include CoverLayer;
  &-box {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 200;
    padding: 0.71rem 0 0.24rem 0;
    background: #fff;
    &-title {
      @include fzchFa(0.32rem, #333, 1);
      font-weight: 900;
    }
    &-cancel {
      @include ptr(0.24rem, 0.22rem);
      @include fzc(0.4rem, #c8c8c8);
    }
    &-logo {
      @include ptl(0.67rem, 1.47rem);
      @include WH(0.4rem, 0.4rem);
      border-radius: 0.04rem;
    }
    &-price {
      display: flex;
      justify-content: center;
      @include fzchFa(0.64rem, #ff5d20, 1);
      margin-top: 0.43rem;
      .logo {
        @include fzc(0.32rem, #ff5d20);
        margin-top: 0.27rem;
      }
      .num {
        @include fzch(0.24rem, #fff, 0.38rem);
        height: 0.38rem;
        border-radius: 0.04rem;
        padding: 0 0.12rem;
        margin: 0.2rem 0 0 0.11rem;
        background: #ff5d20;
      }
    }
    &-award {
      @include fzchFa(0.28rem, #ff5d20, 1);
      font-weight: 510;
      margin: 0.3rem 0 0 0;
    }
    &-payment {
      @include WH(7.02rem, 0.96rem, 0, 0.63rem auto 0);
      @include fzchFa(0.36rem, #fff, 0.96rem);
      border-radius: 0.08rem;
      background: #ff5d20;
    }
  }
}
</style>
