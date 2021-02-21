<template>
  <ul class="award">
    <li class="award-addup">累计奖励</li>
    <li class="award-addupNum"><span>￥</span>{{ awardContent.num }}</li>
    <li class="award-todayNum award-num">
      <span>￥</span>{{ awardContent.ThisMonth.num }}
    </li>
    <li class="award-monthNum award-num"><span>￥</span>{{ awardContent.Today.num }}</li>
    <li class="award-today award-title">今日奖励</li>
    <li class="award-month award-title">本月奖励</li>
    <li class="award-string"></li>
  </ul>
</template>
<script>
export default {
  name: "award",
  props: {
    awardContent: {
      default() {
        return {
          ThisMonth: { month: "20211", num: 0 },
          Today: { today: "202112", num: 0 },
          num: 0,
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.award {
  position: relative;
  @include WH(100%, 2rem);
  background: #ff5d20;
  &-addup {
    @include ptl(1.2rem, 0.32rem);
    @include fzc(0.28rem, #fff);
  }
  &-addupNum {
    @include ptl(0.57rem, 0.32rem);
    @include fzc(0.4rem, #fff);
    span {
      @include fzc(0.26rem, #fff);
    }
  }
  &-todayNum {
    @include ptl(0.62rem, 3.5rem);
  }
  &-monthNum {
    @include ptl(0.62rem, 5.85rem);
  }
  &-today {
    @include ptl(1.23rem, 3.75rem);
  }
  &-month {
    @include ptl(1.23rem, 6.1rem);
  }
  &-num {
    @include fzc(0.32rem, #fff);
    span {
      @include fzc(0.26rem, #fff);
    }
  }
  &-title {
    @include fzc(0.24rem, #fff);
  }
  &-string {
    @include ptl(0.61rem, 2.58rem);
    @include WH(0.01rem, 0.78rem);
    background: #faa98b;
  }
}
</style>
