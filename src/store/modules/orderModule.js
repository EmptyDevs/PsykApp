import * as firebase from "firebase";

const state = {
  orders: [],
  canOrder: true
};

const mutations = {
  SET_ORDERS(state, value) {
    state.orders = value;
  },
  SET_CAN_ORDER(state, value) {
    state.canOrder = value;
  }
};

const getters = {
  getOrder: state => {
    return state.orders;
  },
  getOrderReverse: state => {
    return [...Object.values(state.orders)].reverse();
  },
  getCanOrder: state => {
    return state.canOrder;
  }
};

const actions = {
  fetchOrder({ commit }) {
    firebase
      .database()
      .ref("/orders")
      .on(
        "value",
        function(snapshot) {
          commit("SET_ORDERS", snapshot.val());
        },
        function(errorObject) {
          // console.log("The read failed: " + errorObject.code);
        }
      );
  },
  fetchCanOrder({ commit }) {
    firebase
      .database()
      .ref("/canOrder")
      .on(
        "value",
        function(snapshot) {
          commit("SET_CAN_ORDER", snapshot.val());
        },
        function(errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
  },
  passOrder({ commit, state }, order) {
    if (state.canOrder == false)
        return;
    var d = new Date();
    var id =
      d.getFullYear() +
      "_" +
      d.getMonth() +
      "_" +
      d.getDay() +
      "_" +
      d.getHours() +
      "_" +
      d.getMinutes() +
      "_" +
      d.getSeconds() +
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 25);
    var newKey = firebase
      .database()
      .ref("orders/")
      .push().key;
    // console.log("New key is " + newKey)
    order.id = newKey;
    firebase
      .database()
      .ref("orders/" + newKey)
      .set(order);
  }
};

export const OrderModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
