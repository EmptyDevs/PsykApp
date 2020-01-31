<template>
  <v-container>
    <v-card style="height:100%;width:100%;background:white" flat>
      <v-layout align-center justify-center fill-height>
        <v-flex xs12>
          <v-card
            style="margin-left: 10%; margin-right: 10%; border-radius: 17px"
          >
            <v-card-text>
              <p class="primary--text display-1">Management</p>
            </v-card-text>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="credentials.email_address"
                  :rules="emailRules"
                  prepend-icon="mdi-account"
                  name="login"
                  label="Email"
                  type="email"
                  required
                  clearable
                />
                <v-text-field
                  id="password"
                  v-model="credentials.password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  clearable
                  required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <!-- <v-btn color="error">Cancel</v-btn> -->
              <v-spacer />
              <v-btn
                :disabled="!valid"
                color="primary"
                @click="submit"
                @keyup.enter="submit"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";

export default {
  props: ["nextUrl"],
  data() {
    return {
      credentials: {
        email_address: "",
        password: ""
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      error: "",
      valid: true
    };
  },
  methods: {
    ...mapActions("UserModule", ["login"]),
    async submit(e) {
      e.preventDefault();
      var credentials = {
        email_address: this.credentials.email_address,
        password: this.credentials.password
      };
      if (this.credentials.password.length > 0) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.credentials.email_address, this.credentials.password)
          .then(function(user) {
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode + ": " + errorMessage + " !");
          });
      }
    }
  }
};
</script>
