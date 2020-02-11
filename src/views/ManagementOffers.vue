<template>
    <v-card class="mx-auto" flat outlined height="100%" width="98%%">
        <v-card-text>
            <h1 class="font-weight-bold">Feed des commandes</h1>
            <v-simple-table fixed-header :loading="loading">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Nom</th>
                            <th class="text-left">Telephone</th>
                            <th class="text-left">Nombre d'éléments</th>
                            <th class="text-left">Status</th>
                            <th class="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in orders" :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.user.displayName}}</td>
                            <td>{{ item.user.phoneNumber }}</td>
                            <td>{{ item.content.length }} items</td>
                            <td>
                                <span v-if="item.status == 0">En Attente</span>
                                <span v-if="item.status == 1">En Cours</span>
                                <span v-if="item.status == 2">Completée</span>
                            </td>
                            <td>
                                <v-btn color="error" icon @click="seeDetail(item.id)">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-btn color="warning" icon @click="seeDetail(item.id)">
                                    <v-icon>mdi-alert-circle-outline</v-icon>
                                </v-btn>
                                <v-btn color="success" icon @click="seeDetail(item.id)">
                                    <v-icon>mdi-check</v-icon>
                                </v-btn>
                                <v-btn color="primary" icon @click="seeDetails(item)">
                                    <v-icon>mdi-card-search</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <OrderDetails v-model="dialog" :order="selectOrder"></OrderDetails>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OrderDetails from "../components/order_details";

export default {
    components: {
        OrderDetails
    },
    data() {
        return {
            loading: true,
            dialog: false,
            selectOrder: {}
        };
    },
    computed: {
        ...mapGetters({
            orders: "OrderModule/getOrder"
        })
    },
    watch: {
        orders(newVal, oldVal) {
            console.log("Orders fetched");
            console.log(JSON.stringify(newVal));
            this.loading = false;
        }
    },
    methods: {
        ...mapActions({
            fetchOrder: "OrderModule/fetchOrder"
        }),
        seeDetails(order) {
            console.log("seeDetails");
            //console.log(JSON.stringify(order))
            this.dialog = false;
            this.selectOrder = Object.assign(this.selectOrder, order);
            this.dialog = true;
            console.log(JSON.stringify(this.selectOrder));
        }
    },
    created() {
        this.loading = true;
    },
    beforeMount() {
        this.fetchOrder();
    }
};
</script>
