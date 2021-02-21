<template>
  <ul class="list">
    <li v-for="(item, index) of listContent" :key="index">
      <img
        :src="require(`../../../assets/static/img/member/${item.img}`)"
        alt=""
        class="list-img"
      />
      <h2 class="list-title">{{ item.title }}</h2>
      <p class="list-Content">{{ item.content }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "memberList",
  props: {
    listContent: {
      type: Array,
      default() {
        return [
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
        ];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  padding-top: 0.5rem;
  background: #fff2ef;
  @include DFli(25%);
  li {
    padding-bottom: 0.47rem;
  }
  &-img {
    @include WH(0.88rem, 0.88rem);
  }
  &-title {
    @include fzc(0.3rem, #9b6344);
    margin-top: 0.2rem;
  }
  &-Content {
    @include fzc(0.22rem, #c98e6b);
    margin-top: 0.2rem;
  }
}
</style>
