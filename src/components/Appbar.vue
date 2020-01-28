<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar color="#121040" dense>
      <v-btn text color="#7DBF73" to="/about">
        <span class="title font-weight-regular">psyk</span>
      </v-btn>
      <v-btn to="/" icon color="#fff">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/shop" icon color="#fff">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text color="#fff">
              <span class="font-weight-medium">contactez-nous</span>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              Contactez-nous
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <br />
            <v-card-text class="subtitle-1 text-center">
              Si vous préférez entendre nos voix douces, voici notre numéro:
              <br />
              <div style="padding:10px; padding-top:10px" class="title">
                +33 6 08 88 91 84
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div class="text-center">
        <v-menu offset-y open-on-hover top>
          <template v-slot:activator="{ on }">
            <v-btn icon color="white" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="menuCall(item)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          icon: "mdi-account-box-outline",
          title: "Profile",
          action: "settings",
          url: "/profile"
        },
        {
          icon: "mdi-exit-to-app",
          title: "Logout",
          action: "logout",
          url: "/logout"
        }
      ]
    };
  },
  methods: {
    menuCall(item) {
      if (item.action == "logout") {
        this.signOut();
      } else if (item.action == "settings") {
        this.$router.push({name: 'Profile'})
      }
    },
    signOut(e){
      firebase.auth().signOut();
    }
  }
};
</script>
