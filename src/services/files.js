import firebase from 'firebase'

export async function pushFile(file) {
    var ref = firebase.storage().ref("images/products/" + file.name);
    ref.put(file);
}

export async function getNewProductID(category) {
    var goodID = "";
    var db = firebase.database();
    await db.ref('/category').once('value').then(function (snapshot) {
        for (let index = 0; index < snapshot.val().length; index++) {
            if (snapshot.val()[index].name == category.name) {
                var a = snapshot.val()[index].products.length + 1;
                goodID = "" + category.id.toString() + a.toString();
            }
        }
    });
    return goodID;
}