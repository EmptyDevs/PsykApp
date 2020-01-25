import * as auth from '../../services/auth.js'
import router from './../../router'
import firebase from 'firebase'


const state = {
  user: {
    is_logged_in: false,
    data: null,
  }
}

const mutations = {
  SET_LOGGED_IN(state, value){
    state.user.is_logged_in = value;
  },
  SET_USER(state, data) {
    state.user.data = data;
  }
}

const getters = {
  getUser: state => state.user,
  getUserLog: state => state.user.is_logged_in,
  getUserData: state => state.user.data,
}

const actions = {
  fetchUser({ commit }, user) {
    console.log("Fetched")
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
      commit("SET_USER", {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photo: user.photoURL,
        phoneNumber: user.phoneNumber
      });
    } else {
      commit("SET_USER", null);
    }
  }
}

export const UserModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
