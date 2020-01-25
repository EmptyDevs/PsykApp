<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import { mapActions } from "vuex";

export default {
  props: {
    source: String
  },
};
</script>
