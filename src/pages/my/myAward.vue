<template>
  <div class="myAward" id="dody">
    <Headline :HeadlineConten="HeadlineConten" :skip="skip"></Headline>
    <award :awardContent="awardContent"></award>
    <total :totalDate="totalDate" @date="date"></total>
    <awardsList :listRemind="listRemind" :listContent="listContent"></awardsList>
    <div class="myAward-box" v-show="calendarTrue">
      <Calendar v-on:choseDay="clickDay" class="calendar"></Calendar>
    </div>
  </div>
</template>
<script>
export default {
  name: "myAward",
  data() {
    return {
      HeadlineConten: "我的奖励",
      skip: "/my",
      listContent: [],
      listRemind: {
        title: "全部结果加载完毕",
        num: 7,
      },
      calendarTrue: false,
      totalDate: "07-01",
      awardContent: {
        ThisMonth: { month: "20211", num: 0 },
        Today: { today: "202112", num: 0 },
        num: 0,
      },
    };
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
    award: () => import("./myAwards/award"),
    total: () => import("./myAwards/total"),
    awardsList: () => import("./myAwards/awardsList"),
    Calendar: () => import("vue-calendar-component"),
  },
  methods: {
    clickDay(data) {
      let date = data;
      this.totalDate = date;
      localStorage.setItem("date", JSON.stringify(date));
      //日期选择false
      this.calendarTrue = false;
    },
    date(e) {
      //日期选择true
      this.calendarTrue = true;
    },
  },
  activated() {
    //用户
    let user = JSON.parse(localStorage.getItem("user"));
    this.awardContent = user[user.length - 1].award;
    //奖励list
    let list = JSON.parse(localStorage.getItem("award"));
    if (list == undefined || list == null) {
      list = [];
    }
    this.listContent = list;
    //时间
    let date = JSON.parse(localStorage.getItem("date"));
    //没有时间生成
    if (date == undefined || date == null) {
      var myDate = new Date();
      let month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      let Getdate = myDate.getDate(); //获取当前日期
      month = 9 < month ? month : `0${month}`;
      Getdate = 9 < Getdate ? Getdate : `0${Getdate}`;
      date = `${month}-${Getdate}`;
      this.totalDate = date;
      //传入本地储存
      localStorage.setItem("date", JSON.stringify(date));
    } else {
      this.totalDate = date;
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
          //把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
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
            this.shows = false;
          }
          this.shows = false;
        }
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.myAward {
  @include WH(100%, 100vh);
  overflow: scroll;
  background: #fff;
  &-box {
    @include CoverLayer;
    .calendar {
      position: fixed;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: showBox 0.5s;
    }
  }
  /deep/ .wh_content_all {
    padding-bottom: 0.08rem;
    background: rgb(163, 159, 159);
    .wh_content {
      .wh_content_item {
        font-size: 0.42rem;
        height: 0.8rem;
      }
      .wh_top_tag {
        width: .12rem;
        height: .12rem;
        line-height: .12rem;
      }
      .wh_item_date {
          width: .4rem;
        height: .4rem;
        line-height: .4rem;
      }
    }
    .wh_top_changge {
      li {
        font-size: 0.36rem;
        height: 0.9rem;
      }
      .wh_jiantou1 {
        width: 0.24rem;
        height: 0.24rem;
        border-top: 0.04rem solid #fff;
        border-left: 0.04rem solid #fff;
      }
      .wh_jiantou2 {
        width: 0.24rem;
        height: 0.24rem;
        border-top: 0.04rem solid #fff;
        border-right: 0.04rem solid #fff;
      }
    }
  }
}
@keyframes showBox {
  from {
    transform: translate(-50%, -50%) scale(0.1, 0.1);
  }
  to {
    transform: translate(-50%, -50%) scale(1, 1);
  }
}
</style>
