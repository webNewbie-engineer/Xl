<template>
  <div class="inviteInvitation" id="dody" v-show="promotionContent.inviteInvitation">
    <selectx :selectContent="selectContent" @selectList="selectList"></selectx>
    <nullList :indexcontent="indexcontent" :listContent="listContent"></nullList>
    <list :listContent="listContent" :listRemind="listRemind"></list>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "inviteInvitation",
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
          num: 5,
        };
      },
    },
  },
  data() {
    return {
      selectContent: ["全部", "待邀请", "邀请中", "已邀请"],
      indexcontent: [],
      listContent: [],
    };
  },
  components: {
    selectx: () => import("./components/select"),
    nullList: () => import("./components/nullList"),
    list: () => import("./components/list"),
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/index/indexGoods.json").then(this.getHoemInfoContent);
    },
    getHoemInfoContent(res) {
      res = res.data;
      this.indexcontent = res.data;
    },
    selectList(e) {
      //切换
      let arr = JSON.parse(localStorage.getItem("inviteInvitation"));
      if (arr == undefined || arr == null || arr == "") {
        arr = [];
      }
      const dataList = [];
      if (e == 0) {
        //列表数据
        this.listContent = arr;
        this.$emit("inviteList", arr);
      } else {
        //按分类获取数据
        for (let item of arr) {
          //查找分类
          if (this.selectContent[e] == item.title) {
            dataList.push(item);
          }
        }
        this.listContent = dataList;
        this.$emit("inviteList", dataList);
      }
    },
  },
  mounted() {
    //调接口
    this.getHoemInfo();
    //获取数据
    let arr = JSON.parse(localStorage.getItem("inviteInvitation"));
    if (arr == undefined || arr == null || arr == "") {
      arr = [];
    }
    //列表数据
    this.listContent = arr;
  },
};
</script>
<style lang="scss" scoped>
.inviteInvitation {
  width: 100%;
  overflow: scroll;
}
</style>
