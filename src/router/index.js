import Vue from 'vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase';

Vue.use(VueRouter)

function loadView(view) {
	return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

function loadSubView(view, group) {
	return () => import(/* webpackChunkName: "view- */ `[request]" */ `@/views/${view}.vue`)
}

const routes = [
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
		path: '/admin_login',
		name: 'AdminLogin',
		component: loadView('AdminLogin'),
		meta: {
			guest_2: true
		}
	},
	{
		path: '/admin',
		name: 'Admin',
		component: loadView('Admin'),
		children: [
			{
				path: '',
				component: loadView('ManagementOffers'),
			},
			{
				path: '/menu',
				component: loadView('ManagementMenu'),
			},
		],
		meta: {
			admin: true
		}
	}
]

const router = new VueRouter({
	routes
})

import * as auth_service from '../services/auth'


router.beforeEach((to, from, next) => {
	const user = firebase.auth().currentUser;
	const auth = to.matched.some(record => record.meta.auth);
	const guest = to.matched.some(record => record.meta.guest);
	const guest2 = to.matched.some(record => record.meta.guest_2);
	const admin = to.matched.some(record => record.meta.admin);
	var is_admin = false;

	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			auth_service.is_admin(user.uid).then(val => {
				if (val) {
					is_admin = true;
				} else {
					is_admin = false;
				}
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
				} else if (admin) {
					if (is_admin)
						next()
					else
						next({ name: 'AdminLogin' })
				} else if (guest2) {
					if (is_admin)
						next({ name: 'Admin' })
					else
						next()
				} else {
					next()
				}
			});
		} else {
			is_admin = false;
			if (auth) {
				next({ name: 'Login' });
			} else if (guest || guest2) {
				next();
			} else if (admin) {
				next({ name: 'AdminLogin' })
			} else {
				next()
			}
		}
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
	} else if (admin) {
		if (is_admin)
			next()
		else
			next({ name: 'AdminLogin' })
	} else if (guest2) {
		if (is_admin)
			next({ name: 'Admin' })
		else
			next()
	} else {
		next()
	}
})

export default router
