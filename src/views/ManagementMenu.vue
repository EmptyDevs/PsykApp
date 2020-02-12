<template>
    <v-container v-if="isLoaded">
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
                            :items-per-page="5"
                        >
                            <template v-slot:item.id="{ item }">{{item.id}}</template>
                            <template v-slot:item.name="{ item }">{{item.name}}</template>
                            <template v-slot:item.description="{ item }">{{item.description}}</template>
                            <template v-slot:item.action="{ item }">
                                <v-btn color="primary" icon @click="seeDetails(item)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </div>
                </v-container>
            </v-card>
        </v-container>
        <EditItem v-model="dialog" :order="selectOrder"></EditItem>
    </v-container>
    <v-text-field v-else color="success" loading disabled></v-text-field>
</template>

<script>
import * as firebase from "firebase";
import { mapGetters, mapActions } from "vuex";
import EditItem from "../components/edit_item";
export default {
    components: {
        EditItem
    },
    data() {
        return {
            my_category: [],
            selectOrder: {
                user: {
                    name: "Paul",
                    id: 0
                }
            },
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
                    text: "Action",
                    align: "left",
                    value: "action"
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            category: "CategoryModule/getCategory"
        }),
        myGetCategory: function() {
            let r = Object.values(this.category);

            return r;
        }
    },
    methods: {
        ...mapActions({
            fetchCategory: "CategoryModule/fetchCategory"
        }),
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
        seeDetails(order) {
            //   console.log("seeDetails");
            //console.log(JSON.stringify(order))
            this.dialog = false;
            this.selectOrder = Object.assign(this.selectOrder, order);
            this.dialog = true;
            //   console.log("THIS IS SELECTORDER");
            //   console.log(JSON.stringify(this.selectOrder));
        }
    },
    beforeMount() {
        this.fetchCategory().then(() => {
            this.isLoaded = true;
        });
    }
};
</script>
