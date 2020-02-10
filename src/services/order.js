import firebase from 'firebase'

export async function set_order_status(user_uid) {
    var database = firebase.database();
    var s = false;
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
        return false;
    }

    return boolAdmin;
}