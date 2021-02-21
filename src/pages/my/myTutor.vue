<template>
  <div class="myTutor">
    <Headline :HeadlineConten="HeadlineConten" :skip="skip"></Headline>
    <manualOperation @searchbtn="searchbtn"></manualOperation>
    <tutorList :listContent="listContent" @btnList="btnList"></tutorList>
    <confirm
      :confirmContent="confirmContent"
      @btnList="btnList"
      @succeedBtn="succeedBtn"
    ></confirm>
    <inputSearch :inputSearchBlock="inputSearchBlock" @addbtn="addbtn"></inputSearch>
    <searchAdd
      :searchAddContent="searchAddContent"
      @addbtn="addbtn"
      @succeedBtn="succeedBtn"
    ></searchAdd>
    <succeed :succeedBolck="succeedBolck"></succeed>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import manualOperation from "./myTutors/manualOperation";
import tutorList from "./myTutors/tutorList";
import confirm from "./myTutors/confirm";
import axios from "axios";
import inputSearch from "./myTutors/inputSearch";
import searchAdd from "./myTutors/searchAdd";
import succeed from "./myTutors/succeed";
export default {
  name: "myTutor",
  data() {
    return {
      popupContentAll: {
        ifnone: false,
        content: "",
      },
      HeadlineConten: "",
      listContent: [],
      confirmContent: { img: "headPortrait2.jpg" },
      inputSearchBlock: {
        block: false,
        content: {},
      },
      searchAddContent: {
        block: false,
        content: {
          img: "headPortrait2.jpg",
        },
      },
      succeedBolck: false,
      skip: "/my",
    };
  },
  components: {
    Headline,
    manualOperation,
    tutorList,
    confirm,
    inputSearch,
    searchAdd,
    succeed,
    popup: () => import("@/common/index/popup"),
  },
  methods: {
    getHoemInfo() {
      //接口地址
      axios.get("/data/my/Tutor.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      //接口内容
      res = res.data;
      this.listContent = res.tutorArr;
      this.inputSearchBlock.content = res.tutorArr;
    },
    btnList(e) {
      this.confirmContent = e;
    },
    searchbtn(e) {
      //搜索
      this.inputSearchBlock.block = e;
    },
    addbtn(e) {
      //是否正确
      this.searchAddContent = e;
    },
    succeedBtn(e) {
      //成功
      this.succeedBolck = e;
      setTimeout((val) => {
        this.$router.replace("/my");
      }, 2000);
    },
  },
  mounted() {
    //调接口
    this.getHoemInfo();
  },
  activated() {
    this.confirmContent = { img: "headPortrait2.jpg" };
    this.inputSearchBlock = {
      block: false,
      content: {},
    };
    this.searchAddContent = {
      block: false,
      content: {
        img: "headPortrait2.jpg",
      },
    };
    this.succeedBolck = false;
  },
};
</script>
<style lang="scss" scoped>
.myTutor {
  width: 100%;
  background: #fff;
}
</style>
