<template>
  <v-app id="inspire" style="padding-bottom: 100px">
    <v-container>
      <div style="padding-bottom:20px">
        <v-card>
          <v-img src="./../assets/About/banniere-temp.png" max-height="344px"></v-img>
        </v-card>
      </div>
      <v-card>
        <v-list-item-content style="padding:20px">
          <p class="headline font-weight-light">
            Venue de votre imagination la plus profonde, la <span class="font-weight-regular indigo--text text--darken-4">PSYK̇</span> est prête à vous faire rêver, 
            mais prenez garde, elle peut aussi devenir votre pire cauchemar..<br>
            Plongés entre réalité et mirage, entre songe et délire, les 27 membres 
            de l’équipe se sont liés dans un objectif commun : faire de votre vie un rêve, 
            et de votre rêve une réalité.<br>
            Le côté sombre de leur imaginaire surgit parfois, 
            rongeant leur cerveau avec des cauchemars qui ne cessent de les hanter.<br><br>
            Soyez attentif, <span class="font-weight-medium indigo--text text--darken-4">P</span>ower 
            <span class="font-weight-medium indigo--text text--darken-4">S</span>leeps in 
            <span class="font-weight-medium indigo--text text--darken-4">Y</span>our Imaginary 
            <span class="font-weight-medium indigo--text text--darken-4">K̇</span>ingdom.
          </p>
        </v-list-item-content>
      </v-card>
    </v-container><br><br><br>
    <v-container fluid>
      <div>
        <v-row style="padding:20px">
          <v-col style="padding:30px; padding-bottom:40px" md="3" cols="4" v-for="(vals, i) in member" :key="i" link>
            <MemberItem :data="vals" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import MemberItem from "../components/bde_member";

export default {
  components: {
    MemberItem
  },
  computed: {
    ...mapGetters({
      member: "getMember"
    })
  }
};
</script>