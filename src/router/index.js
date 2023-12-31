import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/Home.vue'
import SignUp from '../components/signup.vue'
import Login from '../components/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
