<template>
  <div class="tutor">
    <Headline :backgroundC="backgroundC" :skip="skip"></Headline>
    <div class="tutor-box">
      <p class="tutor-box-name">{{ name }}</p>
      <p class="tutor-box-telephoneNumber">{{ `手机号:${" "}${phoneNumber}` }}</p>
      <div class="tutor-box-btn">复制手机号</div>
      <img src="../../assets/static/img/my/remind.png" alt="" class="tutor-box-img" />
      <img
        :src="require(`../../assets/static/img/my/${imgs}`)"
        alt=""
        class="tutor-box-headPortrait"
      />
      <p class="iconfont">&#xe60c;</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "tutor",
  data() {
    return {
      backgroundC: "#f5f5f5",
      skip: "/my",
      imgs: "headPortrait.jpg",
      name: "",
      phoneNumber: "",
    };
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
  },
  activated() {
    //获取用户信息
    let arr = JSON.parse(localStorage.getItem("user"));
    //导师信息
    this.name = arr[arr.length - 1].tutorName;
    this.imgs = arr[arr.length - 1].tutorImg;
    this.phoneNumber = arr[arr.length - 1].tutor;
  },
};
</script>
<style lang="scss" scoped>
.tutor {
  @include WH(100%, 100vh);
  background: #f5f5f5;
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 7.02rem;
    border-radius: 0.16rem;
    transform: translate(-50%, -50%);
    background: #fff;
    &-name {
      @include fzchFa(0.32rem, #333, 1);
      padding-top: 0.86rem;
    }
    &-telephoneNumber {
      @include fzchFa(0.32rem, #ff5d20, 1);
      margin-top: 0.3rem;
    }
    &-btn {
      @include WH(6.2rem, 0.88rem, 0, 0.66rem auto 0.34rem);
      @include fzchFa(0.32rem, #fff, 0.88rem);
      border-radius: 0.44rem;
      background: #ff5d20;
    }
    &-img {
      width: 100%;
    }
    &-headPortrait {
      @include ptl(0, 50%);
      @include WH(1.32rem, 1.32rem);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    .iconfont {
      @include ptr(1.5rem, 0.96rem);
      @include fzc(0.38rem, #ff5d20);
      transform: rotate(240deg);
    }
  }
}
</style>
