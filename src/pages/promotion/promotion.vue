<template>
  <div class="promotion" id="dody">
    <titlex :HeadlineConten="HeadlineConten"></titlex>
    <selectContentOne
      :selectContent="selectContent"
      @selectBtn="selectBtn"
    ></selectContentOne>
    <inviteInvitation
      :promotionContent="promotionContent"
      :listRemind="listRemind"
      @inviteList="inviteList"
    ></inviteInvitation>
    <oem :promotionContent="promotionContent" :listRemind="listRemind"></oem>
    <share :promotionContent="promotionContent" :listRemind="listRemind"></share>
    <bottomNav :selected="selected"></bottomNav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "promotion",
  data() {
    return {
      HeadlineConten: "推广明细",
      selectContent: ["邀请店", "分享券", "分享礼包"],
      promotionContent: {
        inviteInvitation: true,
        oem: false,
        share: false,
      },
      selected: 2,
      listRemind: {
        title: "",
        num: 5,
      },
      listContent: [],
    };
  },
  components: {
    titlex: () => import("@/common/index/title"),
    selectContentOne: () => import("@/common/index/selectContentOne"),
    inviteInvitation: () => import("./inviteInvitation/inviteInvitation"),
    oem: () => import("./oem/oem"),
    share: () => import("./share/share"),
    bottomNav: () => import("@/common/index/bottomNav"),
  },
  methods: {
    selectBtn(e) {
      if (e == 0) {
        this.promotionContent = {
          inviteInvitation: true,
          oem: false,
          share: false,
        };
        //获取礼包列表
        let arr = JSON.parse(localStorage.getItem("inviteInvitation"));
        if (arr == undefined || arr == null || arr == "") {
          arr = [];
        }
        //列表数据
        this.listContent = arr;
        this.listRemind.num = 5;
        //判断是否要下拉加载
        if (this.listRemind.num < this.listContent.length) {
          this.listRemind.title = "下拉加载";
        } else {
          this.listRemind.title = "全部结果加载完毕";
        }
        return;
      }
      if (e == 1) {
        this.promotionContent = {
          inviteInvitation: false,
          oem: false,
          share: true,
        };
        let arr = JSON.parse(localStorage.getItem("share"));
        if (arr == null || arr == undefined) {
          arr = [];
        }
        this.listContent = arr;
        this.listRemind.num = 3;
        //判断是否要下拉加载
        if (this.listRemind.num < this.listContent.length) {
          this.listRemind.title = "下拉加载";
        } else {
          this.listRemind.title = "全部结果加载完毕";
        }
        return;
      }
      if (e == 2) {
        this.promotionContent = {
          inviteInvitation: false,
          oem: true,
          share: false,
        };
        //分享列表
        let arr = JSON.parse(localStorage.getItem("carnival"));
        if (arr == undefined) {
          arr = [];
        }
        //列表数据
        this.listContent = arr;
        this.listRemind.num = 3;
        //判断是否要下拉加载
        if (this.listRemind.num < this.listContent.length) {
          this.listRemind.title = "下拉加载";
        } else {
          this.listRemind.title = "全部结果加载完毕";
        }
        return;
      }
    },
    inviteList(e) {
      this.listContent = e;
      this.listRemind.num = 5;
      //判断是否要下拉加载
      if (this.listRemind.num < this.listContent.length) {
        this.listRemind.title = "下拉加载";
      } else {
        this.listRemind.title = "全部结果加载完毕";
      }
    },
  },
  mounted() {
    //获取礼包列表
    let arr = JSON.parse(localStorage.getItem("carnival"));
    if (arr == null || arr == undefined) {
      arr = [];
    }
    this.listContent = arr;
    this.listContent = arr;
    //判断是否要下拉加载
    if (this.listRemind.num < this.listContent.length) {
      this.listRemind.title = "下拉加载";
    } else {
      this.listRemind.title = "全部结果加载完毕";
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
          if (this.listRemind.num < this.listContent.length) {
            this.listRemind.title = "正在加载...";
            //增加列表可显示的数据
            setTimeout((val) => {
              this.listRemind.num += 4;
              if (this.listRemind.num < this.listContent.length) {
                this.listRemind.title = "下拉加载";
              } else {
                this.listRemind.title = "全部结果加载完毕";
              }
            }, 2000);
          } else {
            this.listRemind.title = "全部结果加载完毕";
          }
          this.shows = false;
        }
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.promotion {
  @include WH(100%, 100vh);
  overflow: scroll;
  background: #f5f5f5;
}
</style>
