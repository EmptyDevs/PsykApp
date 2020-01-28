import firebase from 'firebase'

export async function is_admin(user_uid) {
    var database = firebase.database();
    var boolAdmin = false;
    await database.ref('admin/uid').once('value',
        function (sucess) {
            console.log("u r admin");
            boolAdmin = true;
        },
        function (notsucess) {
            console.log("u r not admin bich");
            boolAdmin = false;
        }
    )
    return boolAdmin;
}