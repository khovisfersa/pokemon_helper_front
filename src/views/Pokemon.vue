<template>
  <v-container class="text-center mb-10">
    <div class="text-center">
      <h1 flex>Here you can create Pokemons</h1>
    </div>
    <v-spacer></v-spacer>
    <v-row class="d-flex justify-space-around mb-3 mt-1">
      <v-btn class="d-flex" to="/pokemon/generate"
        >Generate random pokemons</v-btn
      >
      <v-btn class="d-flex" to="/pokemon/make">Make tailored pokemons</v-btn>
    </v-row>
    <div class="half">
      <SearchPokemon class="search" />
      <v-spacer class="spacer"></v-spacer>
      <div style="width: 45%">
        <Pokemon_show
          class="pokemon-card"
          v-for="pokemon in pokemons"
          :key="pokemon"
          :pokemon="pokemon"
        />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import SearchPokemon from "../components/SearchPokemon.vue";
import Pokemon_show from "../components/Pokemon_show.vue";
export default {
  components: {
    SearchPokemon,
    Pokemon_show,
  },
  data() {
    return {
      pokemons: [
        { name: "cinderace" },
        { name: "muk" },
        { name: "cramorant" },
        { name: "falinks" },
      ],
    };
  },
};
</script>

<style>
.title {
  display: flex;
  flex-direction: row;
  align-content: center;
}
.half {
  display: flex;
  align-content: flex-start;
}

.spacer {
  width: 5%;
}

.pokemon-card {
  margin-bottom: 10px;
  width: 100%;
}

.search {
  width: 45%;
}
</style>
