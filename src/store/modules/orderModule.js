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
        var id = d.getDay() + '_' + d.getHours() + '_' + d.getMinutes() + '_' + d.getSeconds() + '_' + Math.random().toString(36).substr(2, 25);
        order.id = id;
        var key = firebase.database().ref('orders/').push().key;
        order.id = key;
        firebase.database().ref('orders/' + key).set(order);
    }
}

export const OrderModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}