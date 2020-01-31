import * as firebase from "firebase";


const state = {
    orders: undefined,
}

const mutations = {
    SET_ORDERS(state, value) {
        state.orders = value;
    }
}

const getters = {
    getOrder: state => {
        return state.orders
    }
}

const actions = {
    fetchOrder({ commit }) {
        console.log(">> fetchorder")
        firebase
            .database()
            .ref("/orders")
            .on(
                "value",
                function (snapshot) {
                    commit("SET_ORDERS", snapshot.val())
                },
                function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                }
            );
    },
    passOrder({ commit }, order) {
        var d = new Date();
        var id = d.getFullYear() + '_' + d.getMonth() + '_' + d.getDay() + '_' + d.getHours() + '_' + d.getMinutes() + '_' + d.getSeconds() + '_' + Math.random().toString(36).substr(2, 25);
        firebase.database().ref('orders/' + id).set({ user: "", details: "", status: false, items: order });
    }
}

export const OrderModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}