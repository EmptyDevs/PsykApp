<template>
    <v-card height="100%" width="100%" class="mx-auto" flat outlined transparent>
        <v-card-title>
            <span>Settings</span>
        </v-card-title>
        <v-card-text>
            <div>
                <span>Total order = {{ this.counter }}</span>
            </div>
            <div>
                <v-btn primary @click.stop="createTotalOrder()">Reset Counter</v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import * as order from "../services/order.js";
import * as firebase from "firebase";

export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        createTotalOrder() {
            var db = firebase.database();
            var res = order.createCounter(db.collection("counters").doc(), 10);
            // console.log("Res from creating counter : " + JSON.stringify(res));
            return;
        },
        IncrementCounter() {
            var db = firebase.database();
            let ref = db.collection("counters").doc();
            return order.incrementCounter(db, ref, 10);
        },
        UpdateCounter() {
            var db = firebase.database();
            let ref = db.collection("counters").doc();
            var res = order.getCount(ref);
            this.counter = res;
        }
    },
    created() {
        this.UpdateCounter();
    }
};
</script>
