<template>
  <v-card class="mx-auto" max-width="100%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">SERVICE</div>
        <v-list-item-subtitle>Toute demande sera réalisable, dans la mesure du possible.</v-list-item-subtitle>
        <v-list-item-subtitle>Cuisto à domicile, Ménage, Vaisselle, Bricolage, Courses, Réparation voiture, Couture, Coiffure, Massages, Coaching, etc...</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-textarea v-model="text_input" name="input-7-1" filled label="service" auto-grow value :readonly="is_inside_cart"></v-textarea>
    </v-list-item>
    <v-card-text class="pt-6" style="position: relative;">
      <v-btn v-if="!is_inside_cart" @click="on_plus_click" absolute color="orange" class="white--text" fab large right top>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn v-else @click="on_minus_click" absolute color="orange" class="white--text" fab large right top>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cart: "getCart"
    }),
    is_inside_cart() {
      var c = this.cart;
      for (let index = 0; index < c.length; index++) {
        if (c[index].id == 9999) {
          return true;
        }
      }
      return false;
    },
    get_service_text() {
      var c = this.cart;
      for (let index = 0; index < c.length; index++) {
        if (c[index].id == 9999) {
          return c[index].service;
        }
      }
      return "";
    }
  },
  beforeMount() {
    this.text_input = this.get_service_text
  },
  methods: {
    ...mapActions(["add_to_cart", "delete_item_in_cart", "is_in_cart"]),
    on_plus_click() {
      let a = {id: 9999, name: "Service", service: ""}
      a.service = this.text_input
      this.add_to_cart(a)
      this.readonly = true
    },
    on_minus_click() {
      this.delete_item_in_cart(9999);
    }
  },
  data() {
    return {
      text_input: ""
    };
  }
};
</script>