<template>
  <div class="popup" v-show="popupContentAll.ifnone">
    <p class="popup-content">{{ popupContentAll.content }}</p>
  </div>
</template>
<script>
export default {
  name: "popup",
  props: {
    popupContentAll: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 40%;
  left: 50%;
  max-width: 80%;
  padding: 0.4rem 0.4rem;
  z-index: 100000000000000000000000000;
  transform: translate(-50%, -50%);
  border-radius: 5%;
  background: rgba(0, 0, 0, 0.5);
  &-content {
    @include fzch(0.28rem, #fff,1.3);
    text-align: center;
  }
}
</style>