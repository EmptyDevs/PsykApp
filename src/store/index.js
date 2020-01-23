import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      { id: 1, name: "Drink", products: [
        {id: 11, name: "Vodka", img: ""},
        {id: 12, name: "Redbull", img: ""},
        {id: 13, name: "Jager", img: ""},
      ]},
      { id: 2, name: "Food", products: [
        {id: 21, name: "Pain", img: ""},
        {id: 22, name: "Gateau", img: ""},
        {id: 23, name: "Pates", img: ""},
      ] },
      { id: 3, name: "Service", products: [
      ] },
      { id: 4, name: "Smoke", products: [
        {id: 41, name: "Tabac", img: ""},
        {id: 42, name: "Salade", img: ""},
      ] },
    ],
    menu: [
      {
        category: "entree", list: [
        ]
      },
      { category: "plat", list: [] },
      { category: "dessert", list: [] },
    ]
  },
  mutations: {
  },
  getters: {
    stateMenu: state => {
      return state.menu
    },
    getCategory: state => {
      return state.category
    },
  },
  actions: {
  },
  modules: {
  }
})
