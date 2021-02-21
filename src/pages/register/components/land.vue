<template>
  <div class="land" v-show="judge.login">
    <input
      type="text"
      class="land-invitationCode"
      v-model="invitationCode"
      ref="landInvitationCode"
      placeholder="请输入邀请码，享受更多收益"
    />
    <div class="land-btn" @click="btn">确定</div>
    <span class="land-skip" @click="skip">跳过，直接注册</span>
  </div>
</template>
<script>
export default {
  name: "land",
  props: {
    judge: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      invitationCode: "",
    };
  },
  methods: {
    skip() {
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
      info.uesr = this.judge.inputuesr;
      //密码
      info.password = this.judge.inputpassword;
      info.member = "";
      info.tutor = "";
      info.color = "";
      info.invitationCode = res;
      //钱
      info.money = 50;
      let userName = [...this.judge.inputuesr];
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
    btn() {
      this.invitationCode = "";
      this.$emit("popupObj", {
        ifnone: true,
        content: "邀请码错误",
      });
      setTimeout((val) => {
        this.$emit("popupObj", {
          ifnone: false,
          content: "",
        });
      }, 3000);
    },
  },
  watch: {
    invitationCode: function (val) {
      this.invitationCode = val.replace(/[^A-Za-z0-9]/g, "");
    },
  },
};
</script>
<style lang="scss" scoped>
.land {
  position: fixed;
  top: 5.14rem;
  left: 0;
  width: 100%;
  &-invitationCode {
    @include commoninput(6rem, 0.96rem, center, 0.08rem);
    @include fzc(0.32rem, #333);
    background: #ffffff;
    border: 0.01rem solid #c1c1c1;
    border-radius: 0.08rem;
    margin-left: 0.74rem;
  }
  &-btn {
    @include WH(6rem, 0.88rem, 0, 0.67rem auto 0);
    @include fzchFa(0.32rem, #fff, 0.88rem);
    border-radius: 0.08rem;
    background: #ff5d20;
  }
  &-skip {
    width: 100%;
    @include fzc(0.28rem, #ff5d20);
    text-align: center;
    margin-top: 0.47rem;
  }
}
</style>
