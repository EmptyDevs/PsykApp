<template>
  <div style="padding:50px">
    <v-row align="center">
      <v-col cols="5">
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
  </div>
</template>

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