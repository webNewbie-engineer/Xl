<template>
  <div class="registerBtn" v-show="judge.register">
    <div class="registerBtn-Box">
      <div class="registerBtn-Box-Btn WX" @click="register">
        <div class="iconfont">&#xe61a;</div>
        <div class="contentFont">一键注册</div>
      </div>
      <div class="registerBtn-Box-Btn cellphone" @click="handClickregister">
        <div class="iconfont">&#xe615;</div>
        <div class="contentFont">手机号注册</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "registerBtn",
  props: {
    judge: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handClickregister() {
      this.judge.uesr = true;
    },
    register() {
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == null || arr == "") {
        arr = [];
      }
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
      }
      getyqm(7);
      const info = {};
      //id
      info.id = arr.length + 1 < 10 ? "0" + (arr.length + 1) : arr.length + 1;
      //手机号
      info.uesr = "13021348099";
      //密码
      info.password = "123456";
      info.member = "";
      info.tutor = "";
      info.color = "";
      info.invitationCode = res;
      //钱
      info.money = 50;
      let userName = [...info.uesr];
      for (let i = 0; i < userName.length; i++) {
        if (2 < i && i < 9) {
          userName[i] = "*";
        }
      }
      userName.toString();
      info.name = userName.join("");
      console.log(arr);
      //我的奖励
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      info.award = {
        num: 50,
        Today: {
          today: `${year}${month}${date}`,
          num: 50,
        },
        ThisMonth: {
          month: `${year}${month}`,
          num: 50,
        },
      };
      info.record = [];
      arr.push(info);
      localStorage.setItem("user", JSON.stringify(arr));
      //跳转到我的
      this.$router.replace("/my");
    },
  },
};
</script>
<style lang="scss" scoped>
.registerBtn {
  position: fixed;
  top: 7.38rem;
  left: 0;
  width: 100%;
  &-Box {
    &-Btn {
      display: flex;
      justify-content: center;
      align-items: center;
      @include WH(4.34rem, 0.96rem, 0, 0 auto 0.31rem);
      border-radius: 0.48rem;
    }
    .WX {
      background: #24af41;
      .iconfont {
        @include fzc(0.54rem, #fff);
      }
      .contentFont {
        @include fzc(0.36rem, #fff);
        margin-left: 0.17rem;
      }
    }
    .cellphone {
      border: 0.01rem solid #d3d3d3;
      background: #fff;
      .iconfont {
        @include fzc(0.4rem, #999);
      }
      .contentFont {
        @include fzc(0.36rem, #666);
        margin-left: 0.12rem;
      }
    }
  }
}
</style>
