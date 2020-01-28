<template>
  <v-container>
    <div class="text-center">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="70"
        :width="7"
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["nextUrl"],
  computed: {
    ...mapGetters({
      logged: "userModule/getUserLog",
    })
  },
  watch: {
    logged(newValue, oldValue) {
      if (newValue === true) {
        router.push(this.nextUrl);
      }
    },
  },
  mounted()
  {
    console.log("Loading .... " + this.nextUrl)
  }
};
</script>
