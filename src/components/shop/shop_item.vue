<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
      <v-img :aspect-ratio="16/9" :src="funcImage">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
            style="height: 100%"
          >{{data.description}}</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
          @click="on_plus_click(data)"
          v-if="is_inside_cart == false"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
          @click="on_minus_click(data)"
          v-else
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{data.name}}</h3>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    data: Object
  },
  methods: {
    ...mapActions(["add_to_cart", "delete_item_in_cart", "is_in_cart"]),
    on_plus_click(data) {
      if (!this.is_inside_cart) {
        this.add_to_cart(data);
      }
    },
    on_minus_click(data) {
      this.delete_item_in_cart(data.id);
    }
  },
  data() {
    return {
      image: undefined
    };
  },
  computed: {
    ...mapGetters({
      cart: "getCart"
    }),
    funcImage() {
      return require("@/assets/products/" + this.data.img);
    },
    is_inside_cart() {
      var c = this.cart;
      for (let index = 0; index < c.length; index++) {
        if (c[index].id == this.data.id) {
          return true;
        }
      }
      return false;
    }
  },
  created() {
    this.image = this.funcImage;
  }
};
</script>