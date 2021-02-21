<template>
  <ul class="avaSVa">
    <li :class="{'avaSVa-a':Arr[0],'avaSVa-b':Arr[1],'avaSVa-c':Arr[2]}">213</li>
    <li></li>
    <li v-for="(item, index) of arr" :key="index" @click="bnt(index)">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  name: "avaSVa",
  data() {
    return {
      arr: ["avaSVa-a", "avaSVa-b", "avaSVa-c"],
      Arr:[false,true,true],
      num: 0,
    };
  },
  methods: {
    bnt(e) {
      this.num = e;
      console.log(this.num);
    },
  },
};
</script>
<style lang="scss" scoped>
.avaSVa {
  width: 100%;
  li {
    font-size: 0.48rem;
  }
  &-a {
    font-size: 0.32rem;
  }
  &-b {
    color: #eb2121;
  }
  &-c {
    font-size: 0.52rem;
  }
}
</style>
