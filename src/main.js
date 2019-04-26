// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import './assets/rem/rem.js'
import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store/store'
import filter from './utils/directive.js'//自定义指令

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{
	preLoad: 1.3,
	error: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1432049381,444673246&fm=173&app=25&f=JPEG?w=218&h=146&s=0730798645A2B0BECC2D9CAF03007091',
	loading: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1432049381,444673246&fm=173&app=25&f=JPEG?w=218&h=146&s=0730798645A2B0BECC2D9CAF03007091',
	attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
