import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase";


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
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("APP login --SUCCESS-- DISPATCHING FETCH")
        store.dispatch('UserModule/fetchUser', user)
        router.push({name: 'Home'})
      } else {
        console.log("APP login --FAIL-- DISPATCHING FETCH")
        store.dispatch('UserModule/fetchUser', null)
        router.push({name: 'Login'})
      }
    })
  }
}).$mount('#app')
