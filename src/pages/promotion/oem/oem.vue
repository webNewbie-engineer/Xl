<template>
  <div class="oem" v-show="promotionContent.oem" id="dody">
    <nullList :nullListContent="nullListContent" :listContent="listContent"></nullList>
    <list :listContent="listContent" :listRemind="listRemind"></list>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "oem",
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
      //推荐礼包内容
      this.nullListContent = res.data.giftBag;
    },
  },
  mounted() {
    this.getHoemInfo();
    //获取礼包列表
    let arr = JSON.parse(localStorage.getItem("carnival"));
    if (arr == null || arr == undefined) {
      arr = [];
    }
    this.listContent = arr;
  },
};
</script>
<style lang="scss" scoped>
.oem {
  width: 100%;
  overflow: scroll;
}
</style>
