<template>
  <div>
    <h2>HOME</h2>
    <p>Prénom Nom: {{ userInfo.displayName }}</p>
    <p>Email: {{ userInfo.email }}</p>
    <p>phoneNumber: {{ userInfo.phoneNumber }}</p>
    <p>UID: {{ userInfo.uid }}</p>
    <img src="https://graph.facebook.com/1849171378548194/picture" />

    <h2>HOME2</h2>
    <div v-if="user.is_logged_in">
      <p>Prénom Nom: {{ user.data.displayName }}</p>
      <p>Email: {{ user.data.email }}</p>
      <p>phoneNumber: {{ user.data.phoneNumber }}</p>
      <p>UID: {{ user.data.uid }}</p>
    </div>
    <v-btn @click="debug()">debug</v-btn>
    <li>
      <a @click="signOut">Logout</a>
    </li>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as firebase from "firebase/app";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "UserModule/getUser"
    }),
    userInfo() {
      var user = firebase.auth().currentUser;
      if (user) {
        return user;
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapActions("UserModule", ["fetchUser"]),
    signOut(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.$router.push({
        name: "Login"
      });
    },
    debug() {
      this.fetchUser(firebase.auth().currentUser);
      console.log(JSON.stringify(this.user));
    }
  }
};
</script>
