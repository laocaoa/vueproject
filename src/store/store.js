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
    },
		changeDownload (state, flag) {
			if (flag === false) {
				try{
					localStorage.download = true
				}catch(e){}
			}
			state.download = flag
		}
  }
})
export default store