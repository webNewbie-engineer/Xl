<template>
  <div class="searchContent" v-show="listContent.length != 0" id="dody">
    <div
      class="allBox"
      v-for="(item, index) of listContent"
      :key="index"
      v-show="index <= $store.state.searchPulldown"
    >
      <keep-alive>
        <router-link
          :to="{
            name: 'particulars',
            query: { list: $store.state.count, userId: item.id },
          }"
        >
          <div class="searchContent_Item">
            <img
              :src="require(`../../../assets/static/img/index/${item.img}`)"
              alt=""
              class="searchContent_Item_Img"
            />
            <h6 class="searchContent_Item_Title">{{ item.name }}</h6>
            <div class="searchContent_Item_Score">
              <span
                class="iconfont"
                v-for="itemIndex of 5"
                :key="itemIndex"
                :style="{
                  color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1',
                }"
                >&#xe627;</span
              >
            </div>
            <p class="searchContent_Item_genre">{{ item.genre }}</p>
            <p class="searchContent_Item_location">{{ item.location }}</p>
            <p class="searchContent_Item_distance">{{ item.distance }}</p>
            <div
              class="searchContent_Item_activity"
              :style="{
                background: item.activityColor,
                color: item.activityColor == '#FFF' ? '#FF5D20' : '#fff',
                border: item.activityColor == '#FFF' ? '0.01rem solid #FF5D20' : 'none',
              }"
            >
              {{ item.activity }}
            </div>
          </div>
        </router-link>
      </keep-alive>
    </div>
    <p class="searchContent-Font">{{ PulldownContent }}</p>
  </div>
</template>
<script>
export default {
  name: "searchContent",
  props: {
    listContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      PulldownContent: "下拉加载",
    };
  },
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
          if (this.$store.state.searchPulldown <= this.listContent.length) {
            this.PulldownContent = "正在加载...";
            setTimeout((val) => {
              this.$store.state.searchPulldown += 5;
              if (this.$store.state.searchPulldown < this.listContent.length) {
                this.PulldownContent = "下拉加载";
              } else {
                this.PulldownContent = "全部结果加载完毕";
              }
            }, 2000);
          }
          this.shows = false;
        }
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.searchContent {
  @include WH(100%, 84vh, 0.2rem 0 0 0, 0);
  overflow: scroll;
  &_Item {
    position: relative;
    @include WH(7.02rem, 1.64rem, 0, 0 auto);
    border-radius: 0.08rem;
    background: #ffffff;
    &_Img {
      @include ptl(0.16rem, 0.16rem);
      @include WH(1.32rem, 1.32rem);
      border-radius: 0.08rem;
    }
    &_Title {
      width: 2rem;
      @include ptl(0.24rem, 1.73rem);
      @include fzc(0.32rem, #333);
      @include omitN0;
    }
    &_Score {
      @include ptl(0.73rem, 1.76rem);
      span {
        font-size: 0.16rem;
        margin-right: 0.05rem;
      }
    }
    &_genre {
      width: 0.85rem;
      @include ptl(0.72rem, 3.3rem);
      @include fzc(0.2rem, #999);
      @include omitN0;
    }
    &_location {
      width: 1.5rem;
      @include ptl(1.19rem, 1.72rem);
      @include fzc(0.24rem, #666);
      @include omitN0;
    }
    &_distance {
      width: 0.65rem;
      @include ptl(1.21rem, 3.4rem);
      @include fzc(0.24rem, #666);
      @include omitN0;
    }
    &_activity {
      @include ptr(0.7rem, 0.16rem);
      font-size: 0.26rem;
      border-radius: 0.24rem;
      padding: 0.11rem 0.25rem 0.12rem 0.25rem;
    }
  }
  .allBox {
    padding-bottom: 0.2rem;
    background: #f5f5f5;
  }
  &-Font {
    @include fzc(0.28rem, #333);
    text-align: center;
    margin: 0.2rem 0 0.3rem 0;
  }
}
.searchContent::-webkit-scrollbar {
  display: none;
}
</style>
