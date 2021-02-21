<template>
  <div class="input" v-show="judge.password">
    <div class="input-Box">
      <h4 class="title">设置密码</h4>
      <input
        type="password"
        class="password"
        placeholder="请设置6~9位字母数字"
        ref="passwordnum"
        v-model="password"
      />
      <input
        type="password"
        class="CAPTCHA"
        v-model="passwordif"
        ref="passwordifnum"
        placeholder="请再次输入密码"
      />
      <div class="btn" @click="handClickBtn">确定</div>
    </div>
    <span class="iconfont input-CuttingLine" @click="handClickCuttingLine"
      >&#xe6a4;</span
    >
  </div>
</template>
<script>
export default {
  name: "password",
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
      password: "",
      passwordif: "",
      myreg: /^[A-Za-z0-9]{6,20}$/,
    };
  },
  methods: {
    handClickBtn() {
      if (!this.myreg.test(this.password)) {
        this.$emit("popupObj", {
          ifnone: true,
          content: "密码格式错误",
        });
        setTimeout((val) => {
          this.$emit("popupObj", {
            ifnone: false,
            content: "",
          });
        }, 3000);
        return;
      }
      if (this.password != this.passwordif) {
        this.$emit("popupObj", {
          ifnone: true,
          content: "密码不一样",
        });
        setTimeout((val) => {
          this.$emit("popupObj", {
            ifnone: false,
            content: "",
          });
        }, 3000);
        return;
      } else {
        this.judge.inputpassword = this.passwordif;
        this.password = "";
        this.passwordif = "";
        this.judge.password = false;
        this.judge.register = false;
        this.judge.login = true;
      }
    },
    handClickCuttingLine() {
      this.password = "";
      this.passwordif = "";
      this.judge.password = false;
    },
  },
  watch: {
    password: function (val) {
      this.password = val.replace(/[^A-Za-z0-9]/g, "");
    },
    passwordif: function (val) {
      this.passwordif = val.replace(/[^A-Za-z0-9]/g, "");
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