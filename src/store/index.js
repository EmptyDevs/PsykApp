import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      {
        id: 1, name: "Alcool", products: [
          { id: 11, name: "Vodka", description: "Ceci est une vodka super rigolote", img: "vodka.png" },
          { id: 12, name: "Rhum", description: "", img: "rhum.png" },
          { id: 13, name: "Whisky", description: "", img: "whisky.png" },
          { id: 14, name: "Bieres", description: "", img: "bieres.png" },
        ]
      },
      {
        id: 2, name: "Food", products: [
          { id: 21, name: "Gratin dauphinois", description: "", img: "gratin.png" },
          { id: 22, name: "Croque monsieur", description: "", img: "croque_monsieur.png" },
          { id: 23, name: "Croissant", description: "", img: "croissant.png" },
          { id: 24, name: "Apéro", description: "", img: "apero.png" },
        ]
      },
      {
        id: 3, name: "Service", description: "", products: [
        ]
      },
      {
        id: 4, name: "A fumer et autres", description: "", products: [
          { id: 41, name: "Proto", description: "", img: "protos.png" },
          { id: 42, name: "Clope", description: "", img: "clope.png" },
          { id: 43, name: "Poppers", description: "", img: "poppers.png" },
          { id: 44, name: "Herbes de Provence", description: "", img: "herbes_provence.png" },
        ]
      },
    ],
    menu: [
      {
        category: "entree", list: [
          { name: "Salade" },
          { name: "Tomate" },
          { name: "Carotte" },
        ]
      },
      {
        category: "plat", list: [
          { name: "Poisson" },
          { name: "Boeuf" },
        ]
      },
      {
        category: "dessert", list: [
          { name: "Chocolat" },
          { name: "Poire" },
          { name: "Flan" },
          { name: "Pruneau" },
        ]
      },
    ],
    cart: [
    ],
  },
  mutations: {
    _add_to_cart(state, item) {
      state.cart.push(item)
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
  },
  getters: {
    stateMenu: state => {
      return state.menu
    },
    getCategory: state => {
      return state.category
    },
    getCart: state => {
      return state.cart
    }
  },
  actions: {
    add_to_cart(context, item) {
      context.commit('_add_to_cart', item);
    },
    delete_item_in_cart(context, _id) {
      context.commit('_delete_item_in_cart', _id);
    },
    reset_cart(context) {
      context.commit('_reset_cart')
    },
  },
  modules: {
  }
})
