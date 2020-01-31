<template>
  <v-container id="lateral">
    <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense class="inline">
        <v-list-item>
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>
        <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">
          <v-list-item v-for="(product, i) in cart" :key="i" link style="padding: 5px">
            <CartItem :data="product" />
          </v-list-item>
        </v-sheet>
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
                    lg="3"
                    v-for="(vals, i) in select.products"
                    :key="i"
                    link
                  >
                    <ShopItem :data="vals" />
                  </v-col>
                </v-row>
              </div>
              <ServiceItem v-else />
              <p v-for="(vals, i) in getOrder" :key="i" link>{{vals}}</p>
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
      @click="drawerRight = !drawerRight"
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-container>
</template>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  bottom: 0;
  margin: 0 0 30px 16px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import ShopItem from "../components/shop/shop_item";
import ServiceItem from "../components/shop/service_item";
import CartItem from "../components/shop/cart_item";

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
      getOrder: "OrderModule/getOrder"
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
    command() {
      this.passOrder(this.cart);
      this.reset_cart;
    }
  },
  data() {
    return {
      select: {},
      isLoaded: false,
      drawerRight: false
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