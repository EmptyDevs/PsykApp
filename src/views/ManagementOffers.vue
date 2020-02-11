<template>
  <v-card class="mx-auto" flat outlined height="100%" width="98%">
    <v-card-title>
      <h1 class="font-weight-bold">Feed des commandes</h1>
    </v-card-title>
    <v-card-actions>
      <v-container fluid>
        <v-row align="center" justify="start" fluid>
          <v-col cols="12" md="2">
            <v-btn @click.stop="toggleOrder()" outlined>
              <v-icon v-if="descending == true" left>mdi-arrow-up</v-icon>
              <v-icon v-else left>mdi-arrow-down</v-icon>
              Inverser
            </v-btn>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              :items="filterStatusItem"
              name="statusfilter"
              label="Filtrer par status"
              v-model="showStatus"
              item-text="name"
            ></v-select>
          </v-col>
          <v-col cols="12" md="2">
              Search WIP
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
    <v-card-text>
      <v-data-table :headers="headers" :loading="loading" class="elevation-1">
        <template v-slot:body>
          <tbody>
            <tr v-for="item in sortArr" :key="item.name">
              <td>{{ item.id }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.user.displayName }}</td>
              <td>{{ item.user.phoneNumber }}</td>
              <td>{{ item.content.length }} items</td>
              <td>
                <span v-if="item.status == 0">En Attente</span>
                <span v-if="item.status == 1">Completée</span>
              </td>
              <td>
                <v-btn color="error" icon @click="removeOrder(item)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn color="info" icon :disabled="item.status == 0" @click="updateStatus(item, 0)">
                  <v-icon>mdi-alert-circle-outline</v-icon>
                </v-btn>
                <v-btn color="success" icon :disabled="item.status == 1" @click="updateStatus(item, 1)">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <v-btn color="primary" icon @click="seeDetails(item)">
                  <v-icon>mdi-card-search</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card-text>
    <OrderDetails v-model="dialog" :order="selectOrder"></OrderDetails>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store/index";
import * as service_order from '../services/order'
import OrderDetails from "../components/order_details";

export default {
  components: {
    OrderDetails
  },
  data() {
    return {
      loading: true,
      dialog: false,
      selectOrder: {
        user: {
          name: "Paul",
          id: 0
        }
      },
      filterStatusItem: [
        { name: "Tous", value: -1 },
        { name: "En attente", value: 0 },
        { name: "Complétée", value: 1 },
      ],
      total: 0,
      descending: false,
      selected: [],
      displayedOrders: [],
      showStatus: -1,
      options: {},
      headers: [
        {
          text: "ID",
          align: "left",
          value: "id"
        },
        {
          text: "Date",
          align: "left",
          value: "date"
        },
        {
          text: "Nom",
          align: "left",
          value: "user.name"
        },
        {
          text: "Téléphone",
          align: "left",
          value: "user.phoneNumber"
        },
        {
          text: "Nombre d'éléments",
          align: "left",
          value: "length"
        },
        {
          text: "Status",
          align: "left",
          value: "status"
        },
        {
          text: "Action",
          align: "left"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      orders: "OrderModule/getOrder"
    }),
    sortArr: function() {
      let array = Object.values(this.orders);
      let showStatus = this.showStatus;
      //console.log(JSON.stringify(array))
      if (this.showStatus != -1) {
        array = array.filter(function(item) {
          return item.status == showStatus;
        });
      }
      if (this.descending) {
        return array.reverse();
      }
      return array;
    }
  },
  watch: {
    orders(newVal, oldVal) {
      //   console.log("Orders fetched");
      //   console.log(JSON.stringify(newVal));
      this.loading = false;
    }
  },
  methods: {
    ...mapActions({
      fetchOrder: "OrderModule/fetchOrder"
    }),
    toggleOrder() {
      this.descending = !this.descending;
    },
    seeDetails(order) {
    //   console.log("seeDetails");
      //console.log(JSON.stringify(order))
      this.dialog = false;
      this.selectOrder = Object.assign(this.selectOrder, order);
      this.dialog = true;
    //   console.log("THIS IS SELECTORDER");
    //   console.log(JSON.stringify(this.selectOrder));
    },
    removeOrder(order)
    {
        service_order.removeOrder(order.id);
    },
    updateStatus(order, status){
        service_order.setStatus(order.id, status);
    }
  },
  created() {
    this.loading = true;
  },
  beforeMount() {
    this.fetchOrder();
  }
};
</script>
