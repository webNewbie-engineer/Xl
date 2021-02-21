<template>
  <div class="search">
    <div class="search_Left">
      <keep-alive>
        <router-link to="City">
          <div class="city">{{ site }}</div>
        </router-link>
      </keep-alive>
       <keep-alive>
        <router-link to="City">
         <div class="arrows iconfont">&#xe695;</div>
        </router-link>
      </keep-alive>
    </div>
    <keep-alive>
      <router-link to="/search">
        <input type="text" :placeholder="searchplaceholder" class="searchBox" />
      </router-link>
    </keep-alive>
    <div class="searchIconfont iconfont">&#xe632;</div>
  </div>
</template>
<script>
export default {
  name: "search",
  props: {
    searchplaceholder: {
      type: String,
      default: "",
    },
    site: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  height: 0.64rem;
  background: #ff5d20;
  &_Left {
    display: flex;
    margin-left: 0.34rem;
    .city {
      width: 0.6rem;
      @include fzchFa(0.3rem, #fff, 0.64rem);
      @include omitN0;
    }
    .arrows {
      @include fzc(0.146rem, #fff);
      margin: 0.22rem 0 0 0.117rem;
    }
  }
  .searchBox {
    @include WH(5.64rem, 0.64rem);
    background: #ffffff;
    border: none;
    outline: none;
    text-indent: 0.85rem;
    font-size: 0.28rem;
    border-radius: 0.32rem;
    margin-left: 0.387rem;
  }
  &Iconfont {
    @include ptl(0.18rem, 1.91rem);
    @include fzc(0.28rem, #999999);
  }
}
</style>
