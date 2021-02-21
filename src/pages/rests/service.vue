<template>
  <div class="service">
    <div class="iconfont" @click="back">&#xe624;</div>
    <div class="service-box">
      <h2 class="service-box-title">添加微信联系您的专属客服</h2>
      <div class="service-box-QRcode">
        <div class="service-box-QRcode-tencentAI">
          <p class="service-box-QRcode-tencentAI-title">
            微信号&nbsp;:<span class="text">{{ serviceTxte }}</span>
          </p>
          <div class="btn" @click="handClickCopy">复制</div>
        </div>
        <img
          :src="serviceImg"
          alt=""
          class="service-box-QRcode-img"
        />
      </div>
      <div class="service-box-save" @click="handClickDownload">保存二维码</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "service",
  data() {
    return {
      serviceTxte: "meiya8383",
      serviceImg: require(`../../assets/static/img/rests/service/QRcode.jpg`),
    };
  },
  methods: {
    handClickCopy() {
      //复制
      let url = this.serviceTxte;
      let oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.remove();
    },
    handClickDownload() {
      var link = document.createElement("a");
      //设置下载的文件名
      link.download = "filename";
      link.style.display = "none";
      //设置下载路径
      link.href = this.serviceImg;
      //触发点击
      document.body.appendChild(link);
      link.click();
      //移除节点
      document.body.removeChild(link);
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>
<style lang="scss" scoped>
.service {
  position: relative;
  @include WH(100%, 100vh);
  background: #fff;
  .iconfont {
    @include ptl(0.37rem, 0.29rem);
    @include fzc(0.35rem, #424242);
  }
  &-box {
    @include ptl(1.47rem, 0);
    width: 100%;
    &-title {
      @include fzc(0.36rem, #333);
      text-align: center;
    }
    &-QRcode {
      @include WH(6rem, 6.78rem, 0, 1.01rem auto 0);
      border: 0.01rem solid #cccccc;
      &-tencentAI {
        position: relative;
        @include WH(100%, 1.06rem);
        background: #f0f0f0;
        &-title {
          @include ptl(0.39rem, 0.55rem);
          @include fzc(0.28rem, #333);
          .text {
            @include fzc(0.28rem, #ff5d20);
            margin-left: 0.2rem;
          }
        }
        .btn {
          @include ptr(0.25rem, 0.49rem);
          @include fzc(0.24rem, #fff);
          padding: 0.13rem 0.21rem;
          border-radius: 0.24rem;
          background: #ff5d20;
        }
      }
      &-img {
        @include WH(5.18rem, 5.18rem, 0, 0.25rem 0 0 0.42rem);
      }
    }
    &-save {
      @include WH(2.28rem, 0.64rem, 0, 0.2rem auto 0);
      @include fzchFa(0.28rem, #333, 0.64rem);
      border: 0.01rem solid #ccc;
      border-radius: 0.32rem;
    }
  }
}
</style>
