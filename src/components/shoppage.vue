<template>
  <div style="padding:50px">
    <v-row align="center">
      <v-col cols="2">
        <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="id"
          label="Select"
          persistent-hint
          return-object
          single-line
        />
      </v-col>
    </v-row>

    <div style="padding:10px">
      <v-row class="light--text">
        <v-col cols="3" v-for="(vals, i) in select.values" :key="i" link>
          <v-card class="mx-auto" max-width="344" v-if="vals.isSelect == true" color="#7DBF73">
            <v-img
              src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg"
              height="200px"
            ></v-img>
            <v-card-title>{{vals.vname}}</v-card-title>
            <v-card-actions>
              <v-btn
                v-if="vals.isSelect == false"
                @click="vals.isSelect = true"
                text
              >Ajouter au panier</v-btn>

              <v-btn v-if="vals.isSelect == true" @click="vals.isSelect = false">
                <v-icon left>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto" max-width="344" v-if="vals.isSelect == false" color="#fff">
            <v-img
              src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg"
              height="200px"
            ></v-img>
            <v-card-title>{{vals.vname}}</v-card-title>
            <v-card-actions>
              <v-btn
                v-if="vals.isSelect == false"
                @click="vals.isSelect = true"
                text
              >Ajouter au panier</v-btn>

              <v-btn v-if="vals.isSelect == true" @click="vals.isSelect = false">
                <v-icon left>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      product_category: "stateCategory"
    })
  },
  beforeMount() {
    this.select = this.items[0];
  },
  data() {
    return {
      select: {},
      items: [
        {
          state: "Alcool",
          id: "alcool",
          values: [
            { vid: "vodka", vname: "Vodka", isSelect: false },
            { vid: "ricard", vname: "Ricard", isSelect: false },
            { vid: "jager", vname: "Jager", isSelect: false },
            { vid: "rhum", vname: "Rhum", isSelect: false }
          ]
        },
        {
          state: "Nouriture",
          id: "food",
          values: [
            { vid: "kebab", vname: "Kebab", isSelect: false },
            { vid: "americain", vname: "Americain", isSelect: false },
            { vid: "jager", vname: "Jager", isSelect: false }
          ]
        },
        { state: "Services", id: "service" },
        { state: "Cigarettes", id: "salad" }
      ]
    };
  }
};
</script>