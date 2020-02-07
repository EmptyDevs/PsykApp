<template>
<<<<<<< HEAD
  <v-card class="mx-auto" flat outlined height="100%" width="98%%">
    <v-card-text>
      <h1 class="font-weight-bold">Feed des commandes</h1>
      <v-simple-table fixed-header :loading="loading">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
              <th class="text-left">Calories</th>
              <th class="text-left">Calories</th>
              <th class="text-left"></th>
              <th class="text-left">Status</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.name">
              <td>{{ item.id }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.content.length }} items</td>
              <td>{{ item.user.phone_number }}</td>
              <td>
                <span v-if="item.status == 0">En Attente</span>
                <span v-if="item.status == 1">En Cours</span>
                <span v-if="item.status == 2">Completée</span>
              </td>
              <td>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      icon
                      dark
                      v-on="on"
                      @click.stop="console.log(item.name)"
                      ><v-icon>card-search</v-icon></v-btn
                    >
                  </template>
                  <span>Review</span>
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
=======
  <v-card class="mx-auto" flat>
    <v-card-text>Offers</v-card-text>
>>>>>>> parent of b326ab7... okok
  </v-card>
</template>

<script>
<<<<<<< HEAD
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      orders: "OrderModule/getOrder"
    })
  },
  watch: {
    orders(newVal, oldVal) {
      console.log("Orders fetched");
      console.log(JSON.stringify(newVal));
      this.loading = false;
    }
  },
  methods: {
    ...mapActions({
      fetchOrder: "OrderModule/fetchOrder"
    }),
  },
  created() {
    this.loading = true;
  },
  beforeMount() {
    this.fetchOrder();
  }
=======

export default {
>>>>>>> parent of b326ab7... okok
};
</script>
