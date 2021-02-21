<template>
  <div class="fans" @click="skip">
    <div class="fans-box">
      <h2 class="fans-box-title">我的粉丝</h2>
      <ul class="fans-box-content">
        <li v-for="(item, index) of fans" :key="index">
          <p class="title">{{ item.title }}</p>
          <p class="num">{{ item.num }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "myfans",
  props: {
    fans: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    skip() {
      //看用户是否登陆
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined) {
        this.$emit("logoUndefined", true);
        return;
      }
      //跳转我的粉丝
      this.$router.push({ name: "myFans" });
    },
  },
};
</script>
<style lang="scss" scoped>
.fans {
  width: 100%;
  padding-top: 0.25rem;
  background: #f5f5f5;
  &-box {
    position: relative;
    @include WH(7.02rem, 2.3rem, 0, 0 auto);
    border-radius: 0.08rem;
    background: #ffffff;
    &-title {
      @include ptl(0.27rem, 0.31rem);
      @include fzc(0.4rem, #333333);
    }
    &-content {
      @include ptl(1.15rem, 0);
      display: flex;
      @include WH(100%, 1.15rem);
      li {
        flex: 1;
        .title {
          @include fzc(0.26rem, #999);
          text-align: center;
        }
        .num {
          @include fzc(0.4rem, #ff5d20);
          text-align: center;
          margin-top: 0.29rem;
        }
      }
    }
  }
}
</style>
