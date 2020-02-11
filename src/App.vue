<template>
    <v-app>
        <AppBar />
        <v-content>
            <router-view />
            <Footer />
        </v-content>
    </v-app>
</template>

<script>
import AppBar from "./components/Appbar";
import Footer from "./components/footer";

export default {
    components: {
        AppBar,
        Footer
    },
    props: {
        source: String
    }
};
</script>
