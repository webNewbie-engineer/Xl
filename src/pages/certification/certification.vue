<template>
  <div>
    <index
      :certificationBlock="certificationBlock"
      @userBtn="userBtn"
      @popupif="popupif"
    ></index>
    <succeed :certificationBlock="certificationBlock"></succeed>
    <fail :certificationBlock="certificationBlock"  @userBtn="userBtn"></fail>
    <popup :popupContentAll="popupContentAll"></popup>
  </div>
</template>
<script>
import index from "./pages/index";
import succeed from "./pages/succeed";
import fail from "./pages/fail";
import popup from "@/common/index/popup";
export default {
  name: "certification",
  data() {
    return {
      certificationBlock: {
        index: true,
        succeed: false,
        fail: false,
      },
      popupContentAll: {
        ifnone: false,
        content: "",
      },
    };
  },
  components: {
    index,
    succeed,
    fail,
    popup,
  },
  methods: {
    userBtn(e) {
      this.certificationBlock = e;
    },
    popupif(e) {
      //弹出层
      this.popupContentAll = e;
    },
  },
  activated() {
    //初始化
    this.certificationBlock = {
      index: true,
      succeed: false,
      fail: false,
    };
    this.popupContentAll = {
      ifnone: false,
      content: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
