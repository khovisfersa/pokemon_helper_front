<template>
  <v-container>
    <v-card>
      <v-card-title>Make a new area</v-card-title>
      <v-container>
        <v-row class="d-flex justify-space-between ml-2 mr-2">
          <v-text-field v-model="area_name" label="Area Name"></v-text-field>
          <v-spacer></v-spacer>
          <v-select v-model="area_terrain" :items="terrain_types" label="Area Terrain"></v-select>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      area_name: "",
      area_terrain:"",
      terrain_types:["teste"]
    };
  },
  created() {
    //get terrain types from backend
  },
  methods: {
    getTerrainTypes() {
      
    }
  },
};
</script>
