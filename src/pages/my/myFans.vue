<template>
  <div class="myFans">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <selectThree :titleArr="titleArr" @displaySlect="displaySlect"></selectThree>
    <member :displayIndex="displayIndex" :fansContent="fansContent"></member>
    <friend :displayIndex="displayIndex" :friendContent="friendContent"></friend>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "myFans",
  data() {
    return {
      HeadlineConten: "我的粉丝",
      titleArr: [
        {
          name: "我的会员",
        },
        { name: "我的好友" },
      ],
      displayIndex: 0,
      fansContent: [],
      friendContent: [],
    };
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/my/fans.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      //fans
      this.fansContent = res.fans;
      //friend
      this.friendContent = res.friend;
    },
    displaySlect(e) {
      //更换列表
      this.displayIndex = e;
    },
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
    selectThree: () => import("@/common/index/selectThree"),
    member: () => import("./myFansS/member"),
    friend: () => import("./myFansS/friend"),
  },
  mounted() {
    //调接口
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.myFans {
  @include WH(100%, 100vh);
  background: #fff;
}
</style>
