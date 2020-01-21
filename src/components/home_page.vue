<template>
  <div style="padding: 50px">
    <v-card class="mx-auto" max-width="25%" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Entrée</div>
          <v-list-item-subtitle>Salope</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <div class="overline mb-4">Plat</div>
          <v-list-item-subtitle>Pute</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <div class="overline mb-4">Dessert</div>
          <v-list-item-subtitle>Grosse pute</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Commander le menu</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>