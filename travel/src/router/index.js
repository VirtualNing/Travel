import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
