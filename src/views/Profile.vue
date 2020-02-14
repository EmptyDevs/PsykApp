<template>
    <div>
        <v-card v-if="user.is_logged_in">
            <v-card-text>
                <p class="display-1 text--primary">Profile</p>
                <div class="text--primary">
                    <span class="font-weight-medium">UID:</span>
                    <span class="font-weight-light" v-if="user.data.uid">{{ user.data.uid }}</span>
                    <span class="font-weight-regular font-italic" v-else>non disponible</span>
                </div>
                <div class="text--primary">
                    <span class="font-weight-medium">Prénom Nom:</span>
                    <span
                        class="font-weight-light"
                        v-if="user.data.displayName"
                    >{{ user.data.displayName}}</span>
                    <span class="font-weight-regular font-italic" v-else>non disponible</span>
                </div>
                <div class="text--primary">
                    <span class="font-weight-medium">Email:</span>
                    <span class="font-weight-light" v-if="user.data.email">{{ user.data.email }}</span>
                    <span class="font-weight-regular font-italic" v-else>non disponible</span>
                </div>
                <div class="text--primary">
                    <span class="font-weight-medium">Numéro de téléphone:</span>
                    <span
                        class="font-weight-light"
                        v-if="user.data.phoneNumber"
                    >{{ user.data.phoneNumber }}</span>
                    <span class="font-weight-regular font-italic" v-else>non disponible</span>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red white--text" @click="signOut">Logout</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as firebase from "firebase/app";

export default {
    name: "home",
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            user: "UserModule/getUser"
        }),
        userInfo() {
            var user = firebase.auth().currentUser;
            if (user) {
                return user;
            } else {
                return null;
            }
        }
    },
    methods: {
        ...mapActions("UserModule", ["fetchUser"]),
        signOut(e) {
            e.stopPropagation();
            firebase.auth().signOut();
        },
        debug() {
            this.fetchUser(firebase.auth().currentUser);
            // console.log(JSON.stringify(this.user));
        }
    }
};
</script>
