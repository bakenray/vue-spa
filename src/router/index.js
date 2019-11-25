import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "otherPageName" */ '../components/Demo.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../components/Demo.vue')
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next)=>{})
router.afterEach(()=>{})

export default router
