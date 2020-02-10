<template>
  <v-content>
    <v-container fluid>
      <v-card class="mx-auto" color="#7DBF73" dark max-width="1000">
        <v-alert v-if="orderSatus.display" :type="orderSatus.status">{{this.orderSatus.details}}</v-alert>
        <v-card-title>
          <v-btn icon to="/shop">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer />
          <span class="overline font-weight-regular">Panier</span>
        </v-card-title>

        <v-container>
            <v-list-item v-for="(product, i) in cart" :key="i" link style="padding: 5px">
              <CartItem :data="product" />
            </v-list-item>
        </v-container>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img class="elevation-6" :src="user.data.photo"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{user.data.displayName}}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn icon large target="_blank" v-on="on" @click="reset_cart">
                    <v-icon large>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Vider le panier</span>
              </v-tooltip>
              <span class="mr-1">·</span>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn icon large target="_blank" v-on="on" @click="command">
                    <v-icon large>mdi-export</v-icon>
                  </v-btn>
                </template>
                <span>Commander</span>
              </v-tooltip>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "../components/shop/cart_item";
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters({
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
      console.log(JSON.stringify(this.user.data));
      var command = {
        content: this.cart,
        user: this.user.data,
        status: 0
      };
      this.passOrder(command).then(() => {
        this.reset_cart();
        this.orderSatus.display = true;
        this.orderSatus.status = "success";
        this.orderSatus.details =
          "Commande passée. Nous allons bientôt revenir vers toi !";
        this.phoneNumber = "";
      });
    }
  },
  data() {
    return {
      orderSatus: {
        display: false,
        status: "warning",
        details: ""
      },
      phoneNumber: ""
    };
  },
  props: {
    source: String
  }
};
</script>