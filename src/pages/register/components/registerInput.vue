<template>
  <div class="input" v-show="judge.uesr">
    <div class="input-Box">
      <div style="position: relative">
        <h4 class="title">手机号注册</h4>
        <input
          type="text"
          class="Mobile"
          placeholder="请输入手机号"
          ref="mobilenum"
          v-model="mobile"
        />
        <input
          type="text"
          class="CAPTCHA"
          v-model="captcha"
          ref="captchanum"
          placeholder="请输入验证码"
        />
        <div
          class="CAPTCHABtn"
          @click="handclickcaptcha"
          v-html="CAPTCHABtnContent"
        ></div>
        <div class="btn" @click="handclickbtn">确定</div>
      </div>
      <span class="iconfont input-CuttingLine" @click="handClickCuttingLine"
        >&#xe6a4;</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "registerInput",
  props: {
    judge: {
      type: Object,
      default() {
        return {};
      },
    },
    popupContentAll: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      mobile: "",
      captcha: "",
      myreg: /^[1][3,4,5,7,8][0-9]{9}$/,
      ifcaptcha: "",
      CAPTCHABtnContent: "获取验证码",
      num: 60,
      ifnum: true,
      information: "",
    };
  },
  methods: {
    handclickcaptcha() {
      if (!this.myreg.test(this.mobile)) {
        this.$emit("popupObj", {
          ifnone: true,
          content: "手机号错误",
        });
        setTimeout((val) => {
          this.$emit("popupObj", {
            ifnone: false,
            content: "",
          });
        }, 3000);
        return;
      }
      if (this.num == 60) {
        this.ifnum = true;
        let a = Math.floor(Math.random() * (10001 - 999));
        this.ifcaptcha = 999 < a ? a : `${a}0`;
        this.information = `您的验证码是${this.ifcaptcha}`;
        this.$emit("popupObj", {
          ifnone: true,
          content: this.information,
        });
        setTimeout((val) => {
          this.$emit("popupObj", {
            ifnone: false,
            content: "",
          });
        }, 3000);
        const realTimeClData = setInterval((val) => {
          if (0 < this.num) {
            if (this.ifnum) {
              this.num--;
              this.CAPTCHABtnContent = `${this.num}秒后重新`;
              return;
            } else {
              clearInterval(realTimeClData);
              this.num = 60;
              this.CAPTCHABtnContent = "获取验证码";
              return;
            }
          } else {
            this.num = 60;
            this.CAPTCHABtnContent = "获取验证码";
            clearInterval(realTimeClData);
          }
        }, 1000);
      }
    },
    handclickbtn() {
      if (this.captcha == this.ifcaptcha && this.captcha != "") {
        this.judge.inputuesr = this.mobile;
        this.mobile = "";
        this.captcha = "";
        this.judge.password = true;
        this.judge.uesr = false;
        this.ifnum = false;
      } else {
        this.$emit("popupObj", {
          ifnone: true,
          content: "验证码错误",
        });
        setTimeout((val) => {
          this.$emit("popupObj", {
            ifnone: false,
            content: "",
          });
        }, 3000);
        return;
      }
    },
    handClickCuttingLine() {
      this.judge.uesr = false;
      this.mobile = "";
      this.captcha = "";
      this.ifnum = false;
    },
  },
  watch: {
    mobile: function (val) {
      if (this.mobile.length <= 93024373044) {
        this.mobile = val.replace(/\D/g, "");
      }
    },
    captcha: function (val) {
      if (this.captcha < 4) {
        this.captcha = val.replace(/\D/g, "");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.55);
  &-Box {
    position: fixed;
    top: 2.69rem;
    left: 0.63rem;
    width: 6.24rem;
    padding-bottom: 0.48rem;
    background: #fff;
    border-radius: 0.16rem;
    animation: showBox 0.5s;
    .title {
      @include fzchFa(0.32rem, #333, 1.18rem);
    }
    input {
      @include commoninput(5.26rem, 0.6rem, left, 0);
      text-indent: 0.24rem;
      @include fzc(0.32rem, #333);
      border: none;
      border-bottom: 0.01rem solid #d6d6d6;
      margin-left: 0.48rem;
    }
    .CAPTCHA {
      margin-top: 0.82rem;
    }
    .CAPTCHABtn {
      @include ptr(2.55rem, 0.57rem);
      @include WH(1.52rem, 0.54rem);
      @include fzchFa(0.24rem, #ff681d, 0.54rem);
      border: 0.01rem solid #ffe0d1;
      border-radius: 0.16rem;
      z-index: 1000;
    }
    .btn {
      @include WH(5.26rem, 0.88rem, 0, 0 auto);
      @include fzchFa(0.32rem, #fff, 0.88rem);
      border-radius: 0.08rem;
      margin-top: 0.81rem;
      background: #ff5d20;
    }
  }
  &-CuttingLine {
    position: fixed;
    top: 2.93rem;
    right: 0.88rem;
    @include fzc(0.3rem, #c1c1c1);
  }
  .information {
    position: fixed;
    top: 40%;
    left: 50%;
    @include WH(5.36rem, 4.68rem, 0, 0 auto);
    z-index: 1000000;
    transform: translate(-50%, -50%);
    background: #ccc;
    p {
      @include fzchFa(0.42rem, #ed2121, 1.5rem);
    }
    .btn {
      @include WH(4.8rem, 0.88rem, 0, 1.65rem auto 0);
      @include fzchFa(0.32rem, #fff, 0.88rem);
      background: #ff5d20;
    }
  }
}
@keyframes showBox {
  from {
    transform: scale(0.1, 0.1);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>