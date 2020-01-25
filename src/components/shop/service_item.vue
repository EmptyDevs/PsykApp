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
      <v-textarea name="input-7-1" filled label="service" auto-grow value></v-textarea>
    </v-list-item>
    <v-card-text class="pt-6" style="position: relative;">
      <v-btn absolute color="orange" class="white--text" fab large right top>
        <v-icon>mdi-plus</v-icon>
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
    })
  },
  methods: {
    ...mapActions(["add_to_cart", "delete_item_in_cart", "is_in_cart"]),
  },
  data() {
    return {
    };
  }
};
</script>