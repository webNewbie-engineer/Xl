<template>
  <div class="required">
    <img
      src="~@/assets/static/img/rests/required/required01.png"
      alt=""
      class="required-img"
    />
    <img
      src="~@/assets/static/img/rests/required/required02.png"
      alt=""
      class="required-img"
    />
    <img
      src="~@/assets/static/img/rests/required/required03.jpg"
      alt=""
      class="required-img"
    />
     <img
      src="~@/assets/static/img/rests/required/required04.png"
      alt=""
      class="required-img"
    />
  </div>
</template>
<script>
export default {
  name: "required",
  data() {
    return {
      requiredimg: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.required {
    position: relative;
  width: 100%;
  &-img {
    width: 100%;
    margin-bottom: -0.02rem;
  }
 
}
</style>
