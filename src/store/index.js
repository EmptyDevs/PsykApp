import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      {
        id: 1, name: "Alcool", products: [
          { id: 11, name: "Vodka", description: "Pour combien tu cul sec ?", img: "vodka.png" },
          { id: 12, name: "Rhum", description: "Pour une soirée rhumantique", img: "rhum.png" },
          { id: 13, name: "Whisky", description: "Vous voulez un whisky ? - Juste un doigt. - Vous ne voulez pas un whisky d'abord ?", img: "whisky.png" },
          { id: 14, name: "Bieres", description: "Tite bibine ?", img: "bieres.png" },
        ]
      },
      {
        id: 2, name: "Soft", products: [
          { id: 21, name: "Jus d’orange", description: "", img: "jus_orange.png" },
          { id: 22, name: "Café", description: "", img: "cafe.png" },
          { id: 23, name: "Chocolat chaud", description: "", img: "chocolat_chaud.png" },
        ]
      },
      {
        id: 3, name: "Food", products: [
          { id: 31, name: "Gratin dauphinois", description: "", img: "gratin.png" },
          { id: 32, name: "Croque monsieur", description: "", img: "croque_monsieur.png" },
          { id: 33, name: "Croissant", description: "", img: "croissant.png" },
          { id: 34, name: "Apéro", description: "", img: "apero.png" },
        ]
      },
      {
        id: 4, name: "Service", description: "", products: [
        ]
      },
      {
        id: 5, name: "Divers", description: "", products: [
          { id: 51, name: "Proto", description: "", img: "protos.png" },
          { id: 52, name: "Clope", description: "", img: "clope.png" },
          { id: 53, name: "Poppers", description: "", img: "poppers.png" },
          { id: 54, name: "Divers", description: "", img: "herbes_provence.png" },
          { id: 55, name: "Cookies de l'espace", description: "", img: "cookie.jpg" },
        ]
      },
    ],
    menu: {
      title: "Saint Valentin",
      content: [
        {title: "Entrée", value: "surprise"},
        {title: "Plat", value: "songe d'une nuit de février"},
        {title: "Dessert", value: "coeur coulant"},
      ],
    },
    
    cart: [
    ],
    member: [
      { id: 1, name: "Vodka", description: "Coucou", img: "temp-portrait.png" },
      { id: 2, name: "Test1", description: "hiou", img: "temp-portrait.png" },
      { id: 3, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 4, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 5, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 6, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 7, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 8, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 9, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 10, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 11, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 12, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 13, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 14, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 15, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 16, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 17, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 18, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 19, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 20, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 21, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 22, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 23, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 24, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 25, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 26, name: "Vodka", description: "", img: "temp-portrait.png" },
      { id: 27, name: "Vodka", description: "", img: "temp-portrait.png" },
    ]
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
    },
    getMember: state => {
      return state.member
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
