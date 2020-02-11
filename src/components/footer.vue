<template>
  <v-footer padless class="font-weight-medium">
    <!-- <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading white--text">
          Retrouvez nous sur les réseaux</strong
        >

        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 grey-darken-3  text-center">
        {{ new Date().getFullYear() }} — <strong>EmptyDevs</strong>
      </v-card-text>
    </v-card> -->

    <v-card flat tile class="indigo lighten-1 white--text text-center flex">
      <v-card-text>
        <v-btn
          class="mx-2"
          href="https://www.facebook.com/maxime.colomes"
          target="_blank"
          rounded
        >
          <v-icon color="#4267b2">mdi-facebook</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" rounded>
              <v-icon style="color:#35a241;">mdi-phone</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              Contactez-nous
              <v-spacer></v-spacer>
              <v-btn class="mx-2" icon @click="dialog = false">
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
        <v-btn
          class="mx-2"
          href="https://www.instagram.com/max_cjs/"
          target="_blank"
          rounded
        >
          <v-icon>$vuetify.icons.instaicon</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Psyk La Liste</strong>
      </v-card-text>
    </v-card>
    <!-- <v-row align="center" justify="center">
      <v-btn
        href="https://www.facebook.com/maxime.colomes"
        target="_blank"
        rounded
      >
        <v-icon color="#4267b2">mdi-facebook</v-icon>
      </v-btn>

      <div style="padding-left: 10px; padding-right: 10px" />

      <div class="text-center"></div>

      <div style="padding-left: 10px; padding-right: 10px" />

      <v-btn href="https://www.instagram.com/max_cjs/" target="_blank" rounded>
        <v-icon>$vuetify.icons.instaicon</v-icon>
      </v-btn>
    </v-row> -->
  </v-footer>
</template>

<script>
import instaIcon from "../components/instaIcon";
export default {
  components: {
    instaIcon
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
