<template>
  <div>
    <v-card>
      <v-card-title>Generate Pokemon</v-card-title>
      <v-card-text>
        <div class="split">
          <v-select
            class="half-card"
            v-model="method"
            label="Select Pokemon by"
            outlined
            :items="by"
          ></v-select>
          <v-spacer style="width=10%"></v-spacer>
          <v-select
            class="half-card"
            v-if="method == 'Type'"
            label="Select Type"
            v-model="method_value"
            outlined
            :items="types"
          ></v-select>
          <v-select
            class="half-card"
            v-if="method == 'Terrain'"
            label="Select Terrain"
            outlined
            v-model="method_value"
            :items="terrains"
          ></v-select>
          <v-select
            class="half-card"
            v-if="method == 'Area'"
            label="Select Area"
            outlined
            v-model="method_value"
            :items="areas"
          ></v-select>
        </div>
        <div class="split">
          <div class="split">
            <v-text-field
              outlined
              class="third"
              v-model.number="pokemon_no"
              :rules="rules_number"
              label="Number of pokemons"
              placeholder="1"
            ></v-text-field>
            <v-spacer style="width=5%"></v-spacer>
            <v-text-field
              outlined
              class="third"
              v-model.number="level_min"
              :rules="rules_number"
              label="Level Mínimo"
            ></v-text-field>
            <v-text-field
              outlined
              class="third"
              v-model.number="level_max"
              :rules="rules_number"
              label="Level Maximo"
            ></v-text-field>
          </div>
          <v-spacer style="width=10%"></v-spacer>
          <v-text-field
            v-if="method == 'Specific'"
            class="half"
            v-model="coiso"
            label="Pokemon Name"
          ></v-text-field>
        </div>
        <v-btn @click="fetchData(method,method_value)">Search</v-btn>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data: () => ({
    coiso: "teste",
    method: "",
    method_value: "",
    pokemon_no: 1,
    pokemons: [],
    level_min: 1,
    level_max: 1,
    by: ["Type", "Area", "Terrain", "Specific"],
    types: [],
    terrains: ["Forest"],
    areas: ["Rota 01"],
    rules_number: [
      (value: number) => {
        if (value == 0 || value == null) return "there must be a number";
      }, //funcionando direito
    ],
  }),
  mounted() {
    this.fetchTypesList()
    this.fetchAreas()
    this.fetchTerrains()
  },
  methods: {
    async fetchTypesList() {
      await axios.get(this.$api+"/types")
      .then(res => {
        this.types = res.data
      })
    },
    async fetchAreas() {
      await axios.get(this.$api + '/get_areas/1')
      .then(res => {
        this.areas = res.data
      })
    },
    async fetchData(method: string, method_value: string) {
      if (method == "Type") {
        console.log("Type")
        await this.fetchPokemonFromType(method_value)
      }
      else if (method == "Area") {
        await this.fetchPokemonFromArea(method_value)
      }
      else if (method == "Terrain") {}
      else if (method == "Specific") {}
    },
    async fetchTerrains() {
      await axios.get(this.$api + "/habitats")
      .then(res => {
        this.terrains = res.data
      })
    },
    async fetchPokemonFromArea(area: string) {
      let req = {"area": area[0], "number":this.pokemon_no, "level": this.level_max}
      await axios.post(this.$api + '/pokemons_from_area', req)
      .then(res => {
        console.log(res.data)
        this.$emit("newPokemons", res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    async fetchPokemonFromType(type: string) {
      let req = {"Type": type,"Number": this.pokemon_no,"Min_level": this.level_min,"Max_level":this.level_max}
      await axios.post(this.$api+'/pokemon/generate/group_by_type', req)
      .then(res => {
        console.log(res)
        // this.pokemons = res
        this.$emit("newPokemons", res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchPokemonFromTerrain() {},
  },
};
</script>

<style>
.split {
  display: flex;
  align-content: flex-start;
}

.half {
}

.third {
  width: 30%;
}
</style>
