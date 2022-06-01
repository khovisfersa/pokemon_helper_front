<template>
  <v-container>
    <v-expansion-panel-header>{{ area_temp.name }} </v-expansion-panel-header>
    <v-divider inset></v-divider>
    <v-expansion-panel-content class="text-left">
      <p>Terreno: {{ area_temp.terrain }}</p>
      <v-list>
        <v-subheader class="text-center d-flex justify-space-between"
          >Neighboor Areas
        </v-subheader>
        <div>
          <v-list-item v-for="area in area_temp.neighboor_areas" :key="area">
            <v-list-item-title
              class="pb-0 pt-0"
              v-text="area"
            ></v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader class="text-center d-flex justify-space-between"
          >Pokemon List
        </v-subheader>
        <div>
          <v-list-item v-for="pokemon in area_temp.pokemon_list" :key="pokemon">
            <v-list-item-title v-text="pokemon" />
          </v-list-item>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader class="text-center d-flex justify-space-between"
          >Trainer List
        </v-subheader>
        <div>
          <v-list-item v-for="trainer in area_temp.trainer_list" :key="trainer">
            <v-list-item-title v-text="trainer" />
          </v-list-item>
        </div>
      </v-list>
    </v-expansion-panel-content>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    area: {},
  },
  data() {
    return {
      show: true,
      show_neighboors: true,
      show_pokemon_list: true,
      area_temp: {
        name: "caverna do santo daime",
        terrain: "Cave",
        neighboor_areas: ["rota 01", "rota 02"],
        pokemon_list: ["cinderace", "torkoal", "dratini"],
        trainer_list: ["Garry oak", "Ash ketchum", "Chonky Buoy"]
      },
    };
  },
};
</script>

<style></style>
