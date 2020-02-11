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
            // console.log("[menuModule] > Fetch done");
            // console.log("Menu > " + JSON.stringify(snapshot.val()))
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