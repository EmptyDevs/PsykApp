import Vue from 'vue'
import VueRouter from 'vue-router'


import * as firebase from 'firebase';

Vue.use(VueRouter)

function loadView(view) {
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
    path: '/shop',
    name: 'Shop',
    component: loadView('Shop'),
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: loadView('About'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: loadView('Admin'),
    meta: {
      guest: true
    }
  },
  {
    path: '/sucessful_login',
    name: 'sucess',
    component: null,
    meta: {
      auth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: loadView('Homepage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadView('Profile'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  var user = firebase.auth().currentUser;
  console.log("Fullpath : " + to.fullPath)
  if (to.fullPath == "/sucessful_login" && user) {
    next({ name: 'Home' });
  }
  if (to.matched.some(record => record.meta.auth)) {
    console.log("Router: auth deteted")
    if (user) {
      console.log("Router: user detected")
      next()
    } else {
      console.log("Router: user not deteted")
      next({
        name: 'Login',
      })
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    console.log("Router: guest deteted")
    if (user) {
      console.log("Router: user detected")
      next({
        name: 'Home',
      })
    } else {
      console.log("Router: user not deteted")
      next()
    }
  } else {
    next()
  }
})

export default router
