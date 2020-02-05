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
          <v-container
            class="text-center"
            fill-height
            style="height: calc(100vh - 58px);"
          >
            <v-row align="center">
              <v-col>
                <h1 class="display-2" style="color:#7DBF73">Whoops, 404</h1>
                <h1 class="display-1" style="color:#7DBF73">
                  Cette page n'existe pas
                </h1>

                <v-btn
                  @click="goTo()"
                  color="#121040"
                  outlined
                  style="margin-top: 3%;"
                >
                  Revenir au menu principal
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "FourOhFour",
  props: {
    lang: {
      type: String,
      default: "fr"
    }
  },
  data() {
    return {
      dialog: true
    };
  },
  created() {
    this.$ssrContext && this.$ssrContext.res.status(404);
  },
  methods: {
    goTo() {
      this.$router.push({ name: "About" });
    }
  }
};
</script>
