<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="350px">
      <v-img width="350px" height="400px" :src="src_url">
        <v-expand-transition>
          <div
            v-if="hover"
            class="xs d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
            style="height: 100%; padding-left:15px; padding-right:15px"
          >{{data.description}}</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative; text-align: center">
        <h3 class="headline font-weight-regular indigo--text text--darken-4 mb-2">{{data.name}}</h3>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  props: {
    data: Object
  },
  methods: {
    ...mapGetters({
      member: "getMember"
    })
  },
  computed: {
    funcImage() {
      var that = this;
      var storage = firebase
        .storage()
        .ref("images/members/" + this.data.img)
        .getDownloadURL()
        .then(function(url) {
          that.src_url = url;
        });
    }
  },
  beforeMount() {
    this.funcImage;
  },
  data() {
    return {
      src_url: ""
    };
  }
};
</script>