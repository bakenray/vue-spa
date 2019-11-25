import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import mutations from './mutations'
import actions from './actions'


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
