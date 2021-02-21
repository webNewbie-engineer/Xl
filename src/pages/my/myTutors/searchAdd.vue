<template>
  <div class="searchAdd" v-show="searchAddContent.bolck">
    <div class="searchAdd-box">
      <p class="iconfont" @click="handClickBtn">&#xe6a4;</p>
      <img
        :src="require(`../../../assets/static/img/my/${searchAddContent.content.img}`)"
        alt=""
        class="searchAdd-box-headPortrait"
      />
      <h6 class="searchAdd-box-name">{{ searchAddContent.content.name }}</h6>
      <p class="searchAdd-box-phoneNumber">{{ searchAddContent.content.phoneNumber }}</p>
      <div class="searchAdd-box-btn" @click="handClicksucceed">确定添加</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "searchAdd",
  props: {
    searchAddContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handClickBtn() {
      this.$emit("addbtn", {
        block: false,
        content: {
          img: "headPortrait2.jpg",
        },
      });
    },
    handClicksucceed() {
      //获取用户信息
      let arr = JSON.parse(localStorage.getItem("user"));
      //存入导师电话号码name
      arr[arr.length - 1].tutor = this.searchAddContent.content.phoneNumber;
      arr[arr.length - 1].tutorName = this.searchAddContent.content.name;
      arr[arr.length - 1].tutorImg = this.searchAddContent.content.img;
      localStorage.setItem("user", JSON.stringify(arr));
      this.$emit("addbtn", {
        block: false,
        content: {
          img: "headPortrait2.jpg",
        },
      });
      this.$emit("succeedBtn", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.searchAdd {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000000000000;
  background: rgba(0, 0, 0, 0.45);
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 5.64rem;
    transform: translate(-50%, -50%);
    border-radius: 0.16rem;
    animation: showBox 0.5s;
    background: #fff;
    .iconfont {
      @include fzc(0.38rem, #c1c1c1);
      text-indent: 5.1rem;
      padding-top: 0.28rem;
    }
    &-headPortrait {
      @include WH(1.36rem, 1.36rem, 0, 0.32rem 0 0 2.13rem);
      border-radius: 50%;
    }
    &-name {
      @include fzchFa(0.3rem, #333, 1);
      margin-top: 0.37rem;
    }
    &-phoneNumber {
      @include fzchFa(0.3rem, #333, 1);
      margin-top: 0.24rem;
    }
    &-btn {
      @include WH(4.57rem, 0.88rem, 0, 0.96rem auto 0.73rem);
      @include fzchFa(0.32rem, #fff, 0.88rem);
      border-radius: 0.04rem;
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
