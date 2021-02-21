<template>
  <div class="poster" @click="padlock" v-show="posterList.display">
    <canvas  @click.stop="suspend"  class="poster-Canvas" id="canvas"></canvas>
    <ul  @click.stop="suspend" class="poster-box">
      <li class="poster-box-save" @click.stop="preserve">
        <p class="iconfont">&#xe616;</p>
        <p class="poster-box-text">保存图片</p>
      </li>
      <li class="poster-box-WeChat">
        <p class="iconfont">&#xe61a;</p>
        <p class="poster-box-text">微信好友</p>
      </li>
    </ul>
  </div>
</template>
<script>
let canvas, ctx, x, canvasW, w;
export default {
  name: "poster",
  props: {
    posterList: {
      type: Object,
      default() {
        return {
          title: "SPA按摩 90分钟舒缓经络",
          name: "雅瑜养生会所",
          headPortrait: "goodsmg.png",
          commodity: "project1.png",
          price: "100",
          originalPrice: "118",
          referrer: "逆风如解",
          display: false,
        };
      },
    },
  },
  data() {
    return {
      imageCode: "",
    };
  },
  methods: {
    initCanvas() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      x = window.innerWidth;
      canvas.width = x * 0.75;
      canvas.height = x * 1.196;
      canvasW = canvas.width;
      w = x / 100;
      //盒子
      //中间
      this.square(0, w * 18.4, canvasW, w * 96, "#fff");
      //bottom
      this.square(0, w * 114.4, canvasW, w * 5.14, "#333333");
      //img
      //top
      const top = new Image();
      top.src = require(`../../../assets/static/img/search/top.jpg`);
      this.imageArr(top, 0, 0, canvasW, w * 18.4);
      //头像
      let headPortrait = new Image();
      headPortrait.src = require(`../../../assets/static/img/index/${this.posterList.headPortrait}`);
      this.imageArr(headPortrait, w * 3.6, w * 26.07, w * 7.68, w * 7.68);
      //商品
      let commodity = new Image();
      commodity.src = require(`../../../assets/static/img/search/${this.posterList.commodity}`);
      this.imageArr(commodity, w * 5.33, w * 39.73, w * 65.16, w * 32.95);
      //商品边框
      this.frame(w * 4.4, w * 38.8, w * 66.8, w * 35.07, w * 0.14, "#D6D6D6");
      //code
      let code = new Image();
      code.src = require(`../../../assets/static/img/search/code.png`);
      this.imageArr(code, w * 52.4, w * 84.8, w * 16.93, w * 16.93);
      //logo
      let store = new Image();
      store.src = require(`../../../assets/static/img/search/store.png`);
      this.imageArr(store, w * 5.07, w * 99.33, w * 2.27, w * 2.27);
      //推荐人
      this.textLeft(
        w * 13.87,
        w * 28.07,
        w * 2.53 + "px",
        "#666",
        `推荐人:${this.posterList.referrer}`
      );
      this.textLeft(w * 13.87, w * 33.07, w * 3.2 + "px", "#333", `推荐你一个好券!`);
      //现价
      this.textLeft(
        w * 5.07,
        w * 87.13,
        w * 6.4 + "px",
        "#FF1818",
        `￥${this.posterList.price}`
      );
      //原价
      this.textLeft(
        w * 26.93,
        w * 86.9,
        w * 3.2 + "px",
        "#999",
        `￥${this.posterList.originalPrice}`
      );
      //扫一扫 抢券
      this.textLeft(w * 54.4, w * 105.46, w * 2.4 + "px", "#333", `扫一扫 抢券`);
      //店铺名称
      this.textLeft(
        w * 8.4,
        w * 101.33,
        w * 2.4 + "px",
        "#999",
        `${this.posterList.name}`
      );
      //商品名称
      this.textLeft(
        w * 5.33,
        w * 93.6,
        w * 3.2 + "px",
        "#333",
        `${this.posterList.title}`
      );
      //原价删除线
      let textWidTH = ctx.measureText("￥118").width;
      this.line(w * 26.93, w * 86, w * 0.14, textWidTH * 1.06, "#333");
    },
    line(X, Y, W, H, BC) {
      ctx.strokeStyle = BC;
      ctx.moveTo(X, Y);
      ctx.lineTo(X + H, Y);
      ctx.lineWidth = W;
      ctx.stroke();
    },
    imageArr(e, X, Y, W, H) {
      //照片
      e.onload = function () {
        ctx.drawImage(e, X, Y, W, H);
      };
    },
    frame(X, Y, W, H, size, BC) {
      ctx.beginPath();
      ctx.lineWidth = size; //设置边框大写
      ctx.strokeStyle = BC; //填充边框颜色
      ctx.strokeRect(X, Y, W, H); //对边框的设置
      ctx.closePath();
    },
    square(X, Y, W, H, BC) {
      ctx.beginPath();
      //设定图形边框的样式
      ctx.fillStyle = BC;
      //指定线宽
      ctx.fillRect(X, Y, W, H);
      ctx.closePath();
    },
    text(X, Y, size, color, textContent) {
      ctx.beginPath();
      //文本
      ctx.textAlign = "center";
      ctx.fillStyle = color; //设置填充颜色
      ctx.font = ` ${size} Calibri`; //设置字体
      ctx.fillText(textContent, X, Y);
      ctx.closePath();
    },
    textLeft(X, Y, size, color, textContent) {
      ctx.beginPath();
      //文本
      ctx.textAlign = "start";
      ctx.fillStyle = color; //设置填充颜色
      ctx.font = ` ${size} Calibri`; //设置字体
      ctx.fillText(textContent, X, Y);
      ctx.closePath();
    },
    preserve() {
      //保存
      let link = document.createElement("a");
      //设置下载的文件名
      link.download = "code";
      link.style.display = "none";
      //设置下载路径
      this.convertCanvasToImage();
      link.href = this.imageCode;
      //触发点击
      document.body.appendChild(link);
      link.click();
      //海报false
      this.$emit("btnPoster", false);
      //移除节点
      document.body.removeChild(link);
    },
    convertCanvasToImage() {
      let image = new Image();
      image.src = canvas.toDataURL("image/png");
      this.imageCode = image.src;
    },
    padlock() {
      //海报false
      this.$emit("btnPoster", false);
    },
    suspend() {
      return;
    },
  },
  mounted() {
    this.initCanvas();
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas();
    };
  },
};
</script>
<style lang="scss" scoped>
.poster {
  @include CoverLayer;
  &-Canvas {
    @include ptl(1rem, 50%);
    transform: translateX(-50%);
  }
  &-box {
    display: flex;
    @include pbl(0.24rem, 50%);
    @include WH(7.02rem, 2.3rem);
    justify-content: space-around;
    border-radius: 0.16rem;
    transform: translateX(-50%);
    background: #fff;
    &-save {
      .iconfont {
        @include WH(0.96rem, 0.96rem, 0, 0.38rem auto 0.3rem);
        @include fzchFa(0.46rem, #fff, 0.96rem);
        border-radius: 50%;
        background: #f98c17;
      }
    }
    &-text {
      @include fzc(0.28rem, #333);
    }
    &-WeChat {
      .iconfont {
        @include fzchFa(0.96rem, #07bd13, 1);
        border-radius: 50%;
        margin: 0.38rem 0 0.3rem 0;
      }
    }
  }
}
</style>
