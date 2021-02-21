<template>
  <div class="myInvitation" id="dody">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <totalRevenue :money="money"></totalRevenue>
    <revenueList
      :revenueListContent="revenueListContent"
      @listIndex="listIndex"
    ></revenueList>
    <listNull :listNullBolck="listNullBolck"></listNull>
    <pendingInvitations></pendingInvitations>
    <HasInvited :HasInvitedList="HasInvitedList" :listDisplay="listDisplay"></HasInvited>
    <audit :auditList="auditList" :listDisplay="listDisplay"></audit>
    <ToBeInvited
      :ToBeInvitedList="ToBeInvitedList"
      :listDisplay="listDisplay"
    ></ToBeInvited>
    <top :revenueListContent="revenueListContent" v-show="topNone"></top>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import totalRevenue from "./myInvitation/totalRevenue";
import revenueList from "./myInvitation/revenueList";
import listNull from "./myInvitation/listNull";
import pendingInvitations from "./myInvitation/pendingInvitations";
import axios from "axios";
export default {
  name: "myInvitation",
  data() {
    return {
      HeadlineConten: "我的邀请",
      revenueListContent: {
        title: [
          {
            num: 0,
            title: "待邀请",
            background: "#FF5D20",
          },
          {
            num: 0,
            title: "邀请中",
            background: "#FF9800",
          },
          {
            num: 0,
            title: "已邀请",
            background: "#999999",
          },
        ],
        num: 0,
      },
      listNullBolck: {
        list: [],
        num: 0,
      },
      listContent: [],
      money: "",
      auditList: [],
      HasInvitedList: [],
      ToBeInvitedList: [],
      listDisplay: {
        listNum: 0,
        num: 7,
        upload: "全部结果加载完毕",
      },
      topNone: false,
      listLength: 0,
    };
  },
  components: {
    Headline,
    totalRevenue,
    revenueList,
    listNull,
    pendingInvitations,
    audit: () => import("./myInvitation/audit"),
    HasInvited: () => import("./myInvitation/HasInvited"),
    ToBeInvited: () => import("./myInvitation/ToBeInvited"),
    top: () => import("./myInvitation/top"),
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },

    getHoemInfoContent(res) {
      //待邀请
      res = res.data.data[0];
      this.ToBeInvitedList = res;
      this.revenueListContent.title[0].num = res.length;
      //初始值
      this.timesetT(this.ToBeInvitedList);
      //列表倒计时
      this.timeSetI(this.ToBeInvitedList);
    },
    listIndex(e) {
      //选中第几个
      this.revenueListContent.num = e;
      //是否有店铺为0 bolck
      this.listNullBolck.num = e;
      //切换列表
      this.listDisplay.listNum = e;
      this.listLength = e;
      //初始化列表渲染
      this.listDisplay.num = 7;
      //判断是否为all渲染
      const listArr = this.revenueListContent;
      if (this.listDisplay.num < listArr.title[this.listLength].num) {
        this.listDisplay.upload = "正在加载...";
      } else {
        this.listDisplay.upload = "全部结果加载完毕";
      }
    },
    nullReturn(res) {
      if (res == undefined || res == null || res == "") {
        return (res = []);
      } else {
        return res;
      }
    },
    tiemFloor(e) {
      return (e = e < 10 ? (e < 1 ? `00` : `0${e}`) : e);
    },
    timesetT(e) {
      setTimeout((val) => {
        for (let i of e) {
          i.tiem -= 1;
          if (i.tiem < 1) {
            i.tiem = 0;
          }
          //小时
          let hour = Math.floor(i.tiem / 3600);
          //分钟
          let minute = Math.floor((i.tiem % 3600) / 60);
          //秒
          let sec = (i.tiem % 3600) % 60;
          hour = this.tiemFloor(hour);
          minute = this.tiemFloor(minute);
          sec = this.tiemFloor(sec);
          i.tiemRank = `${hour}:${minute}:${sec}`;
        }
        if (e == this.auditList) {
          localStorage.setItem("audit", JSON.stringify(e));
        }
      }, 1);
    },
    timeSetI(e) {
      setInterval((val) => {
        for (let i of e) {
          i.tiem -= 1;
          //小时
          let hour = Math.floor(i.tiem / 3600);
          //分钟
          let minute = Math.floor((i.tiem % 3600) / 60);
          //秒
          let sec = (i.tiem % 3600) % 60;
          hour = this.tiemFloor(hour);
          minute = this.tiemFloor(minute);
          sec = this.tiemFloor(sec);
          i.tiemRank = `${hour}:${minute}:${sec}`;
        }
        if (e == this.auditList) {
          localStorage.setItem("audit", JSON.stringify(e));
        }
      }, 1000);
    },
  },
  activated() {
    //调接口
    this.getHoemInfo();
    //审核中
    let audit = JSON.parse(localStorage.getItem("audit"));
    let auditArr = this.nullReturn(audit);
    this.auditList = auditArr;
    if (auditArr[0] == undefined) {
      //初始值
      this.timesetT(this.auditList);
      //列表倒计时
      this.timeSetI(this.auditList);
    }
    //用户
    let user = JSON.parse(localStorage.getItem("user"));
    let userList = this.nullReturn(user);
    //总收益
    let num = userList[userList.length - 1].award.num;
    if (1 < num / 10000) {
      this.money = `${parseInt(num / 1000)}万`;
    } else {
      this.money = `${num}`;
    }
    //已邀请
    let invite = JSON.parse(localStorage.getItem("inviteInvitation"));
    let inviteList = this.nullReturn(invite);
    this.HasInvitedList = inviteList;
    //列表数量
    this.revenueListContent.title[1].num = auditArr.length;
    this.revenueListContent.title[2].num = inviteList.length;
    //判断是否为all渲染
    const listArr = this.revenueListContent;
    if (this.listDisplay.num < listArr.title[this.listLength].num) {
      this.listDisplay.upload = "正在加载...";
    } else {
      this.listDisplay.upload = "全部结果加载完毕";
    }
    this.$nextTick(() => {
      // 进入nexTick
      let bady = document.getElementById("dody"); // 获取滚动条的dom
      // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
      bady.onscroll = () => {
        // 获取距离顶部的距离
        let scrollTop = bady.scrollTop;
        // 获取可视区的高度
        let windowHeight = bady.clientHeight;
        // 获取滚动条的总高度
        let scrollHeight = bady.scrollHeight;
        if (scrollTop + windowHeight >= scrollHeight) {
          // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
          if (this.listDisplay.num < listArr.title[this.listLength].num) {
            this.listDisplay.upload = "正在加载...";
            setTimeout((val) => {
              this.listDisplay.num += 2;
              if (this.listDisplay.num <= listArr.title[this.listLength].num) {
                this.listDisplay.upload = "下拉加载";
              } else {
                this.listDisplay.upload = "全部结果加载完毕";
              }
            }, 2000);
          }
          this.shows = false;
        }
        if (scrollTop + windowHeight > window.screen.availHeight) {
          this.topNone = true;
        } else {
          this.topNone = false;
        }
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.myInvitation {
  position: relative;
  @include WH(100%, 100vh);
  overflow: scroll;
  background: #f5f5f5;
}
</style>
