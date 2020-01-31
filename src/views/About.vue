<template>
  <v-app v-if="isLoaded" id="inspire" style="padding-bottom: 100px">
    <v-container>
      <div style="padding-bottom:20px">
        <v-card>
          <v-img src="./../assets/About/photo_de_groupe.jpg" max-height="344px"></v-img>
        </v-card>
      </div>
      <v-card>
        <v-list-item-content style="padding:20px">
          <p class="headline font-weight-light">
            Venue de votre imagination la plus profonde, la
            <span
              class="font-weight-medium indigo--text text--darken-4"
            >PSYK</span> est prête à vous faire rêver,
            mais prenez garde, elle peut aussi devenir votre pire cauchemar..
            <br />Plongés entre réalité et mirage, entre songe et délire, les 27 membres
            de l’équipe se sont liés dans un objectif commun : faire de votre vie un rêve,
            et de votre rêve une réalité.
            <br />Le côté sombre de leur imaginaire surgit parfois,
            rongeant leur cerveau avec des cauchemars qui ne cessent de les hanter.
            <br />
            <br />Soyez attentif,
            <span class="font-weight-medium indigo--text text--darken-4">P</span>ower
            <span class="font-weight-medium indigo--text text--darken-4">S</span>leeps in
            <span class="font-weight-medium indigo--text text--darken-4">Y</span>our Imaginary
            <span class="font-weight-medium indigo--text text--darken-4">K</span>ingdom.
          </p>
        </v-list-item-content>
      </v-card>
    </v-container>
    <br />
    <br />
    <br />
    <v-container class="grey lighten-5">
      <v-row style="padding:20px">
        <v-col xs="2" md="5" lg="3" xl="3" v-for="(vals, i) in member" :key="i" link>
          <MemberItem :data="vals" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <v-text-field v-else color="success" loading disabled></v-text-field>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import MemberItem from "../components/bde_member";
import firebase from "firebase";

export default {
  components: {
    MemberItem
  },
  data() {
    return {
      isLoaded: false
    };
  },
  methods: {
    ...mapActions({
      fetchMembers: "MembersModule/fetchMembers"
    })
  },
  computed: {
    ...mapGetters({
      member: "MembersModule/getMembers"
    })
  },
  beforeMount() {
    this.fetchMembers().then(() => {
      this.isLoaded = true;
    });
  }
};
</script>
