import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../view/Log/SignUp.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../view/Log/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../view/Log/ForgotPassword.vue')
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: () => import('../view/Accueil.vue')
  },
  {
    path: '/entrainement',
    name: 'entrainement',
    component: () => import('../view/Entrainement.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
