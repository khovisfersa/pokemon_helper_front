<template>
  <div>
    <v-card>
      <v-card-title class="d-flex justify-space-between"
        >{{ pokemon.level }} - {{ capitalizeFirstLetter(pokemon.name) }}
        <v-btn @click="showPkmn = !showPkmn">fechar/abrir</v-btn>
      </v-card-title>
      <div v-if="showPkmn">
        <v-card class="d-flex flex-row mb-2">
          <div>
            <v-img
              class=""
              width="120"
              :src="data.sprites.front_default"
            ></v-img>
          </div>
          <PokemonStatus />
        </v-card>
        <v-card class="mb-2">
          <v-card-text class="text-left"
            ><p>Capabilities: {{ capabilities }}</p></v-card-text
          >
          <v-card-text class="text-left"
            ><p>Skills: {{ skills }}</p></v-card-text
          >
        </v-card>
        <v-card class="mb-2">
          <CaptureRate />
        </v-card>
        <v-card>
          <v-card-title class="text-center">Moves</v-card-title>
          <PokemonMove v-for="move in moves" :key="move" />
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import CaptureRate from "./CaptureRate.vue";
import PokemonStatus from "./PokemonStatus.vue";
import PokemonMove from "./PokemonMove.vue";
export default {
  components: {
    CaptureRate,
    PokemonStatus,
    PokemonMove,
  },
  props: {
    pokemon: {},
  },
  data: () => {
    return {
      pokemon_api: [],
      showPkmn: false,
      capabilities: "teste",
      skills: "",
      moves: [{}],
      img: null,
      data: {},
      pokeapi: "https://pokeapi.co/api/v2/pokemon/",
      data_api: "http://localhost:3000",
    };
  },
  mounted() {
    this.getPokemonData(this.pokemon.name);
  },
  methods: {
    async getPokemonData(pokemon: string) {
      await axios
        .get(this.pokeapi + pokemon)
        .then((res) => {
          console.log(res.data);
          console.log("é possível que tenha dado certio");

          // let myObj = JSON.parse(res.data)
          console.log("Será possível .......... ");
          this.data = res.data;
          // this.img = myObj
          console.log("deu certo....?");
        })
        .catch((err) => {
          console.log("é, vei... deu ruim... de novo");
          console.log(err);
        });
    },
    capitalizeFirstLetter(name: string) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>
