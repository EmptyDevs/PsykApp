<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar color="#121040" dense>
      <v-btn text color="#7DBF73" to="/about">
        <span class="title font-weight-regular">psyk</span>
      </v-btn>
      <v-btn to="/" icon color="#fff">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/shop" icon color="#fff">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text color="#fff">
              <span class="font-weight-medium">contactez-nous</span>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              Contactez-nous
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <br />
            <v-card-text class="subtitle-1 text-center">
              Si vous préférez entendre nos voix douces, voici notre numéro:
              <br />
              <div style="padding:10px; padding-top:10px" class="title">+33 6 08 88 91 84</div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>