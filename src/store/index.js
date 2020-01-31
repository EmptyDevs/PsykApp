import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

import { UserModule } from './modules/userModule'
import { CategoryModule } from './modules/categoryModule'
import { OrderModule } from './modules/orderModule'
import { MembersModule } from './modules/membersModule'

Vue.use(Vuex)


const state = {
  menu: {
    title: "Saint Valentin",
    content: [
      { title: "Entrée", value: "surprise" },
      { title: "Plat", value: "songe d'une nuit de février" },
      { title: "Dessert", value: "coeur coulant" },
    ],
  },
  cart: [],
}

const mutations = {
  _add_to_cart(state, item) {
    state.cart.push(item);
  },
  _set_cart_id(state, id) {
    state.cart.id = id;
  },
  _delete_item_in_cart(state, _id) {
    const r = state.cart.find(elmt => elmt.id == _id);
    const i = state.cart.indexOf(r);
    if (i == 0) {
      state.cart.shift();
    }
    state.cart.splice(i, i);
  },
  _reset_cart(state) {
    state.cart = [];
  }
}

const getters = {
  stateMenu: state => {
    return state.menu
  },
  getCart: state => {
    return state.cart
  }
}

const actions = {
  ping({ commit }) {
    console.log("Pong")
  },
  set_cart_id({ commit }, id) {
    commit("_set_cart_id", id);
  },
  add_to_cart({ commit }, item) {
    commit("_add_to_cart", item);
  },
  delete_item_in_cart({ commit }, item) {
    commit("_delete_item_in_cart", item);
  },
  reset_cart({ commit }, item) {
    commit("_reset_cart");
  }
}

const modules = {
  UserModule,
  CategoryModule,
  OrderModule,
  MembersModule
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
