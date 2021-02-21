<template>
  <div class="vipRights">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <div class="vipRights-box">
      <img
        src="~@/assets/static/img/member/member.png"
        alt=""
        class="vipRights-box-img"
      />
    </div>
    <memberList :listContent="listContent"></memberList>
    <today :todayContent="todayContent"></today>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import memberList from "../member/components/memberList";
import today from "./vipRights/today";
export default {
  name: "vipRights",
  data() {
    return {
      HeadlineConten: "会员权益",
      listContent: [
        {
          title: "自购省钱",
          content: "高质低价超划算",
          img: "member01.png",
        },
        {
          title: "分享多奖",
          content: "分享奖励更多",
          img: "member02.png",
        },
        {
          title: "收益稳定",
          content: "可专可兼灵活赚",
          img: "member03.png",
        },
        {
          title: "免费培训",
          content: "名师讲堂免费听",
          img: "member04.png",
        },
        {
          title: "步步高升",
          content: "晋升享更多收益",
          img: "member05.png",
        },
        {
          title: "专属好券",
          content: "周边优惠时时有",
          img: "member06.png",
        },
        {
          title: "免单狂欢节",
          content: "只要买到就赚到",
          img: "member07.png",
        },
        {
          title: "全额积分",
          content: "积分超值兑好礼",
          img: "member08.png",
        },
      ],
      todayContent: [
        {
          title: "这里是商品名券名 限定两行文 这里商品名 限定两行",
          img: "goodsmg.png",
          name: "瑞吉酒店西餐厅",
          originalcost: "￥59",
          currentprice: "￥198",
          location: "雨花区运达广场",
          share: "分享赚￥15.2",
          earnings: "收益10%",
        },
        {
          title: "这里是商品名券名 限定两行文 这里商品名 限定两行",
          img: "goodsmg.png",
          name: "瑞吉酒店西餐厅",
          originalcost: "￥59",
          currentprice: "￥198",
          location: "雨花区运达广场",
          share: "分享赚￥15.2",
          earnings: "收益10%",
        },
        {
          title: "这里是商品名券名 限定两行文 这里商品名 限定两行",
          img: "goodsmg.png",
          name: "瑞吉酒店西餐厅",
          originalcost: "￥59",
          currentprice: "￥198",
          location: "雨花区运达广场",
          share: "分享赚￥15.2",
          earnings: "收益10%",
        },
      ],
    };
  },
  components: {
    Headline,
    memberList,
    today,
  },
};
</script>
<style lang="scss" scoped>
.vipRights {
  width: 100%;
  &-box {
    padding-top: 0.11rem;
    background: #fff;
    &-img {
      width: 100%;
      vertical-align: bottom;
    }
  }
}
</style>
