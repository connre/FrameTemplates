import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/element',
    name: 'element',
    component:()=>import('../views/Element.vue')
  },
  {
    path: '/userLogin',
    name:'Login',
    component: () => import('../views/User/Login.vue')
  },
  {
    path: '/register',
    name:'register',
    component: () => import('../views/User/Register.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
