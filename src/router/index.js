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
    component: loadView('AdminLogin'),
    meta: {
      special: true
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
  },

  {
    path: '/sucess_login',
    name: 'LoadingLogin',
    component: loadView('LoadingLogin'),
    meta: {
      temp: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const auth = to.matched.some(record => record.meta.auth);
  const guest = to.matched.some(record => record.meta.guest);
  const special = to.matched.some(record => record.meta.special);

  console.log("Fullpath: " + from.fullPath);
  firebase.auth().onAuthStateChanged(user => {
    if (auth && user)
      next();
    else if (guest && user)
      next({ name: 'Home' });
    else if (!user && auth)
      next({ name: 'Login' });
    return;
  })
  if (auth) {
    if (user)
      next();
    else
      next({ name: 'Login' });
  } else if (guest) {
    if (user)
      next({ name: 'Home' })
    else
      next();
  } else if (special) {
    console.log("Router: special deteted")
    next()
  } else {
    next()
  }
})

export default router
