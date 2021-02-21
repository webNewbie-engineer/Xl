<template>
  <div class="pulldown" id="dody">
      
  </div>
</template>
<script>
export default {
  name: "pulldown",
  mounted() {
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
          console.log(1);
          this.shows = false;
        }
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.pulldown {
  @include WH(100%, 100vh);
  overflow: scroll;
}
.pulldown::-webkit-scrollbar {
  display: none;
}
</style>