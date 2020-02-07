<template>
  <v-container id="lateral">
    <v-navigation-drawer v-model="drawerRight" app clipped temporary right>
      <v-list dense class="inline">
        <v-list-item>
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>
        <v-text-field
          style="
        padding: 10px
        "
                    v-model="phoneNumber"
                    type="text"
                    label="Numéro de téléphone"
                ></v-text-field>

        <v-alert v-if="orderSatus.display" :type="orderSatus.status">{{this.orderSatus.details}}</v-alert>
        <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="500px">
          <v-list-item v-for="(product, i) in cart" :key="i" link style="padding: 5px">
            <CartItem :data="product" />
          </v-list-item>
        </v-sheet>
        <v-btn left bottom absolute text color="black" class="overline" @click="reset_cart">Vider panier</v-btn>
        <v-btn right bottom absolute text color="black" class="overline" to="shop/order">Commander</v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <div v-if="isLoaded">
        <v-row style="padding-bottom: 50px">
          <v-col xs="1" lg="10">
            <v-container>
              <v-tab max-width="25%" class="font-weight-thin">
                <v-select
                  v-model="select"
                  :items="category"
                  item-text="name"
                  item-value="id"
                  label="Catégories"
                  persistent-hint
                  return-object
                  single-line
                />
              </v-tab>

                            <div v-if="select.id != 4" align="center" justify="center">
                                <v-row class="light--text">
                                    <v-col
                                        xs="12"
                                        sm="12"
                                        md="6"
                                        lg="4"
                                        v-for="(vals, i) in select.products"
                                        :key="i"
                                        link
                                    >
                                        <ShopItem :data="vals" />
                                    </v-col>
                                </v-row>
                            </div>
                            <ServiceItem v-else />
                        </v-container>
                    </v-col>
                </v-row>
            </div>
            <v-text-field v-else color="success" loading disabled></v-text-field>
        </v-container>
        <v-btn
            fab
            large
            dark
            bottom
            fixed
            absolute
            right
            class="v-btn--example"
            color="#7DBF73"
            @click="drawerRight = !drawerRight"
        >
            <v-icon>mdi-cart</v-icon>
        </v-btn>
    </v-container>
    <v-btn
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
      <v-icon>mdi-cart</v-icon>
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
import * as firebase from "firebase";

export default {
    components: {
        ShopItem,
        ServiceItem,
        CartItem
    },
<<<<<<< HEAD
    computed: {
        ...mapGetters({
            category: "CategoryModule/getCategory",
            cart: "getCart",
            getOrder: "OrderModule/getOrder",
            user: "UserModule/getUser"
        })
    },
    methods: {
        ...mapActions({
            reset_cart: "reset_cart",
            fetchCategory: "CategoryModule/fetchCategory",
            set_cart_id: "set_cart_id",
            passOrder: "OrderModule/passOrder",
            fetchOrder: "OrderModule/fetchOrder"
        }),
        isPhoneNumber(number) {
            if (number.length != 10) return false;
            for (var i = 0; i < number.length; i++) {
                if (!(number[i] <= "9" && number[i] >= "0")) return false;
            }
            return true;
        },
        command() {
            var number = this.phoneNumber;
            if (!number) {
                this.orderSatus.display = true;
                this.orderSatus.status = "error";
                this.orderSatus.details =
                    "Tu n'as pas renseigné ton numéro de téléphone. Tu ne peux donc pas commander.";
                return;
            }
            if (!this.isPhoneNumber(number)) {
                this.orderSatus.display = true;
                this.orderSatus.status = "error";
                this.orderSatus.details =
                    "Numéro de téléphone non valide. Il doit être du type 0123456789";
                this.phoneNumber = "";
                return;
            }
            var command = {
                content: this.cart,
                user: this.user.data,
                phone_number: this.phoneNumber
            };
            this.passOrder(command).then(() => {
                this.orderSatus.display = true;
                this.orderSatus.status = "success";
                this.orderSatus.details =
                    "Commande passée. Nous allons bientôt revenir vers toi !";
                this.phoneNumber = "";
            });
            this.reset_cart();
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
=======
    command() {
      // var number = this.phoneNumber;
      // if (!number) {
      //   this.orderSatus.display = true;
      //   this.orderSatus.status = "error";
      //   this.orderSatus.details =
      //     "Tu n'as pas renseigné ton numéro de téléphone. Tu ne peux donc pas commander.";
      //   return;
      // }
      // if (!this.isPhoneNumber(number)) {
      //   this.orderSatus.display = true;
      //   this.orderSatus.status = "error";
      //   this.orderSatus.details = "Numéro de téléphone non valide. Il doit être du type 0123456789";
      //   this.phoneNumber = ""
      //   return;
      // }
      user.phoneNumber = this.phoneNumber;
      var command = {
        content: this.cart,
        user: this.user.data,
        status: 0,
      };
      this.passOrder(command).then(() => {
        this.reset_cart();
        // this.orderSatus.display = true;
        // this.orderSatus.status = "success";
        // this.orderSatus.details =
        //   "Commande passée. Nous allons bientôt revenir vers toi !";
        // this.phoneNumber = "";
      });
      
>>>>>>> fa0a206f2e3b29abd4b2e25b6c30fe409817ce6b
    }
};
</script>