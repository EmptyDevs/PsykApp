<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar color="#121040" dense>
      <v-btn text to="/">
        <span class="title font-weight-regular teal--text text--accent-3">psyk</span>
      </v-btn>
      <v-btn to="/menu" icon color="#fff">
        <v-icon>mdi-food-fork-drink</v-icon>
      </v-btn>
      <v-btn to="/shop" icon color="#fff">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <span v-if="is_admin" class="title font-weight-bold" style="color:#7DBF73">|</span>
      <v-btn v-if="is_admin" @click="goTo('AdminOffers')" icon color="#fff">
        <v-icon>mdi-cube</v-icon>
      </v-btn>
      <v-btn v-if="is_admin" @click="goTo('AdminMenu')" icon color="#fff">
        <v-icon>mdi-silverware</v-icon>
      </v-btn>
      <v-btn v-if="is_admin" @click="goTo('AdminSettings')" icon color="#fff">
        <v-icon>mdi-wrench</v-icon>
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
        <v-menu offset-y open-on-hover bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon color="white" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="menuCall(item)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          icon: "mdi-account-box-outline",
          title: "Profile",
          action: "settings",
          url: "/profile",
          admin: false
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
  computed: {
    ...mapGetters({
      is_admin: "UserModule/getAdminStatus"
    })
  },
  methods: {
    menuCall(item) {
      if (item.action == "logout") {
        this.signOut();
      } else if (item.action == "settings") {
        this.$router.push({ name: "Profile" });
      }
    },
    goTo(route_name)
    {
      this.$router.push({ name: route_name });
    },
    signOut(e) {
      firebase.auth().signOut();
    }
  }
};
</script>
