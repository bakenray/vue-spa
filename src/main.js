import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './services/api'
import Public from './components/Public.vue'
Vue.config.productionTip = process.env.NODE_ENV ==='"development"'?true:false
Vue.prototype.$api = api

Vue.component('Public',Public)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
