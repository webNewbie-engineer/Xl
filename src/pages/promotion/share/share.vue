<template>
  <div class="share" v-show="promotionContent.share">
    <nullList :nullListContent="nullListContent" :listContent="listContent"></nullList>
    <list :listContent="listContent" :listRemind="listRemind"></list>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "share",
  props: {
    promotionContent: {
      type: Object,
      default() {
        return {
          inviteInvitation: true,
          oem: false,
          share: false,
        };
      },
    },
    listRemind: {
      type: Object,
      default() {
        return {
          title: "下拉加载",
          num: 3,
        };
      },
    },
  },
  data() {
    return {
      nullListContent: [],
      listContent: [],
    };
  },
  components: {
    nullList: () => import("./components/nullList"),
    list: () => import("./components/list"),
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/share/share.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      res = res.data;
      //nullList内容(今日必分享赚收益)
      this.nullListContent = res.data.square;
    },
  },
  mounted() {
    this.getHoemInfo();
    //分享列表
    let arr = JSON.parse(localStorage.getItem("share"));
    if (arr == undefined) {
      arr = [];
    }
    //列表数据
    this.listContent = arr;
  },
};
</script>
<style lang="scss" scoped>
.share {
  width: 100%;
  background: #f5f5f5;
}
</style>
