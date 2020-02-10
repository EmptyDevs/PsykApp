import * as firebase from "firebase";

const state = {
    menu: {},
}

const mutations = {
    SET_MENU(state, value) {
        state.menu = value;
    }
}

const getters = {
    getMenu: state => {
        return state.menu
    }
}

const actions = {
    fetchMenu({ commit }) {
        return firebase.database().ref('/menu').once('value').then(function (snapshot) {
            commit("SET_MENU", snapshot.val());
        });
    }
}

export const MenuModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}