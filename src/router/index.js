import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home_page'
import Sos from '../components/sospage'
import ShopPage from '../components/shoppage'
import AboutPage from '../components/aboutpage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sos',
    name: 'sospage',
    component: Sos
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
  }
]

const router = new VueRouter({
  routes
})

export default router
