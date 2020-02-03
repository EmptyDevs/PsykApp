<template>
  <v-container
    class="text-center"
    fill-height
    style="height: calc(100vh - 58px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2" style="color:#7DBF73">Whoops, 404</h1>
        <h1 class="display-1" style="color:#7DBF73">Cette page n'existe pas</h1>

        <v-btn @click="goTo()" color="#121040" outlined style="margin-top: 3%;">
          Revenir au menu principal
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FourOhFour",
  props: {
    lang: {
      type: String,
      default: "en"
    }
  },
  created() {
    this.$ssrContext && this.$ssrContext.res.status(404);
  },
  methods: {
    goTo() {
      this.$router.push({ name: 'About' });
    }
  }
};
</script>
