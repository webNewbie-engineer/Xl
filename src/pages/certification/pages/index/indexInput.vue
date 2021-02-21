<template>
  <ul class="indexInput">
    <li class="indexInput-user">
      <input type="text" class="indexInput-user-input" v-model="user" />
      <p class="indexInput-user-title">真实姓名</p>
    </li>
    <li class="indexInput-IDcard">
      <input type="text" placeholder="填写后我们将加密处理" v-model="IDcard" />
      <p class="indexInput-IDcard-title">身份证号码</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "indexInput",
  data() {
    return {
      user: "",
      IDcard: "",
    };
  },
  watch: {
    IDcard: function (val) {
      //只输入英文,数字
      this.IDcard = val.replace(/[^A-Za-z0-9]/g, "");
    },
    user: function (val) {
      //只输入中文，
      this.user = val.replace(/[^\u4E00-\u9FA5]/g, "");
    },
  },
};
</script>
<style lang="scss" scoped>
.indexInput {
  width: 100%;
  padding: 0.24rem 0;
  background: #f5f5f5;
  li {
    position: relative;
    width: 100%;
    background: #fff;
  }
  input {
    @include commoninput(7.26rem, 0.97rem, left, 0);
    @include fzc(0.3rem, #333);
    border: none;
    margin-left: 0.24rem;
  }
  &-user {
    input {
      text-indent: 2.5rem;
      border-bottom: 0.01rem solid #eee;
    }
    &-title {
      @include ptl(0.33rem, 0.37rem);
      @include fzc(0.3rem, #666);
    }
  }
  &-IDcard {
    &-title {
      @include ptl(0.34rem, 0.38rem);
      @include fzc(0.3rem, #666);
    }
    input {
      text-indent: 2.55rem;
    }
  }
}
</style>
