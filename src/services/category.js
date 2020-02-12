import firebase from 'firebase'

export async function pushCategory(category) {
    var database = firebase.database();
    database.ref('category/').set(category);
}