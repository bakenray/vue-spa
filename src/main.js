import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV ==='"development"'?true:false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
