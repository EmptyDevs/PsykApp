<template>
    <v-row align="center" justify="center">
        <v-img src="../assets/psyk_logo.png" aspect-ratio="2">
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-card class="mx-auto" max-width="500" color="#2b2b2b80">
                    <v-card-text>
                        <p class="display-1 text">Commande accéptée</p>
                        <!-- <p class="text">Accéptée.</p> -->
                        <div class="text">Nous revenons vers toi dès que possible.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="#fff" to="/shop" icon>
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-img>
    </v-row>
</template>

<style  scoped>
.text {
    color: #fff !important;
}
</style>