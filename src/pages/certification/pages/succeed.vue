<template>
  <div class="succeed" v-show="certificationBlock.succeed">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <img
      :src="require(`../../../assets/static/img/certification/succeed.png`)"
      alt=""
      class="succeed-img"
    />
    <h6 class="succeed-title">恭喜你，认证成功！</h6>
    <keep-alive>
      <router-link to="/my" class="succeed-withdraw">去提现</router-link>
    </keep-alive>
    <keep-alive>
      <router-link to="/my" class="succeed-user">返回个人中心</router-link>
    </keep-alive>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
export default {
  name: "succeed",
  props: {
    certificationBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      HeadlineConten: "",
    };
  },
  components: {
    Headline,
  },
};
</script>
<style lang="scss" scoped>
.succeed {
  @include WH(100%, 100vh);
  &-img {
    @include WH(2.5rem, 2.03rem, 0, 1.5rem 0 0 2.5rem);
  }
  &-title {
    @include fzchFa(0.32rem, #333, 1);
    margin-top: 0.73rem;
  }
  &-withdraw {
    display: block;
    @include WH(6.42rem, 0.9rem, 0, 1.23rem auto 0);
    @include fzchFa(0.32rem, #fff, 0.9rem);
    background: #ff5d20;
    border-radius: 0.08rem;
  }
  &-user {
    display: block;
    @include WH(6.42rem, 0.9rem, 0, 0.32rem auto 0);
    @include fzchFa(0.32rem, #999, 0.9rem);
    border: 0.01rem solid #e0e0e0;
    border-radius: 0.08rem;
  }
}
</style>
