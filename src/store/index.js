import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prduits: [
      { id: 0, name: "Vodka", category_id: 1, img: "" },
      { id: 1, name: "Pain", category_id: 2, img: "" },
      { id: 2, name: "Ricard", category_id: 1, img: "" },
      { id: 3, name: "Biere", category_id: 1, img: "" },
    ],
    category: [
      { id: 1, name: "Drink" },
      { id: 2, name: "Food" },
      { id: 3, name: "Service" },
      { id: 4, name: "Smoke" },
    ],
    menu: [
      {
        category: "entree", list: [
          { name: "ok" },
          { name: "oko" },
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
    stateCategory: state => {
      return state.category
    },
  },
  actions: {
  },
  modules: {
  }
})
