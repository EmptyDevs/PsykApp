import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      {
        id: 1, name: "Drink", products: [
          { id: 1, name: "Vodka", img: "vodka.jpg" },
          { id: 12, name: "Redbull", img: "redbull.jpg" },
          { id: 1, name: "Jager", img: "jager.jpg" },
        ]
      },
      {
        id: 2, name: "Food", products: [
          { id: 21, name: "Pain", img: "pain.jpg" },
          { id: 22, name: "Gateau", img: "pain.jpg" },
          { id: 23, name: "Pates", img: "pain.jpg" },
        ]
      },
      {
        id: 3, name: "Service", products: [
        ]
      },
      {
        id: 4, name: "Smoke", products: [
          { id: 41, name: "Tabac", img: "" },
          { id: 42, name: "Salade", img: "" },
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
