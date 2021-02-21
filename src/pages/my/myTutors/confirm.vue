<template>
  <div class="confirm" v-show="confirmContent.name != undefined">
    <div class="confirm-box">
      <p class="iconfont" @click="handClickBtn">&#xe6a4;</p>
      <div class="confirm-box-headPortrait">
        <img
          :src="require(`../../../assets/static/img/my/${confirmContent.img}`)"
          alt=""
          class="confirm-box-headPortrait-img"
        />
      </div>
      <h6 class="confirm-box-title">
        {{ confirmContent.name }}
        <div>{{ confirmContent.identity }}</div>
      </h6>
      <p class="confirm-box-hint">确定选择后，可获取导师信息,</p>
      <p class="confirm-box-hint">导师将一对一指导如何使收益快速增长</p>
      <h6 class="confirm-box-annotation">注:&nbsp;选择后不可更换</h6>
      <div class="confirm-box-btn" @click="handClickConfirm">确定选择</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "confirm",
  props: {
    confirmContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handClickBtn() {
      //关闭
      this.$emit("btnList", { img: "headPortrait2.jpg" });
    },
    handClickConfirm() {
      //获取用户信息
      let arr = JSON.parse(localStorage.getItem("user"));
      //存入导师电话号码name
      arr[arr.length - 1].tutor = this.confirmContent.phoneNumber;
      arr[arr.length - 1].tutorName = this.confirmContent.name;
      arr[arr.length - 1].tutorImg = this.confirmContent.img;
      localStorage.setItem("user", JSON.stringify(arr));
      this.$emit("succeedBtn", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.confirm {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000000000;
  background: rgba(0, 0, 0, 0.4);
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 6rem;
    border-radius: 0.16rem;
    transform: translate(-50%, -50%);
    animation: showBox 0.5s;
    background: #ffffff;
    .iconfont {
      @include fzc(0.32rem, #c1c1c1);
      text-indent: 5.38rem;
      padding-top: 0.25rem;
    }
    &-headPortrait {
      @include WH(0.88rem, 0.88rem, 0, 0 auto);
      &-img {
        @include WH(0.88rem, 0.88rem);
        border-radius: 50%;
      }
    }
    &-title {
      display: flex;
      width: 100%;
      justify-content: center;
      @include fzchFa(0.32rem, #333, 0.32rem);
      margin: 0.33rem 0 0.38rem 0;
      div {
        @include WH(0.85rem, 0.32rem, 0, 0 0 0 0.11rem);
        @include fzchFa(0.24rem, #ff5d20, 1.2);
        border: 0.01rem solid #ff5d20;
        border-radius: 0.06rem;
      }
    }
    &-hint {
      @include fzchFa(0.24rem, #666, 1);
      margin-bottom: 0.15rem;
    }
    &-annotation {
      @include fzchFa(0.28rem, #ff5d20, 1);
      margin-top: 0.18rem;
    }
    &-btn {
      @include WH(3.64rem, 0.8rem, 0, 0.87rem auto 0.47rem);
      @include fzchFa(0.32rem, #fff, 0.8rem);
      border-radius: 0.4rem;
      background: #ff5d20;
    }
  }
}
@keyframes showBox {
  from {
    transform: translate(-50%, -50%) scale(0.1, 0.1);
  }
  to {
    transform: translate(-50%, -50%) scale(1, 1);
  }
}
</style>
