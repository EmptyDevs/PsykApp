<template>
  <v-card height="100%" width="100%" class="mx-auto" flat outlined transparent>
    
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";

export default {
  props: ["nextUrl"],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null
    };
  },
  methods: {
    ...mapActions("UserModule", ["login"])
  }
};
</script>
