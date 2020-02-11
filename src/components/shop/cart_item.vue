<template>
    <v-list-item>
        <v-card width="100%">
            <v-card-text>{{data.name}}</v-card-text>
        </v-card>
        <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-btn
                right
                absolute
                text
                icon
                :color="hover ? 'red' : 'grey'"
                @click="on_minus_click(data)"
            >
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-hover>
    </v-list-item>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        data: Object
    },
    computed: {
        ...mapGetters({
            cart: "getCart"
        }),
        is_inside_cart(id) {
            var c = this.cart;
            for (let index = 0; index < c.length; index++) {
                if (c[index].id == id) {
                    return true;
                }
            }
            return false;
        }
    },
    beforeMount() {},
    methods: {
        ...mapActions(["delete_item_in_cart", "is_in_cart"]),
        on_minus_click(data) {
            this.delete_item_in_cart(data.id);
        }
    },
    data() {
        return {};
    }
};
</script>