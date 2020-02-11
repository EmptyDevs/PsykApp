<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="80%">
      <v-card>
        <v-card-title>
          <span class="headline">Order #{{ order.id }}</span>
          <v-spacer></v-spacer>
          <span class="subtitle">{{ order.date }} </span>
        </v-card-title>
        <v-card-subtitle class="mt-1 font-weight-regular">
          <span class="font-weight-bold">Status: </span>
          <span v-if="order.status == 0" class="grey--text font-italic"
            >En Attente</span
          >
          <span v-if="order.status == 1" class="green--text font-italic"
            >Completée</span
          >
        </v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-card class="py-2" flat>
                  <v-card-text>
                    <p class="display-1 text--primary">
                      Utilisateur
                    </p>
                    <div class="text--primary">
                      <span class="font-weight-medium"> UID:</span>
                      <span class="font-weight-light" v-if="order.user.uid">
                        {{ order.user.uid }}</span
                      >
                      <span class="font-weight-regular font-italic" v-else>
                        non disponible</span
                      >
                    </div>
                    <div class="text--primary">
                      <span class="font-weight-medium"> Prénom Nom:</span>
                      <span
                        class="font-weight-light"
                        v-if="order.user.displayName"
                      >
                        {{ order.user.displayName }}</span
                      >
                      <span class="font-weight-regular font-italic" v-else>
                        non disponible</span
                      >
                    </div>
                    <div class="text--primary">
                      <span class="font-weight-medium"> Email:</span>
                      <span class="font-weight-light" v-if="order.user.email">
                        {{ order.user.email }}</span
                      >
                      <span class="font-weight-regular font-italic" v-else>
                        non disponible</span
                      >
                    </div>
                    <div class="text--primary">
                      <span class="font-weight-medium">
                        Numéro de téléphone:</span
                      >
                      <span
                        class="font-weight-light"
                        v-if="order.user.phoneNumber"
                      >
                        {{ order.user.phoneNumber }}</span
                      >
                      <span class="font-weight-regular font-italic" v-else>
                        non disponible</span
                      >
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <p class="display-1 text--primary">
                      Addresse
                    </p>
                    <div class="text--primary" v-if="order.address">
                      <span class="font-weight-medium">Rue</span>
                      <span class="font-weight-light" >
                        {{ order.address.steetname }}
                      </span>
                      <span class="font-weight-medium">Ville</span>
                      <span class="font-weight-light" >
                        {{ order.address.postcode }}, {{ order.address.city }}
                      </span>
                      <span class="font-weight-medium">Complément</span>
                      <span class="font-weight-light" >
                        {{ order.address.complement }}
                      </span>
                    </div>
                    <div v-else>
                      <span class="font-weight-regular font-italic" >
                        non disponible
                      </span>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="py-2" flat v-if="order.content">
                  <v-card-title class="headline">
                    Panier
                  </v-card-title>
                  <v-card-subtitle>
                    {{ order.content.length }} éléments
                  </v-card-subtitle>
                  <v-card-text>
                    <ul>
                      <li v-for="(product, i) in order.content.items" :key="i">
                        <span class="font-weight-bold">{{ product.name }}</span>
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="px-4 pb-3">
          <v-btn color="info" @click.stop="show = false">
            <v-icon left>mdi-backspace</v-icon>
            Fermer
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="removeOrder()">
            <v-icon left>mdi-close</v-icon>
            Supprimer
          </v-btn>
          <v-btn color="info" :disabled="order.status == 0" @click="updateStatus(0)">
            <v-icon left>mdi-check</v-icon>
            Mettre en attente
          </v-btn>
          <v-btn color="success" :disabled="order.status == 1" @click="updateStatus(1)">
            <v-icon left>mdi-check</v-icon>
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import * as service_order from '../services/order'

export default {
  props: {
    value: Boolean,
    order: Object
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods : {
    removeOrder()
    {
        service_order.removeOrder(this.order.id);
        this.show = false
    },
    updateStatus(status){
        service_order.setStatus(this.order.id, status);
        this.show = false
    }
  }
};
</script>
