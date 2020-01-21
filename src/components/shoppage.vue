<template>
  <div style="padding:50px">
    <v-row align="center">
      <v-col cols="1">
        <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="id"
          label="Select"
          persistent-hint
          return-object
          single-line
        />
      </v-col>
    </v-row>

    <div style="padding:10px">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg"
          height="200px"
        ></v-img>
        <v-card-title>{{select.state}}</v-card-title>
        <v-radio-group v-model="radios" :mandatory="false" style="padding:10px">
          <v-radio
            v-for="(vals, i) in select.values"
            :key="i"
            link
            :label="vals.vname"
            :value="vals.vid"
          ></v-radio>
        </v-radio-group>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: {
        state: "Alcool",
        id: "alcool",
        values: [
          { vid: "vodka", vname: "Vodka" },
          { vid: "ricard", vname: "Ricard" },
          { vid: "jager", vname: "Jager" },
          { vid: "rhum", vname: "Rhum" }
        ]
      },
      items: [
        {
          state: "Alcool",
          id: "alcool",
          values: [
            { vid: "vodka", vname: "Vodka" },
            { vid: "ricard", vname: "Ricard" },
            { vid: "jager", vname: "Jager" },
            { vid: "rhum", vname: "Rhum" }
          ]
        },
        { state: "Nouriture", id: "food",
          values: [
            { vid: "kebab", vname: "Kebab" },
            { vid: "americain", vname: "Americain" },
            { vid: "jager", vname: "Jager" }
          ] },
        { state: "Services", id: "service" },
        { state: "Salade", id: "salad" }
      ]
    };
  }
};
</script>