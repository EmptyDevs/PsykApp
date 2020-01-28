<template>
  <div v-if="this.isLoaded">
    <v-layout style="padding-bottom: 50px">
      <v-flex xs10>
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
              <v-col cols="4" v-for="(vals, i) in select.products" :key="i" link>
                <ShopItem :data="vals" />
              </v-col>
            </v-row>
          </div>
          <ServiceItem v-else />
        </v-container>
      </v-flex>
      <v-flex xs2>
        <v-container>
          <v-card class="mx-auto" max-width="100%" outlined height="500px">
            <v-btn @click="command" text style="font-size: 0.7em">Commander</v-btn>
            <v-btn @click="reset_cart" text style="font-size: 0.7em">Vider</v-btn>
            <v-list-item three-line>
              <v-list-item-content>
                <div style="text-align: center" class="title font-weight-thin mb-8">Votre panier</div>
                <div
                  class="font-italic font-weight-thin mb-2"
                  v-for="(product, i) in cart"
                  :key="i"
                  link
                >{{product.name}}</div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
  <v-text-field v-else color="success" loading disabled></v-text-field>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShopItem from "../components/shop/shop_item";
import ServiceItem from "../components/shop/service_item";

export default {
  components: {
    ShopItem,
    ServiceItem
  },
  computed: {
    ...mapGetters({
      category: "CategoryModule/getCategory",
      cart: "getCart"
    })
  },
  methods: {
    ...mapActions({
      reset_cart: "reset_cart",
      fetchCategory: "CategoryModule/fetchCategory",
      set_cart_id: "set_cart_id",
      passOrder: "OrderModule/passOrder"
    }),
    command() {
      this.passOrder(this.cart);
      this.reset_cart;
    },
  },
  data() {
    return {
      select: {},
      isLoaded: false
    };
  },
  beforeMount() {
    this.fetchCategory().then(() => {
      this.select = this.category[0];
      this.isLoaded = true;
    });
  }
};
</script>