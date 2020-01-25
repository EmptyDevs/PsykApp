<template>
  <v-container style="padding-bottom: 50px">
    <v-layout>
      <v-flex xs8>
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
        <div v-if="select.id != 3" style="padding:10px" align="center" justify="center">
          <v-row class="light--text">
            <v-col cols="6" v-for="(vals, i) in select.products" :key="i" link>
              <ShopItem :data="vals" />
            </v-col>
          </v-row>
        </div>
        <ServiceItem  v-else />
      </v-flex>
      <v-flex xs4>
        <v-card class="mx-auto" max-width="344" outlined height="500px">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Votre panier</v-list-item-title>
              <td v-for="(product, i) in cart" :key="i" link>{{product.name}}</td>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="344" outlined>
          <v-btn @click="" >Passer commande</v-btn>
          <v-btn @click="_reset_cart" text>Vider panier</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
      category: "getCategory",
      cart: "getCart"
    })
  },
  methods: {
    ...mapActions(["reset_cart"]),
    _reset_cart() {
      this.reset_cart();
      window.location.reload();
    }
  },
  data() {
    return {
      select: {}
    };
  },
  beforeMount() {
    this.select = this.category[0];
  }
};
</script>