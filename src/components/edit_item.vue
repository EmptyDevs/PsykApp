<template>
    <v-row justify="center">
        <v-dialog v-model="show" width="80%">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ product.name }}</span>
                </v-card-title>
                <v-card-title>
                    <span class="headline">id: {{ product.id }}</span>
                </v-card-title>
                <v-card-title>
                    <span class="headline">Dispo: {{ product.disponibility }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <v-card class="py-2" flat>
                                    <v-card-text>
                                        <div class="text--primary">
                                            <v-text-field
                                                v-model="product.name"
                                                label="Nom du produit"
                                                required
                                            ></v-text-field>
                                        </div>
                                        <div class="text--primary">
                                            <v-text-field
                                                v-model="product.description"
                                                label="Description"
                                                required
                                            ></v-text-field>
                                        </div>
                                        <div class="text--primary">
                                            <v-switch
                                                v-model="product.disponibility"
                                                label="Disponible ?"
                                            ></v-switch>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="px-4 pb-3">
                    <v-btn color="info" @click.stop="show = false">
                        <v-icon left>mdi-backspace</v-icon>Fermer
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="deleteProduct(product)">
                        <v-icon left>mdi-close</v-icon>Supprimer
                    </v-btn>
                    <v-btn color="success" @click="updateCategory(product)">
                        <v-icon left>mdi-check</v-icon>Valider
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        value: Boolean,
        product: Object
    },
    data() {
        return {
            isAvailable: true
        };
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
    methods: {
        ...mapActions({
            updateCategory: "CategoryModule/updateCategory",
            deleteProduct: "CategoryModule/deleteProduct"
        })
    }
};
</script>
