<template>
    <v-row justify="center">
        <v-dialog v-model="show" width="80%">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ order.name }}</span>
                </v-card-title>
                <v-card-title>
                    <span class="headline">id: {{ order.id }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <v-card class="py-2" flat>
                                    <v-card-text>
                                        <div class="text--primary">
                                            <v-text-field
                                                v-model="order.description"
                                                label="Description"
                                                required
                                            ></v-text-field>
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
                    <v-btn
                        color="success"
                        :disabled="order.status == 1"
                        @click="updateCategory(order)"
                    >
                        <v-icon left>mdi-check</v-icon>Valider
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import * as service_order from "../services/order";
import { mapGetters, mapActions } from "vuex";
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
    methods: {
        ...mapActions({
            updateCategory: "CategoryModule/updateCategory"
        }),
        removeOrder() {
            service_order.removeOrder(this.order.id);
            this.show = false;
        },
        updateItem(stats) {
            console.log(this.order);
        }
    }
};
</script>
