<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities" @siteFu="siteFu"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
      :site="site"
      @siteFu="siteFu"
    ></city-list>
    <city-alphabet :cities="cities" @change="handleLeterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
      site: "",
    };
  },
  components: {
    CityHeader: () => import("./components/Header"),
    CitySearch: () => import("./components/Search"),
    CityList: () => import("./components/List"),
    CityAlphabet: () => import("./components/Alphabet"),
  },
  methods: {
    getCityInfo() {
      axios.get("/data/index/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLeterChange(letter) {
      this.letter = letter;
    },
    siteFu(e) {
      this.site = e;
      localStorage.setItem("site", e);
    },
  },
  mounted() {
    //调接口
    this.getCityInfo();
    //地址
    let arr = localStorage.getItem("site");
    if (arr == undefined || arr == null || arr == "undefined" ) {
      arr = "长沙";
      this.site = arr;
      localStorage.setItem("site", JSON.stringify(arr));
    }
    this.site = arr;
  },
};
</script>
<style lang="scss" scoped></style>
