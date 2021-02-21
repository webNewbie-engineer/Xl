<template>
  <div class="withdraw">
    <Headlinetwo :skip="skip"></Headlinetwo>
    <money :moneNum="moneNum" @revenueIF="revenueIF"></money>
    <manner></manner>
    <mannerInput
      :moneNum="moneNum"
      @allImmediately="allImmediately"
      ref="num"
    ></mannerInput>
    <immediately @immediatelyverdict="immediatelyverdict"></immediately>
    <revenue :revenueBolck="revenueBolck" @revenueIF="revenueIF"></revenue>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import popup from "@/common/index/popup";
export default {
  name: "withdraw",
  data() {
    return {
      moneNum: 0,
      revenueBolck: false,
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      skip: "/my",
    };
  },
  components: {
    Headlinetwo: () => import("@/common/index/Headlinetwo"),
    money: () => import("./components/money"),
    manner: () => import("./components/manner"),
    mannerInput: () => import("./components/mannerInput"),
    immediately: () => import("./components/immediately"),
    revenue: () => import("./components/revenue"),
    popup,
  },
  methods: {
    revenueIF(e) {
      //查看个人所得税
      this.revenueBolck = e;
    },
    immediatelyverdict(e) {
      //判断提现金额是否大于用户金额
      if (
        this.$refs.num.manner <= this.moneNum &&
        this.$refs.num.manner != undefined &&
        this.$refs.num.manner != "" &&
        this.$refs.num.manner != 0
      ) {
        //获取用户信息
        let arr = JSON.parse(localStorage.getItem("user"));
        //获取用户的钱,进行- 提现金额
        this.moneNum = this.moneNum - this.$refs.num.manner;
        arr[arr.length - 1].immediately = this.$refs.num.manner;
        arr[arr.length - 1].money = this.moneNum;
        let info = {};
        //时间
        var myDate = new Date();
        let year = myDate.getFullYear(); //获取当前年份(2位)
        let month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
        let date = myDate.getDate(); //获取当前日期
        let hours = myDate.getHours(); //获取当前小时数(0-23)
        let minutes = myDate.getMinutes(); //获取当前分钟数(0-59)
        date = 9 < date ? date : `0${date}`;
        month = 9 < month ? month : `0${month}`;
        hours = 9 < hours ? hours : `0${hours}`;
        let dataminutes = 9 < minutes ? minutes : `0${minutes}`;
        //提现时间
        info.date = `${year}-${month}-${date}${" "}${hours}:${dataminutes}`;
        //到账时间
        info.account = `${year}-${month}-${date}${" "}${hours}:${dataminutes}`;
        //提现单号
        info.oddNumbers = `${year}${month}${date}${hours}${dataminutes}` + this.getyqm(7);
        //收益提现到
        info.title = "收益提现 - 到微信零钱";
        //状态
        info.manner = this.$refs.num.manner;
        //提现成功存入本地存储
        info.state = "提现成功";
        arr[arr.length - 1].record.push(info);
        //提现金额 = 0
        this.$refs.num.manner = "";
        localStorage.setItem("user", JSON.stringify(arr));
        //跳转到提现成功
        this.$router.replace("/withdrawsucceed");
      } else {
        this.popupContentAll.ifnone = true;
        this.popupContentAll.content = "输入的金额大于您的金额,或者你没输入,或者为0";
        setTimeout((val) => {
          this.popupContentAll.ifnone = false;
        }, 3000);
      }
    },
    getyqm(n) {
      //提现单号
      let res = "";
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
      for (var i = 0; i < n; i++) {
        let id = Math.ceil(Math.random() * 35);
        res += jschars[id];
      }
      return res;
    },
    allImmediately(e) {
      this.popupContentAll = e;
      setTimeout((val) => {
        this.popupContentAll.ifnone = false;
      }, 3000);
    },
  },
  activated() {
    //获取用户信息
    let arr = JSON.parse(localStorage.getItem("user"));
    //获取用户的钱,进行传值给money组件
    this.moneNum = arr[arr.length - 1].money;
  },
};
</script>
<style lang="scss" scoped>
.withdraw {
  width: 100%;
}
</style>
