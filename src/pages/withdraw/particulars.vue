<template>
  <div class="Particulars">
    <Headline :HeadlineConten="HeadlineConten" :skip="skip"></Headline>
    <p class="Particulars-manner">{{ num }}￥</p>
    <p class="Particulars-title">提现成功</p>
    <ul class="Particulars-box">
      <li class="Particulars-box-item" v-for="(item, index) of list" :key="index">
        <p class="Particulars-box-item-title">{{ item.title }}</p>
        <p class="Particulars-box-item-content">{{ item.item }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "withdrawParticulars",
  data() {
    return {
      HeadlineConten: "",
      num: 0,
      list: [
        {
          title: "当前状态",               
          item: "提现成功",
        },
        {
          title: "提现金额",
          item: "",
        },
        {
          title: "提现时间",
          item: "",
        },
        {
          title: "到账时间",
          item: "",
        },
        {
          title: "提现账户",
          item: "",
        },
        {
          title: "提现单号",
          item: "",
        },
      ],
       skip: "/withdrawrecord",
    };
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
  },
  activated() {
    //获取用户信息
    let arr = JSON.parse(localStorage.getItem("user"));
    let user = arr[arr.length - 1].record[this.$route.query.list];
    //提现时间
    this.list[2].item = user.date;
    //到账时间
    this.list[3].item = user.account;
    //提现账户
    this.list[4].item = `微信零钱(${arr[arr.length - 1].name})`;
    //提现单号
    this.list[5].item = user.oddNumbers;
    //用户提现金额
    this.num = user.manner;
    this.list[1].item = `${this.num}￥`;
  },
};
</script>
<style lang="scss" scoped>
.Particulars {
  width: 100%;
  background: #fff;
  &-manner {
    @include fzchFa(0.56rem, #333, 1);
    margin-top: 1.15rem;
  }
  &-title {
    @include fzchFa(0.28rem, #999, 1);
    margin-top: 0.4rem;
  }
  &-box {
    width: 100%;
    margin-top: 1.48rem;
    &-item {
      display: flex;
      margin-bottom: 0.68rem;
      &-title {
        @include fzc(0.28rem, #999);
        text-indent: 0.68rem;
      }
      &-content {
        @include fzc(0.28rem, #333);
        margin-left: 0.42rem;
      }
    }
  }
}
</style>
