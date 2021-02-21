import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 3,
    name:"afe"
}
export default new Vuex.Store({
    state
})