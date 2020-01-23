<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
      <v-img :aspect-ratio="16/9" :src="image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >$14.99</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <v-btn absolute color="orange" class="white--text" fab large right top>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">PSYK vous propose:</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{data.name}}</h3>
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
export default {
  props: {
    data: Object
  },
  data() {
    return {
      image: undefined
    };
  },
  computed: {
    funcImage() {
      return require("@/assets/products/" + this.data.img);
    }
  },
  created() {
    this.image = this.funcImage;
  }
};
</script>