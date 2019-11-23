import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '重庆'
  },
  mutations: {
    changecity (state, city) {
      state.city = city
    }
  }
})
