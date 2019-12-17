import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City.vue'
import Detail from '@/views/Detail.vue'

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
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router
