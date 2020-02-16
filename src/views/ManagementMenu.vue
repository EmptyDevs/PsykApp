<template>
    <v-container v-if="isLoaded">
        <v-container>
            <v-card width="90%" height="auto" class="mx-auto" flat outlined>
                <v-card-title>Commandes</v-card-title>
                <v-container v-if="this.getCanOrder">
                    <p class="overline">Les commandes sont actuellement activées.</p>
                    <v-btn color="error" right @click="changeCanOrder">
                        <v-icon left>mdi-check</v-icon>Désactiver commandes
                    </v-btn>
                </v-container>
                <v-container v-else>
                    <p class="overline">Les commandes sont actuellement désactivées.</p>
                    <v-btn color="success" right @click="changeCanOrder">
                        <v-icon left>mdi-check</v-icon>Activer commandes
                    </v-btn>
                </v-container>
            </v-card>
        </v-container>
        <v-container>
            <v-card width="90%" height="auto" class="mx-auto" flat outlined>
                <v-card-title>Menu</v-card-title>
                <v-alert v-if="alert != ''" type="warning">{{this.alert}}</v-alert>
                <v-alert v-if="push" type="success">Menu enregistré</v-alert>
                <v-text-field
                    style="padding: 2%"
                    v-model="menu_title"
                    label="Titre du menu"
                    filled
                    hide-details="auto"
                ></v-text-field>
                <v-text-field
                    style="padding: 2%"
                    v-model="entree"
                    label="Entrée"
                    filled
                    hide-details="auto"
                ></v-text-field>
                <v-text-field
                    style="padding: 2%"
                    v-model="plat"
                    label="Plat"
                    filled
                    hide-details="auto"
                ></v-text-field>
                <v-text-field
                    style="padding: 2%"
                    v-model="dessert"
                    label="Dessert"
                    filled
                    hide-details="auto"
                ></v-text-field>
                <v-btn color="pink" dark small absolute bottom left fab @click="push_menu">
                    <v-icon>mdi-content-save</v-icon>
                </v-btn>
            </v-card>
        </v-container>
        <v-container>
            <v-card width="90%" height="auto" class="mx-auto" flat outlined>
                <v-card-title>Produits</v-card-title>
                <v-container v-for="(category_, i) in myGetCategory" :key="i" link>
                    <div v-if="category_.id != 4">
                        <span class="overline font-weight-regular">{{category_.name}}</span>
                        <v-data-table
                            :headers="headers"
                            :items="category_.products"
                            class="elevation-1"
                            :items-per-page="25"
                        >
                            <template v-slot:item.id="{ item }">{{item.id}}</template>
                            <template v-slot:item.name="{ item }">{{item.name}}</template>
                            <template v-slot:item.description="{ item }">{{item.description}}</template>
                            <template v-slot:item.dispo="{ item }">
                                <p
                                    v-if="!item.disponibility"
                                    class="font-weight-light red--text mb-2"
                                >Non disponible.</p>
                                <p v-else class="font-weight-light green--text mb-2">Disponible.</p>
                            </template>
                            <template v-slot:item.action="{ item }">
                                <v-btn color="primary" icon @click="modifyProduct(item)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </div>
                </v-container>
            </v-card>
        </v-container>
        <v-card width="90%" height="auto" class="mx-auto" flat outlined>
            <v-card-title>Créer nouveau produit</v-card-title>
            <v-container>
                <v-select
                    v-model="category_selector"
                    :items="Object.values(this.category)"
                    item-text="name"
                    label="Catégorie"
                ></v-select>
                <v-text-field v-model="newproduct_name" label="Name" required></v-text-field>
                <v-text-field v-model="newproduct_description" label="Description" required></v-text-field>
                <v-file-input accept="image/*" v-model="newproduct_pic" label="Photo"></v-file-input>
                <v-btn color="success" right @click="createNewProduct">
                    <v-icon left>mdi-check</v-icon>Valider
                </v-btn>
            </v-container>
        </v-card>
        <v-container></v-container>
        <EditItem v-model="dialog" :product="selectProduct"></EditItem>
    </v-container>
    <v-text-field v-else color="success" loading disabled></v-text-field>
</template>

<script>
import * as firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
import EditItem from "../components/edit_item";
import * as filesService from "../services/files";

export default {
    components: {
        EditItem
    },
    data() {
        return {
            category_selector: null,
            newproduct_name: "",
            newproduct_description: "",
            newproduct_pic: [],
            selectProduct: {},
            alert: "",
            push: false,
            menu_title: "",
            entree: "",
            plat: "",
            dessert: "",
            content: [],
            isLoaded: false,
            dialog: false,
            headers: [
                {
                    text: "ID",
                    align: "left",
                    value: "id"
                },
                {
                    text: "Nom",
                    align: "left",
                    value: "name"
                },
                {
                    text: "Description",
                    align: "left",
                    value: "description"
                },
                {
                    text: "Dispo",
                    align: "left",
                    value: "dispo"
                },
                {
                    text: "Action",
                    align: "left",
                    value: "action"
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            category: "CategoryModule/getCategory",
            getOrder: "OrderModule/getOrder",
            getCanOrder: "OrderModule/getCanOrder"
        }),
        myGetCategory: function() {
            let r = Object.values(this.category);

            return r;
        }
    },
    methods: {
        ...mapActions({
            fetchCategory: "CategoryModule/fetchCategory",
            fetchOrder: "OrderModule/fetchOrder",
            fetchCanOrder: "OrderModule/fetchCanOrder",
            addNewProduct: "CategoryModule/addNewProduct"
        }),
        formatStr(input) {
            var output = "";
            for (let index = 0; index < input.length; index++) {
                if (input[index] == " ") {
                    output += "_";
                } else {
                    output += input[index];
                }
            }
            return output.toLowerCase();
        },
        createNewProduct() {
            if (this.newproduct_name == "") return;
            if (this.newproduct_pic == []) return;
            var object = {};
            object.description = this.newproduct_description;
            object.name = this.newproduct_name;
            object.disponibility = true;
            object.id =
                "_" +
                Math.random()
                    .toString(36)
                    .substr(2, 9);
            object.img = this.newproduct_pic.name;
            this.addNewProduct({
                category_: this.category_selector,
                object_: object
            });
            try {
                filesService.pushFile(this.newproduct_pic);
            } catch (error) {
                return;
            }
            this.fetchCategory;
        },
        push_menu() {
            if (
                this.menu_title == "" ||
                this.entree == "" ||
                this.plat == "" ||
                this.dessert == ""
            ) {
                this.alert = "L'une des cases est vide!";
                this.push = false;
                return;
            } else this.alert = "";
            this.content.push({ title: "Entrée", value: this.entree });
            this.content.push({ title: "Plat", value: this.plat });
            this.content.push({ title: "Dessert", value: this.dessert });
            firebase
                .database()
                .ref("menu/")
                .set({ title: this.menu_title, content: this.content });
            this.push = true;
        },
        modifyProduct(order) {
            this.selectProduct = Object.assign(this.selectProduct, order);
            this.dialog = true;
        },
        changeCanOrder() {
            var canOrder = this.getCanOrder;
            console.log("change Canorder :" + !canOrder)
            firebase
                .database()
                .ref("canOrder")
                .set(!canOrder);
            this.fetchCanOrder();
        }
    },
    beforeMount() {
        this.fetchCategory().then(() => {
            this.fetchOrder().then(() => {
                this.isLoaded = true;
                this.category_selector = this.category[0];
            });
        });
        this.fetchCanOrder();
    }
};
</script>
