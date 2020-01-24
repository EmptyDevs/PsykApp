<template>
  <v-footer absolute fixed class="font-weight-medium">
    <v-row align="center" justify="center">
      <v-btn >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <div style="padding-left: 10px; padding-right: 10px"/>

      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Téléphone
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <br>
            <v-card-text class="subtitle-1 text-center">
              Si vous préférez entendre nos voix douces, voici notre numéro:<br>
              <div style="padding:10px; padding-top:10px" class="title">+33 6 00 00 00 00</div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>

      <div style="padding-left: 10px; padding-right: 10px"/>

      <v-btn>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>