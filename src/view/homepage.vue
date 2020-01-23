<template>
  <div style="padding: 50px">
    <v-card class="mx-auto" max-width="65%" outlined>
      <v-img max-width="100%" src="../assets/menu/top-menu.png" />
      <div v-for="(catMenu, i) in menu" :key="i" link>
        <div style="text-align: center" class="overline mb-4">{{catMenu.category}}</div>
        <v-list-item>
          <v-list-item-content>
            <v-row justify="center" align="center">
              <v-col v-for="(item, j) in catMenu.list" :key="j" link>
                <div>
                  <p style="text-align: center">okok</p>
                </div>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-img src="../assets/menu/bottom-menu.png" />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      _menu: "stateMenu"
    })
  },
  beforeMount() {
    console.log(this.menu);
  },
  data() {
    return {
      menu: {}
    };
  },
  created() {
    this.menu = this._menu;
  }
};
</script>