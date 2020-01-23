<template>
  <div style="padding:50px">
    <v-row align="center">
      <v-col cols="5">
        <v-select
          transition="slide-x-transition"
          v-model="select"
          :items="category"
          item-text="name"
          item-value="id"
          label="Catégories"
          persistent-hint
          return-object
          single-line
        />
      </v-col>
      <v-col style="padding: 10px">
        <div align="center" justify="center" style="padding: 10px">
          <v-btn v-if="hidecart == true" @click="hidecart = false" text>Afficher panier</v-btn>
          <v-btn v-else @click="hidecart = true" text>Cacher panier</v-btn>
        </div>
        <v-card class="mx-auto" max-width="344" :hidden="hidecart" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Votre panier</v-list-item-title>
              <td v-for="(product, i) in cart.items" :key="i" link>{{product.name}}</td>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text>Passer commande</v-btn>
            <v-btn text @click="resetCart">Vider panier</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-text-field />
    <div style="padding:10px" align="center" justify="center" >
      <v-row class="light--text">
        <v-col cols="6" v-for="(vals, i) in select.products" :key="i" link>
          <div>
            <v-card class="mx-auto" max-width="344" min-width="120" color="#7DBF73">
              <v-img :src="require('../assets/products/vodka.jpg')" height="200px"></v-img>
              <v-card-title>{{ vals.name}}</v-card-title>
              <v-card-actions>
                <v-btn
                  v-if="isInCart(vals.id)"
                  color="primary"
                  @click="addToCart(vals.id, vals.name)"
                  depressed
                >
                  <v-icon left>mdi-plus</v-icon>
                </v-btn>
                <v-btn v-else color="#FF524D" @click="DeleteToCart(vals.id)" depressed>
                  <v-icon left>mdi-minus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
<!-- REGARDER LEQUEL PRENDRE -->
      <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="300"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br>
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-hover>


  </div>




</template>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}
</style>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      category: "getCategory",
      products: "getProducts"
    })
  },
  methods: {
    selectFirst() {
      console.log("ok");
    },
    addToCart(_id, _name) {
      let a = { id: _id, name: _name };
      this.cart.items.push(a);
    },
    resetCart() {
      this.cart.items = [];
    },
    DeleteToCart(_id) {
      const r = this.cart.items.find(elmt => elmt.id == _id);
      const i = this.cart.items.indexOf(r);
      if (i == 0) {
        this.cart.items.shift();
      }
      this.cart.items.splice(i, i);
    },
    isInCart(_id) {
      const r = this.cart.items.find(elmt => elmt.id == _id);
      return !r;
    }
  },

  data() {
    return {
      hidecart: true,
      select: {},
      cart: {
        items: []
      }
    };
  }
};
</script>