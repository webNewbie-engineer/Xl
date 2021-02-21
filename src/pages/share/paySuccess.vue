<template>
  <div class="pay">
    <Headline :skip="skip"></Headline>
    <particulars></particulars>
    <today :todayContent="todayContent"></today>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "sharePaySuccess",
  data() {
    return {
      skip: "/share",
      todayContent: [],
    };
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
    particulars: () => import("./paySuccessS/particulars"),
    today: () => import("./paySuccessS/today"),
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },

    getHoemInfoContent(res) {
      //今日必赚list
      res = res.data.data[0];
      this.todayContent = res;
    },
  },
  activated() {
    //调接口
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.pay {
  @include WH(100%, 100vh);
  background: #f5f5f5;
}
</style>
