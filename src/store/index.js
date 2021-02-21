import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    count: 0,
    dispatchNum: 5,
    searchPulldown: 5
}
export default new Vuex.Store({
    state,
    mutations: {
        updateCount(state, num) {
            state.count = num;
        },
        updateNum(state, num) {
            state.dispatchNum = num;
        },
        updatesearch(state, num) {
            state.searchPulldown = num;
        }
    }
})