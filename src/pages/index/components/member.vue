<template>
  <div class="member" v-show="memberTrue">
    <div class="member_Box">
      <h4 class="title">开通会员</h4>
      <p class="content">邀请开店最高可得￥110</p>
      <div class="BtnBox">
        <div @click="toMember" class="btn">立即开通</div>
      </div>
    </div>
    <div class="member_quit" @click="handClickQuit">X</div>
  </div>
</template>
<script>
export default {
  name: "member",
  data() {
    return {
      memberTrue: true,
    };
  },
  methods: {
    handClickQuit() {
      this.memberTrue = !this.memberTrue;
    },
    toMember() {
      this.memberTrue = !this.memberTrue;
      this.$router.replace("/member");

    },
  },
  mounted() {
    //用户
    let user = JSON.parse(localStorage.getItem("user"));
    //有没有登录
    if (user == undefined || user == null) {
      return (this.memberTrue = false);
    }
    if (user[user.length - 1].member == "") {
      return (this.memberTrue = true);
    }
    this.memberTrue = false;
  },
};
</script>
<style lang="scss" scoped>
.member {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000000000000000000000000000000000000000000;
  background: rgba(0, 0, 0, 0.55);
  &_Box {
    position: fixed;
    top: 3.88rem;
    left: 1.07rem;
    @include WH(5.3rem, 3.49rem);
    border-radius: 0.2rem;
    animation: showBox 0.5s;
    background: -webkit-linear-gradient(top, #f0d2b8, #f4dec6, #ebd2bb);
    .title {
      font-size: 0.56rem;
      text-align: center;
      color: #c97d3b;
      line-height: 1.2rem;
    }
    .content {
      @include fzc(0.36rem, #875940);
      text-align: center;
      font-weight: bold;
      margin-top: 0.25rem;
    }
    .BtnBox {
      @include WH(5.3rem, 1.2rem);
      margin-top: 0.48rem;
      padding-top: 0.18rem;
      border-bottom-right-radius: 0.2rem;
      border-bottom-left-radius: 0.2rem;
      background: #404248;
    }
    .btn {
      @include WH(3.7rem, 0.85rem, 0, 0 auto);
      @include fzchFa(0.36rem, #78482f, 0.85rem);
      border-radius: 0.25rem;
      background: -webkit-linear-gradient(left, #f0d2b8, #f4dec6, #ebd2bb);
    }
  }
  &_quit {
    position: fixed;
    top: 7.94rem;
    left: 3.34rem;
    @include WH(0.8rem, 0.8rem);
    border: 0.01rem solid #fff;
    border-radius: 50%;
    @include fzchFa(0.35rem, #fff, 0.8rem);
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
