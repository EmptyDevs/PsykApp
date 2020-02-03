<template>
  <v-card width="90%" height="auto" class="mx-auto" flat outlined>
    <v-card-title>Menu</v-card-title>
    <v-alert v-if="alert != ''" type="warning">{{this.alert}}</v-alert>
    <v-alert v-if="push" type="success">Menu enregistré</v-alert>
    <v-text-field style="padding: 2%" v-model="menu_title" label="Titre du menu" filled hide-details="auto"></v-text-field>
    <v-text-field style="padding: 2%" v-model="entree" label="Entrée" filled hide-details="auto"></v-text-field>
    <v-text-field style="padding: 2%" v-model="plat" label="Plat" filled hide-details="auto"></v-text-field>
    <v-text-field style="padding: 2%" v-model="dessert" label="Dessert" filled hide-details="auto"></v-text-field>
    <v-btn color="pink" dark small absolute bottom left fab @click="push_menu">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import * as firebase from "firebase";
export default {
  data() {
    return {
      alert: "",
      push: false,
      menu_title: "",
      entree: "",
      plat: "",
      dessert: "",
      content: []
    };
  },
  methods: {
    push_menu() {
      if (
        this.menu_title == "" ||
        this.entree == "" ||
        this.plat == "" ||
        this.dessert == ""
      ) {
        this.alert = "L'une des cases est vide!";
        this.push = false;
        return;
      } else this.alert = "";
      this.content.push({ title: "Entrée", value: this.entree });
      this.content.push({ title: "Plat", value: this.plat });
      this.content.push({ title: "Dessert", value: this.dessert });
      firebase
        .database()
        .ref("menu/")
        .set({ title: this.menu_title, content: this.content });
      this.push = true;
    }
  }
};
</script>
