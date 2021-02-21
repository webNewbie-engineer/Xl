<template>
  <div class="ticket">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <open :uesrOpen="uesrOpen"></open>
    <member :uesrOpen="uesrOpen"></member>
    <selectContcon
      :selectContconProps="selectContconProps"
      @selectlist="selectlist"
    ></selectContcon>
    <specialStamps
      :stampsContent="stampsContent"
      :ifactivity="ifactivity"
    ></specialStamps>
    <activity :ifactivity="ifactivity" :activityContent="activityContent"></activity>
  </div>
</template>

<script>
import Headline from "@/common/index/Headline";
import open from "./ticket/open";
import selectContcon from "./ticket/selectContcon";
import specialStamps from "./ticket/specialStamps";
import member from "./ticket/member";
import activity from "./ticket/activity";
export default {
  name: "ticket",
  data() {
    return {
      HeadlineConten: "我的券包",
      selectContconProps: [
        {
          name: "特惠券",
          color: "#333333",
        },
        {
          name: "狂欢节礼包",
          color: "#FF1818",
        },
      ],
      stampsContent: [
        {
          name: "雅瑜养生会所",
          title: "美丽佳人套餐，90分钟",
          img: "goodsmg.png",
          money: "￥ 120",
          item: "2019-03-22至2019-05-22",
          stamps: "",
          condition: "待使用",
        },
        {
          name: "雅瑜养生会所",
          title: "美丽佳人套餐，90分钟",
          img: "goodsmg.png",
          money: "￥ 120",
          item: "2019-03-22至2019-05-22",
          stamps: "套餐券",
          condition: "待使用",
        },
      ],
      uesrOpen: false,
      ifactivity: false,
      activityContent: [
        {
          img: "banner.png",
          item: "有限期：2019-07-26至2019-08-30",
        },
      ],
    };
  },
  components: {
    Headline,
    open,
    selectContcon,
    specialStamps,
    member,
    activity,
  },
  methods: {
    selectlist(e) {
      this.ifactivity = e;
    },
  },
  activated() {
    let arr = JSON.parse(localStorage.getItem("user"));
    if (arr == undefined || arr==false) {
      this.uesrOpen = false;
      return;
    }
    if (arr[arr.length - 1].member == "" || arr[arr.length - 1].member == undefined) {
      this.uesrOpen = false;
    } else {
      this.uesrOpen = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.ticket {
  @include WH(100%, 100vh);
  background-color: #f5f5f5;
}
</style>
