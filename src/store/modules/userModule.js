const state = {
	admin: false,
	user: {
		is_logged_in: false,
		data: null,
	}
}

const mutations = {
	SET_LOGGED_IN(state, value) {
		state.user.is_logged_in = value;
	},
	SET_USER(state, data) {
		state.user.data = data;
	},
	SET_ADMIN(state, data) {
		state.admin = data;
	}
}

const getters = {
	getUser: state => state.user,
	getUserLog: state => state.user.is_logged_in,
	getUserData: state => state.user.data,
	getAdminStatus: state => state.admin,
}

const actions = {
	fetchUser({ commit }, user) {
		commit("SET_LOGGED_IN", user !== null);
		if (user) {
			commit("SET_USER", {
				displayName: user.displayName,
				email: user.email,
				uid: user.uid,
				photo: user.photoURL,
				phoneNumber: user.phoneNumber,
			});
			if (user.admin)
				commit("SET_ADMIN", true);
			else
				commit("SET_ADMIN", false);
		} else {
			commit("SET_USER", null);
			commit("SET_ADMIN", false)
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
