<template>
  <v-container>
    <v-card>
      <v-card-title>Make a new area</v-card-title>
      <v-container>
        <v-row class="d-flex justify-space-between ml-2 mr-2">
          <v-text-field v-model="area_name" label="Area Name"></v-text-field>
          <v-spacer></v-spacer>
          <v-select
            v-model="area_terrain"
            :items="terrain_types"
            label="Area Terrain"
          ></v-select>
        </v-row>
        <v-row>
          <v-col
            ><v-combobox
              v-model="selected_areas"
              :items="areas_list"
              label="Neighbor areas"
              multiple
              clearable
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  close
                  v-bind="data"
                  :input-value="data.selected"
                  @click="selectNeighborAreas(data.item)"
                  @click:close="removeNeighborAreas(data.item)"
                >
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><v-autocomplete
              multiple
              chips
              label="Choose pokemons"
              :items="potential_pokemons"
              v-model="selected_pokemons"
            >
              <template v-slot:selection="data">
                <v-chip
                  close
                  v-bind="data"
                  :input-value="data.selected"
                  @click="select(data.item)"
                  @click:close="remove(data.item)"
                >
                  {{ data.item }}
                </v-chip>
              </template>
            </v-autocomplete></v-col
          >
        </v-row>
        <v-row class="text-center">
          <v-col>
            <v-btn @click="createArea(area_name,area_terrain)" color="green">Create Area</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      area_name: "",
      area_terrain: "",
      terrain_types: ["teste"],
      areas_list: ["rota 01", "Raizinha", "Chatuba"],
      selected_areas: [],
      potential_pokemons: ["Raiquaza", "Gengar", "Magmar"],
      selected_pokemons: [],
    };
  },
  created() {
    //get terrain types from backend
  },
  methods: {
    getTerrainTypes() {},
    getAreas() {},
    getPotentialPokemons() {
      // pegar os pokemons baseado no terreno que você está e nos terrenos ao redor
    },
    async createArea( name: string, terrain: string) {
      await axios
      .post(this.$api + '/area/make',{
        Name: name,
        Terrain: terrain,
        Pokemons: this.selected_pokemons,
        Neighbors: this.selected_areas,
        Description: "Description",
        Trainers:[],
      })
      .then(function (response){
        console.log(response)
      })
      .catch(function (error) {
        console.log("error: "+error)
      })
    },
    remove(item: any) {
      console.log(item);
      const index = this.selected_pokemons.indexOf(item);
      if (index >= 0) this.selected_pokemons.splice(index, 1);
    },
    select(item: any) {
      this.selected_pokemons.append(item);
    },
    selectNeighborAreas(item: any) {
      this.selected_areas.append(item);
    },
    removeNeighborAreas(item: any) {
      const index = this.selected_areas.indexOf(item);
      if (index >= 0) this.selected_areas.splice(index, 1);
    },
  },
};
</script>
