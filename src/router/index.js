import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home_page'
import ShopPage from '../components/shoppage'
import AboutPage from '../components/aboutpage'
import Waiting from '../view/waiting'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shoppage',
    component: ShopPage
  },
  {
    path: '/about',
    name: 'aboutpage',
    component: AboutPage
  },
  {
    path: '/waiting',
    name: 'waiting',
    component: Waiting
  }
]

const router = new VueRouter({
  routes
})

export default router
