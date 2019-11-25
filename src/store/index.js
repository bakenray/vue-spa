import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups:[1]
  },
  mutations,
  actions,
  modules: {
    moduleA
  },
  getters:{
    getGroups(state){
      return state.groups
    }
  }
})
