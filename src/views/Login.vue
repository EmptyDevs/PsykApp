<template>
  <div class="container">
    <v-layout align-center justify-center fill-height style="background:white;">
      <v-dialog
        v-model="dialog"
        persistent
        fullscreen
        style="background:white;"
      >
        <v-card style="height:100%;width:100%;background:white" flat>
          <v-layout align-center justify-center fill-height>
            <v-flex xs12>
              <v-card
                color=""
                title="Login"
                style="margin-left: 10%; margin-right: 10%;"
              >
              <v-card-title style="text-align:center"> Bienvenue à la semaine SOS de la liste Psyk</v-card-title>
                <v-card-text>
                  <v-form>
                    <section id="firebaseui-auth-container"></section>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";
import * as firebaseui from 'firebaseui'
import "firebaseui/dist/firebaseui.css";

export default {
  props: ["nextUrl"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
