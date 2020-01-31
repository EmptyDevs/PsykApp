<template>
  <v-card height="100%" width="100%" class="mx-auto" flat outlined transparent>
    <v-navigation-drawer absolute permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-card height="100%" style="background:red">
      <p>lucas</p>
    </v-card>
  </v-card>
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
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ]
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
