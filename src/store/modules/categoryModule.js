import * as firebase from "firebase";
import * as categoryFunctions from "../../services/category";

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
            var tp = state.category[index].products;
            if (tp) {
                for (let index2 = 0; index2 < tp.length; index2++) {
                    if (tp[index2].id == object_.id) {
                        tp[index2] = object_;
                        state.category[index].products = tp;
                        categoryFunctions.pushCategory(state.category);
                        this.fetchCategory
                        return;
                    }
                }
            }
        }
    },
    addNewProduct({ commit }, snap) {
        var tpCat = null;
        for (let index = 0; index < state.category.length; index++) {
            if (state.category[index].id == snap.category_.id) {
                tpCat = Object.values(state.category[index].products)
                state.category[index].products[tpCat.length] = snap.object_
                break;
            }
        }
        categoryFunctions.pushCategory(state.category);
    }
}

export const CategoryModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}