import Vue from 'vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase';

import ManagementOffers from "../views/ManagementOffers"
import ManagementMenu from '../views/ManagementMenu'
import Admin from '../views/Admin'

Vue.use(VueRouter)

function loadView(view) {
	return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
	{
		path: '/',
		name: 'About',
		component: loadView('About'),
		meta: {
			auth: true
		}
	},
	{
		path: '/Menu',
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
		path: '/admin_login',
		name: 'AdminLogin',
		component: loadView('AdminLogin'),
		meta: {
			guest_2: true
		}
	},
	{
		path: '/manage_offers',
		name: 'AdminOffers',
		component: loadView('ManagementOffers'),
		meta: {
			admin: true
		}
	},
	{
		path: '/manage_menu',
		name: 'AdminMenu',
		component: loadView('ManagementMenu'),
		meta: {
			admin: true
		}
	},
	{
		path: '/manage_settings',
		name: 'AdminSettings',
		component: loadView('ManagementSettings'),
		meta: {
			admin: true
		}
	},
	// {
	// 	path: '*'
	// 	component: 
	// }
]

const router = new VueRouter({
	routes
})

import * as auth_service from '../services/auth'

// const isLogged = true;
// const isAdmin = true;

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
				// console.log("A")
				if (val) {
					// console.log("B1")
					is_admin = true;
				} else {
					// console.log("B2")
					is_admin = false;
				}
				if (auth) {
					// console.log("C1")
					if (user)
						next();
					else
						next({ name: 'Login' });
				} else if (guest) {
					// console.log("C2")
					if (user)
						next({ name: 'Home' })
					else
						next();
				} else if (admin) {
					// console.log("C3")
					if (is_admin)
						next()
					else
						next({ name: 'AdminLogin' })
				} else if (guest2) {
					// console.log("C4")
					if (is_admin)
						next({ name: 'Home' })
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

	// if (auth) {
	// 	if (user)
	// 		next();
	// 	else
	// 		next({ name: 'Login' });
	// } else if (guest) {
	// 	if (user)
	// 		next({ name: 'Home' })
	// 	else
	// 		next();
	// } else if (guest2) {
	// 	if (is_admin)
	// 		next({ name: 'Home' })
	// 	else
	// 		next()
	// } else if (admin) {
	// 	if (is_admin)
	// 		next()
	// 	else
	// 		next({ name: 'AdminLogin' })
	// } else {
	// 	next()
	// }
})

export default router
