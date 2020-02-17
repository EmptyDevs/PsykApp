import firebase from 'firebase'

export async function is_admin(user_uid) {
    var database = firebase.database();
    var boolAdmin = false;
    try {
        await database.ref('admin/uid').once('value',
            function (sucess) {
                boolAdmin = true;
            },
            function (notsucess) {
                boolAdmin = false;
            }
        )
    } catch (error) {
        console.log(error)
        return false;
    }

    return boolAdmin;
}