<template>
  <div class="succeed">
    <Headline :HeadlineConten="HeadlineConten" :skip="skip"></Headline>
    <div class="succeed-img"></div>
    <h6 class="succeed-title">恭喜账号提现申请成功!</h6>
    <p class="succeed-hint">预计在1~3小时内审批到账</p>
    <ul class="succeed-box" v-for="(item, index) of list" :key="index">
      <li class="succeed-box-item">
        <p class="succeed-box-item-title">{{ item.title }}</p>
        <p class="succeed-box-item-content">{{ item.content }}</p>
      </li>
    </ul>
    <div class="succeed-btn" @click="handClickBtn">完成</div>
  </div>
</template>
<script>
export default {
  name: "withdrawsucceed",
  data() {
    return {
      HeadlineConten: "",
      list: [
        {
          title: "提现金额",
          content: "",
        },
        {
          title: "提现方式",
          content: "微信",
        },
        {
          title: "提现账号",
          content: "",
        },
      ],
      skip: "/withdraw",
    };
  },
  methods: {
    handClickBtn() {
      //跳转到提现详情
      this.$router.replace("/withdraw");
    },
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
  },
  activated() {
    let arr = JSON.parse(localStorage.getItem("user"));
    this.list[2].content = arr[arr.length - 1].name;
    this.list[0].content = arr[arr.length - 1].immediately;
  },
};
</script>
<style lang="scss" scoped>
.succeed {
  width: 100%;
  background: #fff;
  &-img {
    @include WH(1.97rem, 1.97rem, 0, 0.35rem auto 0);
    background-image: url("~@/assets/static/img/withdraw/true.png");
    background-size: cover;
  }
  &-title {
    @include fzchFa(0.32rem, #333, 1);
    margin-top: 0.3rem;
  }
  &-hint {
    @include fzchFa(0.24rem, #999, 1);
    margin-top: 0.23rem;
  }
  &-box {
    width: 100%;
    margin-top: 1.07rem;
    &-item {
      display: flex;
      width: 4.6rem;
      justify-content: space-between;
      margin: 0 auto 0.75rem;
      &-title {
        @include fzch(0.28rem, #666, 0.28rem);
      }
      &-content {
        @include fzch(0.28rem, #333, 0.28rem);
        font-family: Microsoft Yahei;
        font-weight: 700;
      }
    }
  }
  &-btn {
    @include WH(4.58rem, 0.92rem, 0, 0.95rem auto 0);
    @include fzchFa(0.32rem, #ff5d20, 0.92rem);
    border: 0.01rem solid #ff5d20;
    border-radius: 0.46rem;
  }
}
</style>
