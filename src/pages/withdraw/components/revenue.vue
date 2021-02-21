<template>
  <div class="revenue" v-show="revenueBolck">
    <div class="revenue-box">
      <div class="revenue-box-particulars">
        <h4 class="title">当前税务明细</h4>
        <table>
          <tr>
            <th>缴纳月份</th>
            <th>收益金额</th>
            <th>缴纳金额</th>
          </tr>
          <tr>
            <td>5月</td>
            <td>￥160.08</td>
            <td>-￥22.22</td>
          </tr>
        </table>
        <div class="amount">
          <div class="amount-box">
            <p class="amount-box-title">总计扣税&nbsp;:</p>
            <p class="amount-box-num">-￥22.22</p>
          </div>
        </div>
      </div>
      <div class="revenue-box-close" @click="userClickMoney">X</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "revenue",
  props: {
    revenueBolck: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    userClickMoney() {
      this.$emit("revenueIF", false);
    },
  },
};
</script>
<style lang="scss">
.revenue {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.45);
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 6rem;
    transform: translate(-50%, -50%);
    animation: showBox 0.5s;
    &-particulars {
      width: 100%;
      background: #fff;
      .title {
        @include fzchFa(0.32rem, #333, 1);
        padding-top: 0.51rem;
      }
      table {
        width: 5.48rem;
        border-bottom: 0.01rem solid #e0e0e0;
        padding: 0 0 0.43rem 0;
        margin: 0.58rem 0 0 0.27rem;
        tr {
          display: flex;
          width: 100%;
          th {
            flex: 1;
            @include fzchFa(0.28rem, #999, 1);
            margin-bottom: 0.41rem;
          }
          td {
            flex: 1;
            @include fzchFa(0.28rem, #333, 1);
            margin-bottom: 0.41rem;
          }
        }
      }
      .amount {
        position: relative;
        @include WH(5.48rem, 1.13rem, 0, 0 auto);
        &-box {
          display: flex;
          @include pbr(0.31rem, 0.02rem);
          &-title {
            @include fzch(0.28rem, #333, 0.28rem);
          }
          &-num {
            @include fzch(0.28rem, #ff5d20, 0.28rem);
            margin-left: 0.23rem;
          }
        }
      }
    }
    &-close {
      @include WH(0.8rem, 0.8rem, 0, 0.54rem auto 0);
      @include fzchFa(0.32rem, #fff, 0.8rem);
      border: 0.02rem solid #ffffff;
      border-radius: 50%;
    }
  }
  @keyframes showBox {
    from {
      transform: translate(-50%, -50%) scale(0.1, 0.1);
    }
    to {
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
}
</style>
