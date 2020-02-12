import * as firebase from "firebase";

const state = {
    category: [
    ],
}

const mutations = {
    SET_CATEGORY(state, value) {
        state.category = value;
    }
}

const getters = {
    getCategory: state => {
        return state.category
    }
}

const actions = {
    fetchCategory({ commit }) {
        return firebase.database().ref('/category').once('value').then(function (snapshot) {
            commit("SET_CATEGORY", snapshot.val());
        });
    },
    updateCategory({ commit }, object_) {
        for (let index = 0; index < state.category.length; index++) {
            console.log(Object.values(state.category[index]))
            console.log(Object.values(state.category[index]).length)
        }
    }
}

export const CategoryModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}