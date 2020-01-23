<template>
  <div style="padding: 50px">
    <v-card class="mx-auto" max-width="50%" outlined>
      <v-img src="../assets/menu/menu_style.jpg" />
      <v-text-field />
      <div v-for="(catMenu, i) in menu" :key="i" link>
        <div style="text-align: center" class="overline mb-4">{{catMenu.category}}</div>
        <v-list-item>
          <v-list-item-content>
            <div v-for="(item, j) in catMenu.list" :key="j" link>
              <div>{{item.name}}</div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-text-field />
      <v-img src="../assets/menu/menu_style.jpg" />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      menu: "stateMenu"
    })
  },
  beforeMount() {
    console.log(this.menu);
  },
  data() {
    return {};
  }
};
</script>