<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
      <v-img :aspect-ratio="16/9" :src="funcImage">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >{{data.description}}</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <v-btn v-if="is_plus" absolute color="orange" class="white--text" fab large right top @click="on_plus_click(data)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-else absolute color="orange" class="white--text" fab large right top @click="on_minus_click(data)">
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
  beforeMount() {
    this.set_is_plus()
  },
  beforeUpdate() {
    this.set_is_plus()
  },
  methods: {
    ...mapActions(["add_to_cart", "delete_item_in_cart", "is_in_cart"]),
    ...mapGetters({
      cart: "getCart"
    }),
    set_is_plus() {
      this.is_plus = !this.is_inside_cart(this.data, this.cart)
    },
    on_plus_click(data) {
      this.add_to_cart(data);
      this.is_plus = false
    },
    on_minus_click(data) {
      this.delete_item_in_cart(data.id);
      this.is_plus = true
    },
    is_inside_cart(item, cart) {
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == item.id)
        {
          return true;
        }
      }
      return false;
    }
  },
  data() {
    return {
      image: undefined,
      is_plus: true,
    };
  },
  computed: {
    funcImage() {
      return require("@/assets/products/" + this.data.img);
    }
  },
  created() {
    this.image = this.funcImage;
  }
};
</script>