import Vue from 'vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase';
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: loadView('Login'),
    meta: {
      guest: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: loadView('Home'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({
          path: "/login",
        })
      }
    })
  } else if (to.matched.some(record => record.meta.guest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          name: "Home",
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
