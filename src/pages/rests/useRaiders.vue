<template>
  <div class="useRaiders">
    <img
      :src="require(`../../assets/static/img/rests/useRaiders/${item}`)"
      alt=""
      class="useRaiders-img"
      v-for="(item, index) of useRaidersimg"
      :key="index"
    />
  </div>
</template>
<script>
export default {
  name: "useRaiders",
  data() {
    return {
      useRaidersimg: [
        "useRaiders01.png",
        "useRaiders02.png",
        "useRaiders03.png",
        "useRaiders04.png",
        "useRaiders05.png",
        "useRaiders06.png",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.useRaiders {
  width: 100%;
  &-img {
    width: 100%;
    margin-bottom:-0.02rem;
  }
}
</style>
