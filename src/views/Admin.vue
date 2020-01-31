<template>
  <v-container fluid style="height:100%">
    
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import * as auth from "../services/auth";

export default {
  props: ["nextUrl"],
  components: {
    AdminLogin,
    AdminPanel
  },
  data() {
    return {
      is_admin: false
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
