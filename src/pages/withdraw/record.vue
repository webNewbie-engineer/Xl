<template>
  <div class="record">
    <Headline :HeadlineConten="HeadlineConten" :skip="skip"></Headline>
    <div class="record-cut-off"></div>
    <ul class="record-box">
      <li
        class="record-box-item"
        v-for="(item, index) of list"
        @click="btnSkip(index)"
        :key="index"
      >
        <p class="record-box-item-title">{{ item.title }}</p>
        <p class="record-box-item-item">{{ item.date }}</p>
        <p class="record-box-item-manner">{{ item.manner }}</p>
        <p
          class="record-box-item-state"
          :style="{
            color:
              item.state == '提现成功'
                ? '#999999'
                : item.state == '提现中'
                ? '#FF9800'
                : '#F43636',
          }"
        >
          {{ item.state }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "withdrawrecord",
  data() {
    return {
      HeadlineConten: "提现记录",
      list: [],
      skip: "/withdraw",
    };
  },
  methods: {
    btnSkip(e) {
      //跳转
      this.$router.push({
        name: "withdrawParticulars",
        query: {
          list: e,
        },
      });
    },
  },
  components: {
    Headline: () => import("@/common/index/Headline"),
  },
  activated() {
    //获取用户信息
    let arr = JSON.parse(localStorage.getItem("user"));
    this.list = arr[arr.length - 1].record;
  },
};
</script>
<style lang="scss" scoped>
.record {
  width: 100%;
  background: #fff;
  &-cut-off {
    @include WH(100%, 0.24rem, 0, 0);
    background: #f5f5f5;
  }
  &-box {
    width: 100%;
    background: #fff;
    &-item {
      position: relative;
      @include WH(7.26rem, 1.32rem, 0, 0 0 0 0.24rem);
      border-bottom: 0.01rem solid #eeeeee;
      &-title {
        @include ptl(0.37rem, 0.08rem);
        @include fzc(0.3rem, #333);
      }
      &-item {
        @include ptl(0.85rem, 0.08rem);
        @include fzc(0.24rem, #999);
      }
      &-manner {
        @include ptr(0.38rem, 0.32rem);
        @include fzc(0.32rem, #333);
        font-family: PingFang-SC-Bold;
      }
      &-state {
        @include ptr(0.83rem, 0.32rem);
        font-size: 0.24rem;
      }
    }
  }
}
</style>
