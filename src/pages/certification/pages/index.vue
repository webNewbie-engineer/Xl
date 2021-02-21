<template>
  <div v-show="certificationBlock.index">
    <Headline :HeadlineConten="HeadlineConten"></Headline>
    <indexInput ref="user"></indexInput>
    <submit :submitImg="submitImg"></submit>
    <div class="btn" @click="checkID($refs.user.IDcard, $refs.user.user)">提交</div>
  </div>
</template>
<script>
import Headline from "@/common/index/Headline";
import indexInput from "./index/indexInput";
import submit from "./index/submit";
import axios from "axios";
import logoVue from "../../register/components/logo.vue";
export default {
  name: "index",
  props: {
    certificationBlock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      HeadlineConten: "实名认证",
      submitImg: [],
    };
  },
  components: {
    Headline,
    indexInput,
    submit,
  },
  methods: {
    getHoemInfo() {
      axios.get("/data/certification/index.json").then(this.getHoemInfoSucc);
    },
    getHoemInfoSucc(res) {
      //接口内容
      res = res.data;
      this.submitImg = res.img;
    },
    checkCode(val) {
      //身份证开头
      const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      let code = val.substring(17);
      if (p.test(val)) {
        let sum = 0;
        for (var i = 0; i < 17; i++) {
          sum += val[i] * factor[i];
        }
        if (parity[sum % 11] == code.toUpperCase()) {
          return true;
        }
      }
      return false;
    },
    checkDate(val) {
      // 出生日期码校验
      const pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
      if (pattern.test(val)) {
        let year = val.substring(0, 4);
        let month = val.substring(4, 6);
        let date = val.substring(6, 8);
        let date2 = new Date(year + "-" + month + "-" + date);
        if (date2 && date2.getMonth() == parseInt(month) - 1) {
          return true;
        }
      }
      return false;
    },
    checkProv(val) {
      //省级地址码校验
      const pattern = /^[1-9][0-9]/;
      const provs = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
      };
      if (pattern.test(val)) {
        if (provs[val]) {
          return true;
        }
      }
      return false;
    },
    checkID(val, user) {
      //有姓名
      if (user == "") {
        this.$emit("popupif", {
          ifnone: true,
          content: "没有姓名",
        });
        setTimeout((val) => {
          this.$emit("popupif", {
            ifnone: false,
            content: "",
          });
        }, 2000);
        return;
      }
      //判断
      console.log(1);
      if (this.checkCode(val)) {
        let date = val.substring(6, 14);
        if (this.checkDate(date)) {
          if (this.checkProv(val.substring(0, 2))) {
            //获取用户信息
            let arr = JSON.parse(localStorage.getItem("user"));
            let info = {
              name: user,
              id: val,
            };
            arr[arr.length - 1].identityCard = info;
            localStorage.setItem("user", JSON.stringify(arr));
            this.$emit("userBtn", {
              index: false,
              succeed: true,
              fail: false,
            });
            return true;
          }
        }
      }
      this.$emit("userBtn", {
        index: false,
        succeed: false,
        fail: true,
      });
      return false;
    },
  },
  mounted() {
    //调接口
    this.getHoemInfo();
  },
};
</script>
<style lang="scss" scoped>
.btn {
  @include WH(7.02rem, 0.96rem, 0, 1.17rem auto 0);
  @include fzchFa(0.36rem, #fff, 0.96rem);
  border-radius: 0.08rem;
  background: #ff5d20;
}
</style>
