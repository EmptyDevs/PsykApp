<template>
  <v-layout style="padding-bottom: 50px">
    <v-flex xs10>
      <v-container>
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

        <div v-if="select.id != 3" align="center" justify="center">
          <v-row class="light--text">
            <v-col cols="6" v-for="(vals, i) in select.products" :key="i" link>
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
          <v-btn text style="font-size: 0.7em">Commander</v-btn>
          <v-btn @click="reset_cart" text style="font-size: 0.7em">Vider</v-btn>
          <v-list-item three-line>
            <v-list-item-content>
              <v-card-title>Votre panier</v-card-title>
              <td v-for="(product, i) in cart" :key="i" link>{{product.name}}</td>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
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
    }),
  },
  methods: {
    ...mapActions(["reset_cart"])
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