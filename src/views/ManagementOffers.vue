<template>
    <v-card v-if="isLoaded" class="mx-auto" flat>
        <v-btn @click="lol" text>click</v-btn>
        <v-card-text>Offers</v-card-text>
        <v-list three-line nav>
            <v-subheader>Commandes</v-subheader>
        </v-list>
    </v-card>
    <v-text-field v-else color="success" loading disabled></v-text-field>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({
            getOrder: "OrderModule/getOrder"
        })
    },
    methods: {
        ...mapActions({
            fetchOrder: "OrderModule/fetchOrder"
        }),
        lol() {
            console.log("lol");
            console.log(JSON.stringify(getOrder));
        }
    },
    data() {
        return {
            isLoaded: false
        };
    },
    computed: {},
    beforeMount() {
        this.fetchOrder().then(() => {
            this.isLoaded = true;
            console.log(this.getOrder);
        });
    }
};
</script>
