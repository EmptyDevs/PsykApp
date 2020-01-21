
<template>
  <v-app id="inspire">
    <AppBar/>

    <v-content>
      <PresentationPage></PresentationPage>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/Appbar'
import PresentationPage from './components/Presentation'
export default {
  components: {
    AppBar, PresentationPage
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>