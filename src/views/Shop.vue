<template>
    <v-container id="lateral">
        <v-container>
            <div v-if="isLoaded">
                <v-tabs fixed-tabs color="green" background-color="transparent">
                    <v-tab
                        v-for="(category_, i) in category"
                        :key="i"
                        link
                        @click="scroll_action(category_)"
                    >{{category_.name}}</v-tab>
                </v-tabs>
                <v-row style="padding-bottom: 50px">
                    <v-col xs="1" lg="12">
                        <v-container>
                            <v-container
                                v-for="(category_, i) in category"
                                :key="i"
                                link
                                :id="category_.name"
                            >
                                <v-divider />
                                <span class="overline font-weight-regular">{{category_.name}}</span>
                                <v-row class="light--text" v-if="category_.id != 4">
                                    <v-col
                                        xs="12"
                                        sm="12"
                                        md="6"
                                        lg="4"
                                        v-for="(vals, i) in category_.products"
                                        :key="i"
                                        link
                                    >
                                        <ShopItem :data="vals" />
                                    </v-col>
                                </v-row>
                                <ServiceItem v-else />
                            </v-container>
                        </v-container>
                    </v-col>
                </v-row>
            </div>
            <v-text-field v-else color="success" loading disabled></v-text-field>
        </v-container>

        <v-btn
            v-if="cart.length > 0"
            fab
            large
            dark
            bottom
            fixed
            absolute
            right
            class="v-btn--example"
            color="#7DBF73"
            to="shop/order"
        >
            <v-badge :content="cart.length" overlap>
                <v-icon>mdi-cart</v-icon>
            </v-badge>
        </v-btn>
    </v-container>
</template>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
    bottom: 0;
    margin: 0 0 50px 16px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import ShopItem from "../components/shop/shop_item";
import ServiceItem from "../components/shop/service_item";
import CartItem from "../components/shop/cart_item";
import goTo from "vuetify/es5/services/goto";
export default {
    components: {
        ShopItem,
        ServiceItem,
        CartItem
    },
    computed: {
        ...mapGetters({
            category: "CategoryModule/getCategory",
            cart: "getCart",
            getOrder: "OrderModule/getOrder",
            user: "UserModule/getUser"
        }),
        target() {
            const value = this[this.type];
            if (!isNaN(value)) return Number(value);
            else return value;
        },
        options() {
            return {
                duration: this.duration,
                offset: this.offset,
                easing: this.easing
            };
        },
        element() {
            if (this.selected === "Button") return this.$refs.button;
            else if (this.selected === "Radio group") return this.$refs.radio;
        }
    },
    methods: {
        ...mapActions({
            reset_cart: "reset_cart",
            fetchCategory: "CategoryModule/fetchCategory",
            set_cart_id: "set_cart_id",
            passOrder: "OrderModule/passOrder",
            fetchOrder: "OrderModule/fetchOrder"
        }),
        scroll_action(category) {
            goTo("#" + category.name);
        },
        isPhoneNumber(number) {
            if (number.length != 10) return false;
            for (var i = 0; i < number.length; i++) {
                if (!(number[i] <= "9" && number[i] >= "0")) return false;
            }
            return true;
        },
        command() {
            user.phoneNumber = this.phoneNumber;
            var command = {
                content: this.cart,
                user: this.user.data,
                status: 0
            };
            this.passOrder(command).then(() => {
                this.reset_cart();
                // this.orderSatus.display = true;
                // this.orderSatus.status = "success";
                // this.orderSatus.details =
                //   "Commande passée. Nous allons bientôt revenir vers toi !";
                // this.phoneNumber = "";
            });
        }
    },
    data() {
        return {
            select: {},
            isLoaded: false,
            drawerRight: false,
            orderSatus: {
                display: false,
                status: "warning",
                details: ""
            },
            phoneNumber: ""
        };
    },
    beforeMount() {
        this.fetchCategory().then(() => {
            this.select = this.category[0];
            this.isLoaded = true;
        });
        this.fetchOrder();
    }
};
</script>