<template>
    <v-container class="main_container">
        <v-parallax src="../assets/psyk_logo.png" width="100%"></v-parallax>
        <v-card v-if="isLoaded" class="mx-auto" max-width="65%" outlined>
            <v-row align="center" justify="center" style="padding-top: 2%">
                <v-img max-width="80%" src="../assets/menu/top-menu.png" />
            </v-row>
            <div style="text-align: center" class="headline font-weight-thin mb-2">Menu du jour</div>
            <div style="text-align: center" class="title font-weight-thin mb-8">{{_menu.title}}</div>
            <div v-for="(vals, i) in _menu.content" :key="i" link>
                <div style="text-align: center" class="title font-weight-thin mb-4">{{vals.title}}</div>
                <div
                    style="text-align: center"
                    class="font-italic font-weight-thin mb-4"
                >{{vals.value}}</div>
            </div>
            <v-row align="center" justify="center" style="padding-bottom: 2%">
                <v-img max-width="80%" src="../assets/menu/bottom-menu.png" />
            </v-row>
        </v-card>
    </v-container>
</template>
<style scoped>
.main_container {
    padding: 0px !important;
    max-width: 100% !important;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            isLoaded: false
        };
    },
    computed: {
        ...mapGetters({
            _menu: "MenuModule/getMenu"
        })
    },
    methods: {
        ...mapActions({
            fetchMenu: "MenuModule/fetchMenu"
        })
    },
    beforeMount() {
        this.fetchMenu().then(() => {
            this.isLoaded = true;
        });
    }
};
</script>