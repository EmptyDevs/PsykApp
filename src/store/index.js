import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

import { UserModule } from './modules/userModule'
import { CategoryModule } from './modules/categoryModule'
import { OrderModule } from './modules/orderModule'

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
  member: [
    { id: 1, name: "Alagy Clara", description: "Attachée à la défense de l’environnement, elle se nourrit exclusivement de feuilles de génépi, et se lave en utilisant l’eau usée de son voisin.", img: "temp-portrait.png" },
    { id: 2, name: "Alliod Titouan", description: "UN, DOS, ATENCION! Tu le retrouveras au Drak accroché à la barrière, la tête bougeant frénétiquement.", img: "temp-portrait.png" },
    { id: 3, name: "Amrani Romain", description: "Un pied en moins à cause d’un sombre accident de pierrade de raclette, il n’arrêtera pas pour autant ce met somptueux.", img: "temp-portrait.png" },
    { id: 4, name: "Auriol Etienne", description: "Il a du coffre et ça s’entend. Avec son crâne rasé et bientôt luisant, il préside le royaume des rêves d’une main de maître.", img: "temp-portrait.png" },
    { id: 5, name: "Bigay Adèle", description: "Respo bouffe, son passe temps est d’arroser votre nourriture d’un zeste de mononucléose.", img: "temp-portrait.png" },
    { id: 6, name: "Bochet Gaëlle", description: "Cuisses en béton et montée sur ressorts, elle contribue à la croissance des buissons municipaux avec le contenu de son estomac les lendemains de BIE.", img: "temp-portrait.png" },
    { id: 7, name: "Bonal Maelle", description: "Petite par sa taille, mais grande par le coeur, kirikou n’est pas grand mais il est vaillant. 50% de son poids se compose de raclette.", img: "temp-portrait.png" },
    { id: 8, name: "Boucard Clément", description: "Quand il n’est pas à la recherche d’une enveloppe perdue, on le retrouve au front d’une bataille de patates.", img: "temp-portrait.png" },
    { id: 9, name: "Chatelet Nicolas", description: "Beaucoup d’idées proposées, pas toutes réalisées, une minute de silence pour les poissons nageant dans la polia.", img: "temp-portrait.png" },
    { id: 10, name: "De Sepulveda Juliette", description: "Depuis ce fameux week end de novembre, elle est devenue la meilleure pote de Bernard le sculpteur de femme nue dans les montagnes.", img: "temp-portrait.png" },
    { id: 11, name: "Ghestem Alexandre", description: "Travaille plus que ton père sur le chantar, pour lui se lever à 3h est dérisoire.", img: "temp-portrait.png" },
    { id: 12, name: "Gobert Antoine", description: "Aussi perdu que ta voix après l’amphi Weil.", img: "temp-portrait.png" },
    { id: 13, name: "Grivot Hugo", description: "Venant d’un pays où la poudre est reine, c’est pourtant cette dernière qui lui a coûté une cheville.", img: "temp-portrait.png" },
    { id: 14, name: "Guillon Armel", description: "Rappeur en devenir, il n’a pas brûlé ses cahiers, il a postiché tôt le matin. Merci c’est gentil.", img: "temp-portrait.png" },
    { id: 15, name: "Jovinel Melvin", description: "Malgré son accent, il ne couche pas avec sa cousine... Quoique.", img: "temp-portrait.png" },
    { id: 16, name: "Lacombe Emilie", description: "Syndrome hyperactif aigu. Mouvements bordéliques permanents. Nous préconisons une dose journalière de THC pour calmer ces symptômes.", img: "temp-portrait.png" },
    { id: 17, name: "Maestripieri Brice", description: "Après avoir perdu les élections présidentielles, il se console maintenant dans les bras de sa chère et tendre.", img: "temp-portrait.png" },
    { id: 18, name: "Malot Alexis", description: "Jamais sans son gilet de sauvetage, il n’hésita pas à se travestir pour remporter le titre de miss Wei, en vain.", img: "temp-portrait.png" },
    { id: 19, name: "Menetrier Suzie", description: "Notre hypothèse : un taux excessif de sang dans son corps, lui permettant de boire plus de 10 litres d’alcool par soirée. Un des piliers (de bar) de notre organisation.", img: "temp-portrait.png" },
    { id: 20, name: "Mesana Paul", description: "Très fier de son titre de mister bendo, il reste néanmoins notre meilleur joueur quand il s’agit de décorer un sapin.", img: "temp-portrait.png" },
    { id: 21, name: "Michel Thomas", description: "Sa meilleure excuse : gnagnagna j’ai qu’une maing !!!", img: "temp-portrait.png" },
    { id: 22, name: "Paumier Mathieu", description: "L’aîné de l’équipe, il est pompier, ingénieur, coureur, cycliste, nageur, strip teaser. Une fois il a traversé au passage piéton alors que c’était rouge.", img: "temp-portrait.png" },
    { id: 23, name: "Rabaseda Colette", description: "Notre maman à tous, un pilier de l’équipe, un élément essentiel. Sans elle, nous serions 26.", img: "temp-portrait.png" },
    { id: 24, name: "Reynier Guillaume", description: "Un jeu d’acteur hors-pair, un seul teaser a lancé sa carrière. Il a déjà son étoile sur Hollywood Boulevard.", img: "temp-portrait.png" },
    { id: 25, name: "Ricou Clara", description: "Altiste mélomane, elle a la main verte et apprécie les arômes naturels chlorophylliens.", img: "temp-portrait.png" },
    { id: 26, name: "Saint-Cricq Clara", description: "Tu as sans doute remarqué ses talents de danseuse, tout l’amphi au dévoilement a succombé.", img: "temp-portrait.png" },
    { id: 27, name: "Trouche Vincent", description: "Expert en photobomb, peut ruiner votre vie sociale en un seul photomontage.", img: "temp-portrait.png" },
  ]
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
  },
  getMember: state => {
    return state.member
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
  OrderModule
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
