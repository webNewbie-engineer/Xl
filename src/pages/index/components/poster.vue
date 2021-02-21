<template>
  <div class="poster" @click="padlock" v-show="this.posterContent.display">
    <canvas @click.stop="suspend" class="poster-Canvas" id="canvas"></canvas>
    <div @click.stop="preserve" class="poster-preserve iconfont">&#xe616;&nbsp;保存</div>
  </div>
</template>
<script>
let canvas, ctx, x, canvasW, w;
export default {
  name: "poster",
  props: {
    posterContent: {
      type: Object,
      default() {
        return {};
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
      canvas.width = x * 0.9;
      canvas.height = x * 1.15;
      canvasW = canvas.width;
      w = x / 100;
      ctx.strokeStyle = "#8C42FC"; //填充边框颜色
      //计算属性
      //头部盒子
      this.square(0, 0, canvasW, w * 32.93, "#8C42FC");
      //中间
      this.square(0, w * 32.93, canvasW, w * 64.53, "#fff");
      //bottom
      this.square(0, w * 97.35, canvasW, w * 17.3, "#F5F5F5");
      //有效期
      this.text(
        canvasW / 2,
        w * 92.87,
        w * 3.57 + "px",
        "#FF5D20",
        "有效期至2019-07-25 16:50:40"
      );
      //下方提示文字
      this.text(
        canvasW / 2,
        w * 104.87,
        w * 3.2 + "px",
        "#000",
        "温馨提示：每个邀请码仅限邀请指定商家使用一次,"
      );
      //名字
      this.text(canvasW / 2, w * 19.6, w * 4.5 + "px", "#fff", this.posterContent.name);
      //
      //推荐人
      this.text(
        canvasW / 2,
        w * 26.5,
        w * 3.53 + "px",
        "#D6C2FE",
        `推荐人:${this.posterContent.referrer}`
      );
      this.text(
        canvasW / 2.29,
        w * 109.87,
        w * 3.2 + "px",
        "#000",
        " 若在有效期内未邀请商家，邀请码将失效。"
      );
      //img
      //二维码
      const code = new Image();
      code.src = require(`../../../assets/static/img/index/erweima.png`);
      this.imageArr(code, w * 22, w * 40.1, w * 46.67, w * 46.67);
      //恭喜图片
      let congratulation = new Image();
      congratulation.src = require(`../../../assets/static/img/index/top.png`);
      this.imageArr(congratulation, 0, 10, canvasW, w * 12.27);
      //头像
      let headPortrait = new Image();
      headPortrait.src = require(`../../../assets/static/img/index/${this.posterContent.img}`);
      this.imageArr(headPortrait, w * 22.27, w * 14.8, w * 6.4, w * 6.4);
      ctx.lineWidth = w * 0.8; //设置边框大小
      ctx.strokeRect(0, 0, canvasW, x * 1.15); //对边框的设置
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
      //文本
      ctx.textAlign = "center";
      ctx.fillStyle = color; //设置填充颜色
      ctx.font = ` ${size} Calibri`; //设置字体
      ctx.fillText(textContent, X, Y);
    },
    imageArr(e, X, Y, W, H) {
      //照片
      e.onload = function () {
        ctx.drawImage(e, X, Y, W, H);
      };
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
      //移除节点
      document.body.removeChild(link);
      //海报false
      this.$emit("posterCode", {
        display: false,
        img: "goodsmg.png",
        name: "小鹿养生会所",
        referrer: "逆风如解意",
      });
    },
    convertCanvasToImage() {
      let image = new Image();
      image.src = canvas.toDataURL("image/png");
      this.imageCode = image.src;
    },
    padlock() {
      //海报false
      this.$emit("posterCode", {
        display: false,
        img: "goodsmg.png",
        name: "小鹿养生会所",
        referrer: "逆风如解意",
      });
    },
    suspend() {
      return;
    },
  },
  updated() {
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
    @include ptl(2rem, 50%);
    transform: translateX(-50%);
    animation: showBox 0.5s;
    border-radius: 0.08rem;
  }
  &-preserve {
    @include pbl(1.16rem, 50%);
    @include WH(3rem, 0.8rem);
    @include fzchFa(0.36rem, #fff, 0.8rem);
    border-radius: 0.4rem;
    transform: translateX(-50%);
    background: #ff5d20;
  }
}
@keyframes showBox {
  from {
    transform: translateX(-50%) scale(0.1, 0.1);
  }
  to {
    transform: translateX(-50%) scale(1, 1);
  }
}
</style>
