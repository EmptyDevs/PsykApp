import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

import { UserModule } from './modules/userModule'

Vue.use(Vuex)

const state = {
}

const mutations = {
}

const getters = {
}

const actions = {
  ping({ commit }) {
    console.log("Pong")
  }
}

const modules = {
  UserModule,
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
