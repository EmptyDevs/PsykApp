<template>
  <div style="padding: 50px">
    <v-card class="mx-auto" max-width="65%" outlined >
      <v-row align="center" justify="center" style="padding-top: 2%">
        <v-img max-width="80%" src="../assets/menu/top-menu.png" />
      </v-row>
      <div style="text-align: center" class="headline font-weight-thin mb-2">Menu du jour</div>
      <div style="text-align: center" class="title font-weight-thin mb-8">{{_menu.title}}</div>
      <div v-for="(vals, i) in _menu.content" :key="i" link>
        <div style="text-align: center" class="title font-weight-thin mb-4">{{vals.title}}</div>
        <div style="text-align: center" class="font-italic font-weight-thin mb-4">{{vals.value}}</div>
      </div>
      <v-row align="center" justify="center" style="padding-bottom: 2%">
        <v-img max-width="80%" src="../assets/menu/bottom-menu.png" />
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      _menu: "stateMenu"
    })
  },
  methods: {
    test_firebase() {
      firebase
        .database()
        .ref("/")
        .set(this.state);
    }
  }
};
</script>