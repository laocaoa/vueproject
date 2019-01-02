import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters: {
    doubleCity (state) {
      return state.city + state.city
    }
  },
  actions: {
    changeCityFiveSeconds (context, city) {
      setTimeout(() => {
      	context.commit('changeCity', city)
      },5000)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
export default store