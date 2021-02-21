<template>
  <div class="user" v-show="userShow != false">
    <img src="~@/assets/static/img/my/user.png" alt="" class="user-img" />
    <p class="user-name">{{ userContent.name }}</p>
    <div
      class="user-btnvip"
      v-show="userContent.member == false"
      @click="handClickMember"
    >
      <keep-alive>
        <router-link to="/member">升级会员</router-link>
      </keep-alive>
    </div>
    <div class="user-invitationCode">
      <span class="user-invitationCode-title">邀请码&nbsp;:</span>
      <span class="user-invitationCode-code">{{ userContent.invitationCode }}</span>
      <span class="user-invitationCode-copy" @click="handClickCopy">复制</span>
    </div>
    <div class="user-tutor" @click="handClickRouter">
      <span class="iconfont">&#xe609;</span>
      <span class="user-tutor-text" ref="text">{{
        userContent.tutor == "" ? "选择导师" : "我的导师"
      }}</span>
    </div>
    <p
      class="user-member"
      v-show="userContent.member != false"
      :style="{
        color: userContent.color == '' ? '#fff' : userContent.color,
      }"
    >
      {{ userContent.member }}
    </p>
  </div>
</template>
<script>
export default {
  name: "user",
  props: {
    userContent: {
      type: Object,
      default() {
        return {};
      },
    },
    userShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      copyData: "",
    };
  },
  methods: {
    handClickCopy() {
      //复制
      this.copyData = this.userContent.invitationCode;
      this.copy(this.copyData);
    },
    copy(data) {
      let url = data;
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.remove();
    },
    handClickMember() {
      //升级会员
      // this.$emit("userMember", { name: "会员", color: "#D5BA88" });
    },
    handClickRouter() {
      //升级会员
      if (this.$refs.text.innerHTML == "选择导师") {
        this.$router.replace("/myTutor");
      } else {
        this.$router.replace("/tutor");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  position: relative;
  @include WH(100%, 1.95rem, 0.2rem 0 0 0, 0 0 -0.02rem 0);
  overflow: hidden;
  background: #333;
  &-img {
    @include ptl(0, 0.27rem);
    @include WH(1.12rem, 1.12rem);
  }
  &-name {
    @include ptl(0.04rem, 1.64rem);
    @include fzc(0.36rem, #fff);
  }
  &-btnvip {
    @include ptl(0.64rem, 1.61rem);
    @include WH(1.71rem, 0.48rem);
    @include fzchFa(0.28rem, #fff, 0.48rem);
    a {
      color: #fff;
    }
    border-radius: 0.24rem;
    background: linear-gradient(-14deg, #c49c60 0%, #dbc498 100%);
  }
  &-invitationCode {
    @include ptl(1.28rem, 1.6rem);
    @include WH(3.4rem, 0.48rem);
    border-radius: 0.24rem;
    background: rgba(0, 0, 0, 0.25);
    &-title {
      @include fzch(0.24rem, #fff, 0.48rem);
      margin-left: 0.24rem;
    }
    &-code {
      @include fzch(0.24rem, #d6b08a, 0.48rem);
      margin-left: 0.15rem;
    }
    &-copy {
      @include fzch(0.24rem, #fff, 0.48rem);
      margin-left: 0.25rem;
    }
  }
  &-tutor {
    @include ptr(0.52rem, -0.3rem);
    @include WH(2.12rem, 0.62rem);
    border: 0.01rem solid #d6b08a;
    border-radius: 0.31rem;
    .iconfont {
      @include fzch(0.31rem, #c69e63, 0.62rem);
      margin-left: 0.25rem;
    }
    &-text {
      @include fzch(0.26rem, #d6b08a, 0.62rem);
      margin-left: 0.1rem;
    }
  }
  &-member {
    @include ptl(0.08rem, 3.9rem);
    font-size: 0.2rem;
  }
}
</style>
