<template>
  <v-card
    height="100%"
    width="100%"
    class="mx-auto"
    flat
    outlined
    transparent
    :loading="isLoading"
    loading-text="Chargement en cours"
  >
    <v-card-title>
      Offers feed
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Order n°",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "", value: "" },
      ],
      desserts: [
      ]
    };
  }
};
</script>
