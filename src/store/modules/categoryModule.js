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
        return firebase.database().ref('/category').on('value', function (snapshot) {
            commit("SET_CATEGORY", snapshot.val())
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
        this.fetchCategory
    },
    deleteProduct({ commit }, product) {

        for (let i = 0; i < state.category.length; i++) {
            if (state.category[i].products) {
                for (let j = 0; j < state.category[i].products.length; j++) {
                    if (state.category[i].products[j].id == product.id) {
                        delete state.category[i].products[j]
                        categoryFunctions.pushCategory(state.category);
                        this.fetchCategory
                        break;
                    }
                }
            }
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