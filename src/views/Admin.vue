<template>
  <v-container class="fill-height">
    <v-card
      height="100%"
      width="100%"
      class="mx-auto"
      flat
      outlined
      transparent
    >
    hello
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";
import * as auth from "../services/auth";

export default {
  props: ["nextUrl"],
  data() {
    return {
      is_admin: false,

    };
  },
  methods: {
    ...mapActions("UserModule", ["login"])
  },
  created() {
    var is_admin_ = false;
    console.log("Admin Page Created");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        auth.is_admin(user.uid).then(val => {
          console.log("AdminPageCreate/ isadmin:", val);
          if (val) {
            this.is_admin = true;
          } else {
            this.is_admin = false;
          }
        });
      } else {
        this.is_admin = false;
      }
    });
    this.is_admin = is_admin_;
  }
};
</script>
