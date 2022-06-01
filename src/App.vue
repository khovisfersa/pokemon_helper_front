<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn color="transparent" to="/">
        <h1>PTU Helper</h1>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn color="transparent" to="/pokemon/generate">Pokemon</v-btn>
      <v-btn color="transparent" to="/trainer/generate">Trainer</v-btn>
      <v-btn color="transparent" to="/area">Area</v-btn>
    </v-app-bar>

    <div class="indigo lighten-2">
      <v-main color="indigo">
        <div class="display">
          <div class="side_margins"></div>
          <router-view class="content" />
          <div class="side_margins"></div>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SearchPokemon from "./components/SearchPokemon.vue";

export default Vue.extend({
  name: "App",
  components: {
    SearchPokemon,
  },
  data: () => ({
    //
  }),
  methods: {},
});
</script>

<style>
.display {
  display: flex;
  flex-direction: row;
}

.content {
  width: 90%;
}

.side_margins {
  width: 5%;
}
</style>
