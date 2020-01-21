<template>
  <div style="padding:50px">
    <p class="subtitle-1 text-center">SOS</p>
    <div style="padding:10px">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg"
          height="200px"
        ></v-img>
        <v-card-title>Alcool</v-card-title>
        <v-card-subtitle>Choix:</v-card-subtitle>
        <v-radio-group style="padding:5px" v-model="column" column>
          <v-radio label="non" value="radio-alcool-non"></v-radio>
          <v-radio label="vodka" value="radio-alcool-1"></v-radio>
          <v-radio label="ricard" value="radio-alcool-2"></v-radio>
          <v-radio label="rhum" value="radio-alcool-3"></v-radio>
          <v-radio label="liqueur de pêche" value="radio-alcool-4"></v-radio>
        </v-radio-group>
      </v-card>
    </div>
    <div style="padding:10px">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2018/05/22/11/55/barbecue-3421217_960_720.jpg"
          height="200px"
        ></v-img>
        <v-card-title>Food</v-card-title>
        <v-card-subtitle>Choix:</v-card-subtitle>
        <v-radio-group style="padding:5px" v-model="column" column>
          <v-radio label="non" value="radio-food-1"></v-radio>
          <v-radio label="2" value="radio-food-2"></v-radio>
          <v-radio label="3" value="radio-food-3"></v-radio>
          <v-radio label="4" value="radio-food-4"></v-radio>
        </v-radio-group>
      </v-card>
    </div>
    <div style="padding:10px">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2014/10/22/16/39/tools-498202_960_720.jpg"
          height="200px"
        ></v-img>
        <v-card-title>Services</v-card-title>
        <v-card-subtitle>Choix:</v-card-subtitle>
        <v-radio-group style="padding:5px" v-model="column" column>
          <v-radio label="non" value="radio-service-1"></v-radio>
          <v-radio label="service 2" value="radio-service-2"></v-radio>
          <v-radio label="service 3" value="radio-service-3"></v-radio>
          <v-radio label="service 4" value="radio-service-4"></v-radio>
        </v-radio-group>
      </v-card>
    </div>
    <div style="padding:10px">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2017/08/09/23/53/smiley-2616203_960_720.png"
          height="200px"
        ></v-img>
        <v-card-title>Salade</v-card-title>
        <v-card-subtitle>Choix:</v-card-subtitle>
        <v-radio-group style="padding:5px" v-model="column" column>
          <v-radio label="oui" value="radio-salade-1"></v-radio>
          <v-radio label="non" value="radio-salade-2"></v-radio>
        </v-radio-group>
      </v-card>
    </div>
  </div>
</template>