import * as firebase from "firebase";

const state = {
    members: [
    ],
}

const mutations = {
    SET_CATEGORY(state, value) {
        state.members = value;
    }
}

const getters = {
    getMembers: state => {
        return state.members
    }
}

const actions = {
    fetchMembers({ commit }) {
        console.log("[membersModule] > fetch done")
        return firebase.database().ref('/members').once('value').then(function (snapshot) {
            commit("SET_CATEGORY", snapshot.val());
        });
    }
}

export const MembersModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}