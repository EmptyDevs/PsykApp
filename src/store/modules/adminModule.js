const state = {
  user: {
    is_logged_in: false,
    data: null,
  }
}

const mutations = {
  SET_LOGGED_IN(state, value){
    state.user.is_logged_in = value;
    console.log("User Logstate : " + value)
  },
  SET_USER(state, data) {
    state.user.data = data;
    console.log("User Data initialized")
  }
}

const getters = {
  getUser: state => state.user,
  getUserLog: state => state.user.is_logged_in,
  getUserData: state => state.user.data,
}

const actions = {
  fetchUser({ commit }, user) {
    console.log("admin fecth")
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
      commit("SET_USER", {
        displayName: "Admin Psyk SOS",
        email: user.email,
        uid: user.uid,
      });
    } else {
      commit("SET_USER", null);
    }
  }
}

export const UserModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
