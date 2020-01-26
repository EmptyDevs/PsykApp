<template>
  <v-container>
    <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-toolbar-title>> Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon style="padding-right: 5%; padding-left: 5%">
        Shop
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon style="padding-right: 5%; padding-left: 5%">
        Menu
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <div>
      <v-form v-model="valid">
        <v-container>
          <div class="overline mb-4">Entrée</div>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="35"
                label="entrée 1"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="35"
                label="entrée 2"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="35"
                label="entrée 3"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>