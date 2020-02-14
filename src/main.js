import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import * as firebase from "firebase";
import * as auth from "./services/auth";

const configOptions = {
	apiKey: "AIzaSyAMK_HQ2T_Nto2sWG5n4hLu4-85iRuuLF8",
	authDomain: "pyskapp.firebaseapp.com",
	databaseURL: "https://pyskapp.firebaseio.com",
	projectId: "pyskapp",
	storageBucket: "pyskapp.appspot.com",
	messagingSenderId: "863577719112",
	appId: "1:863577719112:web:2f1cca86e7fe040aaa337d",
	measurementId: "G-Q8NZGSG7QN",
	clientId: "863577719112-hoim91rs6qffbdqc3s774etsin8qohpr.apps.googleusercontent.com"
};

firebase.initializeApp(configOptions);
firebase.auth().languageCode = 'fr';
firebase.analytics();

Vue.config.productionTip = false


new Vue({
	router,
	store,
	vuetify,
	render: function (h) { return h(App) },
	methods: {
		initAuth() {
			return new Promise(resolve => {
				firebase.auth().onAuthStateChanged(user => {
					if (user)
						store.dispatch('UserModule/fetchUser', user);
					else
						store.dispatch('UserModule/fetchUser', null);
					resolve(user)
				})
			})
		}
	},
	created() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				//console.log("APP login --SUCCESS-- DISPATCHING FETCH")
				user.admin = false;
				auth.is_admin(user.uid).then(val => {
					if (val) {
						user.admin = true;
						store.dispatch('UserModule/fetchUser', user)
					}
					else
						store.dispatch('UserModule/fetchUser', user)
				})
			} else {
				store.dispatch('UserModule/fetchUser', null)
			}
		})
	}
}).$mount('#app')
