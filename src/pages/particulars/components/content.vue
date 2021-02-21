<template>
  <div class="content">
    <div class="content-time content-Box">
      <div class="content-time-iconfont iconfont">&#xe6ce;</div>
      <p class="content-time-open font">营业时间</p>
      <p class="content-time-time font">{{ contentObj.item }}</p>
    </div>
    <div class="content-phone content-Box">
      <div class="content-phone-iconfont iconfont">&#xe628;</div>
      <p class="content-phone-open font">联系电话</p>
      <p class="content-phone-time font">{{ contentObj.phone }}</p>
      <div class="content-phone-right iconfont">&#xe60c;</div>
    </div>
    <div class="content-location content-Box">
      <div class="content-location-iconfont iconfont">&#xe611;</div>
      <div class="content-location-content">
        <p>{{ contentObj.locationCoten }}</p>
        <div class="distance">{{ contentObj.distance }}</div>
      </div>
      <div class="content-location-right iconfont">&#xe86a;</div>
    </div>
    <div class="content-btn" @click="btn">{{ contentObj.profit }}</div>
  </div>
</template>
<script>
export default {
  name: "contentBox",
  props: {
    contentObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    btn(){
      this.$emit("create",true);
    }
  }
};
</script>
<style lang="scss" scpoed>
.content {
  width: 100%;
  margin-top: 1.76rem;
  &-Box {
    display: flex;
    @include WH(7.21rem, 0.61rem, 0, 0 0 0 0.29rem);
  }
  &-btn {
    @include WH(7.04rem, 0.9rem, 0, 0.66rem auto 0.45rem);
    @include fzchFa(0.36rem, #fff, 0.9rem);
    background: #ff5d20;
    border: 0.02rem solid #ff5d20;
    border-radius: 0.44rem;
  }
  &-time {
    &-iconfont {
      @include fzch(0.48rem, #c1c1c1, 0.61rem);
    }
    &-open {
      margin-left: 0.21rem;
    }
    &-time {
      margin-left: 0.26rem;
    }
  }
  &-phone {
    margin-top: 0.2425rem;
    &-iconfont {
      @include fzch(0.35rem, #c1c1c1, 0.61rem);
      padding-left: 0.08rem;
    }
    &-open {
      margin-left: 0.25rem;
    }
    &-time {
      flex: 1;
      margin-left: 0.26rem;
    }
    &-right {
      @include WH(1.22rem, 0.5rem, 0, 0.055rem 0 0 0.5rem);
      text-indent: 0.37rem;
      @include fzch(0.48rem, #ff5d20, 0.5rem);
      border-left: 0.01rem solid #e5e5e5;
    }
  }
  &-location {
    margin-top: 0.2725rem;
    &-iconfont {
      @include fzch(0.35rem, #c1c1c1, 0.61rem);
      padding-left: 0.08rem;
    }
    &-content {
      flex: 1;
      margin-left: 0.22rem;
      p {
        display: flex;
        height: 0.26rem;
        @include fzc(0.26rem, #333);
        @include omit;
      }
      .distance {
        @include fzc(0.26rem, #999);
      }
    }
    &-right {
      @include WH(1.22rem, 0.5rem, 0, 0 0 0 0.5rem);
      text-indent: 0.37rem;
      @include fzch(0.48rem, #ff5d20, 0.5rem);
      border-left: 0.01rem solid #e5e5e5;
    }
  }
  .font {
    @include fzch(0.26rem, #333, 0.61rem);
  }
}
</style>
