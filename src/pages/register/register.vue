<template>
  <div class="all">
    <Headline></Headline>
    <logo></logo>
    <registerBtn :judge="judge"></registerBtn>
    <registerInput
      :judge="judge"
      :popupContentAll="popupContentAll"
      @popupObj="popupFn"
    ></registerInput>
    <password :judge="judge" @popupObj="popupFn"></password>
    <land :judge="judge" @popupObj="popupFn"></land>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import Headline from "./components/Headline";
import logo from "./components/logo";
import registerBtn from "./components/registerBtn";
import registerInput from "./components/registerInput";
import password from "./components/password";
import land from "./components/land";
import popup from "@/common/index/popup";
export default {
  name: "register",
  components: {
    Headline,
    logo,
    registerBtn,
    registerInput,
    password,
    land,
    popup,
  },
  data() {
    return {
      judge: {
        register: true,
        uesr: false,
        password: false,
        login: false,
        inputuesr: "",
        inputpassword: "",
      },
      popupContentAll: {
        ifnone: false,
        content: "",
      },
    };
  },
  methods: {
    popupFn(e) {
      //弹出层
      this.popupContentAll = e;
      console.log(this.popupContentAll);
    },
  },
  activated() {
    this.judge = {
      register: true,
      uesr: false,
      password: false,
      login: false,
      inputuesr: "",
      inputpassword: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.all {
  @include WH(100%, 100vh);
}
</style>
