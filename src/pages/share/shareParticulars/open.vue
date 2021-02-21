<template>
  <div class="open" v-show="ifopen">
    <ul class="open-box">
      <li class="open-box-member">
        <h2 class="title">开通会员</h2>
        <p class="text">开通会员立省￥14.36</p>
      </li>
      <li class="open-box-select">
        <div class="immediately btn" @click="immediately">立即开通</div>
        <div class="No btn" @click="cancel">暂不开通，原价购买</div>
      </li>
      <li class="open-box-cancel">
        <div class="btn" @click="cancel">X</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "open",
  data() {
    return {
      ifopen: false,
    };
  },
  methods: {
    cancel() {
      this.ifopen = false;
    },
    immediately() {
      //user信息
      let arr = JSON.parse(localStorage.getItem("user"));
      //是不是会员
      if (arr == undefined) {
        //指定跳转注册地址
        this.ifopen = false;
        this.$router.replace("/register");

        return;
      }
      if (arr[arr.length - 1].tutor == "") {
        //指定跳转会员地址
        this.ifopen = false;
        this.$router.replace("/member");
      }
    },
  },
  mounted() {
    //user信息
    let arr = JSON.parse(localStorage.getItem("user"));
    //是不是会员
    if (arr == undefined) {
      this.ifopen = true;
      return;
    }
    if (arr[arr.length - 1].member == "") {
      this.ifopen = true;
    } else {
      this.ifopen = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.open {
  @include CoverLayer;
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 6rem;
    transform: translate(-50%, -50%);
    &-member {
      padding: 0.45rem 0 0.42rem 0;
      background: #f4dcc3;
      .title {
        font-size: 0.56rem;
        text-align: center;
        background-image: -webkit-linear-gradient(left, #9a492f, #c97d3b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .text {
        @include fzchFa(0.36rem, #875940, 1);
        font-weight: 700;
        margin: 0.5rem 0 0 0;
      }
    }
    &-select {
      padding: 0.25rem 0 0.45rem 0;
      background: #38393f;
      .btn {
        @include WH(3.7rem, 0.85rem, 0, 0 auto);
        border-radius: 0.43rem;
      }
      .immediately {
        @include fzchFa(0.36rem, #78482f, 0.85rem);
        background: #f4d8bd;
        margin-bottom: 0.38rem;
      }
      .No {
        @include fzchFa(0.28rem, #f4dcc3, 0.85rem);
        border: 0.01rem solid #f5dabf;
      }
    }
    &-cancel {
      .btn {
        @include WH(0.8rem, 0.8rem, 0, 0.45rem auto 0);
        @include fzchFa(0.32rem, #fff, 0.8rem);
        border: 0.02rem solid #ffffff;
        border-radius: 50%;
      }
    }
  }
}
</style>
