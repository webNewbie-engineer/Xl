<template>
  <ul class="content">
    <li
      class="allBox"
      v-for="(item, index) of indexcontent[this.$store.state.count]"
      :key="index"
      @click="router(item.id)"
      v-show="index < $store.state.dispatchNum"
    >
     
          <div class="content_Item">
            <img
              :src="require(`../img/goods/${item.img}`)"
              alt=""
              class="content_Item_Img"
            />
            <h6 class="content_Item_Title">{{ item.name }}</h6>
            <div class="content_Item_Score">
              <span
                class="iconfont"
                v-for="itemIndex of 5"
                :key="itemIndex"
                :style="{ color: itemIndex <= item.star ? '#FF5D20' : '#c1c1c1' }"
                >&#xe627;</span
              >
            </div>
            <p class="content_Item_genre">{{ item.genre }}</p>
            <p class="content_Item_location">{{ item.location }}</p>
            <p class="content_Item_distance">{{ item.distance }}</p>
            <div
              class="content_Item_activity"
              @click.stop="btn(item.name, item.img)"
              :style="{
                background: item.activityColor,
                color: item.activityColor == '#FFF' ? '#FF5D20' : '#fff',
                border: item.activityColor == '#FFF' ? '0.01rem solid #FF5D20' : 'none',
              }"
            >
              {{ item.activity }}
            </div>
          </div>
      
    </li>
    <li class="content_upload">
      {{ IndexcontentContent }}
    </li>
    <li class="adfa"></li>
  </ul>
</template>
<script>
export default {
  name: "Indexcontent",
  props: {
    indexcontent: {
      type: Array,
      default() {
        return [];
      },
    },
    IndexcontentContent: {
      type: String,
      default: "下拉加载",
    },
  },
  methods: {
    router(e) {
      this.$router.push({
        name: "particulars",
        query: {
          list: this.$store.state.count,
          userId: e,
        },
      });
    },
    btn(a, b) {
      //海报
      let arr = JSON.parse(localStorage.getItem("user"));
      if (arr == undefined || arr == null || arr == "") {
        this.$emit("posterCode", {
          display: false,
          img: "goodsmg.png",
          name: "小鹿养生会所",
          referrer: "逆风如解意",
        });
      } else {
        this.$emit("posterCode", {
          display: true,
          img: b,
          name: a,
          referrer: arr[arr.length - 1].name,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  @include WH(100%, 8.97rem);
  padding-top: 0.2rem;
  background: #f5f5f5;
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
  &_upload {
    @include fzchFa(0.26rem, #ccc, 0.52rem);
    background: #f5f5f5;
  }
  .allBox {
    padding-bottom: 0.2rem;
    background: #f5f5f5;
  }
  .adfa {
    @include WH(100%, 1.2rem);
    background: #f5f5f5;
  }
}
</style>
