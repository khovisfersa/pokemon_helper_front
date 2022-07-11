<template>
  <v-container>
    <div class="text-center">
      <h1>here you can create trainers!</h1>
    </div>
    <v-row class="d-flex justify-space-around mb-3 mt-1">
      <v-btn>generate trainer</v-btn>
      <v-btn>make tailored Trainer</v-btn>
    </v-row>
    <v-row class="d-flex justify-space-around mb-3 mt-1">
      <v-col><router-view></router-view> </v-col>
      <v-col><showTrainer /> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import makeTrainer from "../components/trainer/makeTrainer.vue";
import showTrainer from "../components/trainer/showTrainer.vue";
export default {
  components: {
    makeTrainer,showTrainer
  }
};
</script>

<style lang="ts"></style>
