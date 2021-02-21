<template>
  <div class="submit">
    <h4 class="submit-title">上传本人有效二代身份证照片</h4>
    <ul class="submit-text">
      <li>
        <div class="submit-text-circle"></div>
        <div class="submit-text-Content">
          请确保身份证<span>边框完整,字体清晰,亮度均匀</span>
        </div>
      </li>
      <li>
        <div class="submit-text-circle"></div>
        <div class="submit-text-Content">照片格式支持jpg、jpeg、png</div>
      </li>
      <li>
        <div class="submit-text-circle"></div>
        <div class="submit-text-Content">
          身份证照片信息将加密处理，仅用于提现财务用途
        </div>
      </li>
    </ul>
    <ul class="submit-img">
      <li v-for="(item, index) of submitImg" :key="index">
        <img
          :src="require(`../../../../assets/static/img/certification/${item}`)"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "submit",
  props: {
    submitImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.submit {
  width: 100%;
  background: #fff;
  &-title {
    @include fzc(0.3rem, #333);
    text-indent: 0.37rem;
    font-family: STXihei;
    padding: 0.44rem 0 0.38rem 0;
  }
  &-text {
    width: 100%;
    list-style: disc;
    li {
      display: flex;
      margin-bottom: 0.21rem;
    }
    &-circle {
      @include WH(0.08rem, 0.08rem, 0, 0.1rem 0 0 0.37rem);
      border-radius: 50%;
      background: #c1c1c1;
    }
    &-Content {
      @include fzc(0.24rem, #999);
      margin-left: 0.11rem;
      span {
        @include fzc(0.24rem, #ff9800);
      }
    }
  }
  &-img {
    display: flex;
    width: 100%;
    margin-top: 0.5rem;
    li {
      flex: 1;
      margin-left: 0.31rem;
      img {
        width: 100%;
        height: 2.84rem;
      }
    }
  }
}
</style>
