import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(vueSwiper)
import qrcode from 'vue-qrcode-directive'
Vue.use(qrcode)
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/css/border.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")