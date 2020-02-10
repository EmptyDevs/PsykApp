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

//order.vue
export function format_cart(cart) {
    var formated_cart = {}
    var items = []
    for (var i = 0; i < cart.length; i++) {
        items.push({ id: cart[i].id, name: cart[i].name })
    }
    formated_cart.length = i;
    formated_cart.items = items;
    return formated_cart;
}

export function format_user(user) {
    console.log(JSON.stringify(user));
}