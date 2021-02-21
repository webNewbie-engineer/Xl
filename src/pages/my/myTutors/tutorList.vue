<template>
  <ul class="tutorList">
    <li
      class="tutorList-box"
      v-for="(item, index) of listContent"
      :key="index"
      @click="handClickBtn(item)"
    >
      <img
        :src="require(`../../../assets/static/img/my/${item.img}`)"
        alt=""
        class="tutorList-box-img"
      />
      <div class="tutorList-box-content">
        <h6 class="title">{{ item.name }}</h6>
        <span class="identity">{{ item.identity }}</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "tutorList",
  props: {
    listContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handClickBtn(e) {
      //传递值给确定组件
      this.$emit("btnList", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.tutorList {
  width: 100%;
  margin-top: 0.55rem;
  &-box {
    display: flex;
    width: 100%;
    margin-bottom: 0.24rem;
    &-img {
      @include WH(0.88rem, 0.88rem, 0, 0 0.27rem 0 0.29rem);
      border-radius: 50%;
    }
    &-content {
      flex: 1;
      border-bottom: 0.01rem solid #eeeeee;
      .title {
        @include fzc(0.28rem, #333);
        padding-top: 0.05rem;
      }
      .identity {
        @include fzc(0.24rem, #ff5d20);
        padding: 0.05rem 0.09rem;
        margin: 0.17rem 0 0.29rem 0;
        border: 0.01rem solid #ff5d20;
        border-radius: .08rem;
      }
    }
  }
}
</style>
