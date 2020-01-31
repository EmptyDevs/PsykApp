<template>
  <v-card class="mx-auto" flat>
    <v-card-text>Offers</v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("UserModule", ["login"])
  }
};
</script>
