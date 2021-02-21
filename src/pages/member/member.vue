<template>
  <div class="member">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <div class="member-box">
      <img src="~@/assets/static/img/member/member.png" alt="" class="member-box-img" />
    </div>
    <memberList></memberList>
    <btn @paymentBlock="paymentBlock"></btn>
    <payment
      :paymentConten="paymentConten"
      @paymentBlock="paymentBlock"
      @paymentOpen="paymentOpen"
    ></payment>
    <open :openContent="openContent" @succeedBolck="succeedBolck"></open>
    <succeed :succeedContent="succeedContent" @succeedBolck="succeedBolck"></succeed>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import memberList from "./components/memberList";
import btn from "./components/btn";
import payment from "./components/payment";
import open from "./components/open";
import succeed from "./components/succeed";
export default {
  name: "memberYM",
  data() {
    return {
      HeadlineConten: "升级会员",
      paymentConten: false,
      openContent: false,
      succeedContent: false,
    };
  },
  components: {
    Headline,
    memberList,
    btn,
    payment,
    open,
    succeed,
  },
  methods: {
    paymentBlock(e) {
      //付款界面
      this.paymentConten = e;
    },
    paymentOpen(e) {
      //付款成功
      this.paymentConten = e.payment;
      this.openContent = e.open;
    },
    succeedBolck(e) {
      //获得积分
      this.openContent = e.open;
      this.succeedContent = e.succeed;
    },
  },
  activated() {
    this.paymentConten = false;
    this.openContent = false;
    this.succeedContent = false;
  },
};
</script>
<style lang="scss" scoped>
.member {
  @include WH(100%, 100vh);
  background: #fff2ef;
  &-box {
    padding-top: 0.11rem;
    background: #fff;
    &-img {
      width: 100%;
      margin: 0 0 -0.02rem 0;
    }
  }
}
</style>
