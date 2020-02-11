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

export async function createCounter(ref, num_shards) {
    var batch = db.batch();

    // Initialize the counter document
    batch.set(ref, { num_shards: num_shards });

    // Initialize each shard with count=0
    for (let i = 0; i < num_shards; i++) {
        let shardRef = ref.collection('shards').doc(i.toString());
        batch.set(shardRef, { count: 0 });
    }

    // Commit the write batch
    return batch.commit();
}

export async function incrementCounter(db, ref, num_shards) {
    // Select a shard of the counter at random
    const shard_id = Math.floor(Math.random() * num_shards).toString();
    const shard_ref = ref.collection('shards').doc(shard_id);

    // Update count
    return shard_ref.update("count", firebase.firestore.FieldValue.increment(1));
}
// [END increment_counter]

// [START get_count]
export async function getCount(ref) {
    // Sum the count of each shard in the subcollection
    return ref.collection('shards').get().then(snapshot => {
        let total_count = 0;
        snapshot.forEach(doc => {
            total_count += doc.data().count;
        });

        return total_count;
    });
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