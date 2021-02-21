<template>
  <div class="inputSearch" v-show="inputSearchBlock.block">
    <h4 class="inputSearch-title">添加导师</h4>
    <input
      type="text"
      class="inputSearch-input"
      placeholder="请输入导师手机号码"
      v-model="searchConten"
    />
    <div class="inputSearch-btn" @click="handClickBtn">下一步</div>
    <p class="inputSearch-hint">通过邀请码添加</p>
    <div class="inputSearch-delete" v-show="searchConten != ''" @click="handClickDelete">
      x
    </div>
  </div>
</template>
<script>
export default {
  name: "inputSearch",
  props: {
    inputSearchBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      searchConten: "",
    };
  },
  methods: {
    handClickDelete() {
      //清空input
      this.searchConten = "";
    },
    handClickBtn() {
      //搜索
      for (let val of this.inputSearchBlock.content) {
        if (val.phoneNumber == this.searchConten) {
          this.$emit("addbtn", {
            bolck: true,
            content: val,
          });
        } else {
          this.$emit("addbtn", {
            bolck: false,
            content: val,
          });
        }
      }
    },
  },
  watch: {
    searchConten: function (val) {
      this.searchConten = val.replace(/\D/g, "");
    },
  },
};
</script>
<style lang="scss" scoped>
.inputSearch {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background: #fff;
  &-title {
    @include fzchFa(0.4rem, #333, 1);
    margin-top: 1.93rem;
  }
  &-input {
    @include commoninput(6.25rem, 0.87rem, left, 0.04rem);
    @include fzc(0.3rem, #333);
    text-indent: 0.38rem;
    border: 0.01rem solid #c1c1c1;
    margin: 0.99rem 0 0 0.63rem;
  }
  &-btn {
    @include WH(6.24rem, 0.88rem, 0, 1.67rem auto 0);
    @include fzchFa(0.32rem, #fff, 0.88rem);
    border-radius: 0.04rem;
    background: #ff5d20;
  }
  &-hint {
    @include fzchFa(0.28rem, #ff5d20, 1);
    margin-top: 0.61rem;
  }
  &-delete {
    position: fixed;
    top: 3.62rem;
    right: 0.92rem;
    @include WH(0.36rem, 0.36rem, 0, 0);
    @include fzchFa(0.24rem, #fff, 0.32rem);
    border-radius: 50%;
    background: #dddddd;
  }
}
</style>
