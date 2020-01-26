<template>
  <v-app>
    <AppBar/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import AppBar from "./components/Appbar";
import Footer from "./components/footer";

export default {
  components: {
    AppBar,
    Footer
  },
  props: {
    source: String
  }
};
</script>
