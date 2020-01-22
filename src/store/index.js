import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prduits: [
      {id: 0, name:"Vodka", category_id: 1,  img:"assets/vodka.png"},

    ],
    category : [
      {id:1, name: "Drink"}
    ]
  },
  mutations: {
  },
  getters: {
    
  },
  actions: {
  },
  modules: {
  }
})
