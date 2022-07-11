<template>
  <v-container>
    <v-row class="text-center">
      <v-row class="d-flex justify-space-between">
        <v-col class="text-left">
          <p class="mb-0">hp:</p>
          <p class="mb-0">atk:</p>
          <p class="mb-0">def:</p>
          <p class="mb-0">sp atk:</p>
          <p class="mb-0">sp def:</p>
          <p class="mb-0">spd:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{stats[0]}}</p>
          <p class="mb-0">{{stats[1]}}</p>
          <p class="mb-0">{{stats[2]}}</p>
          <p class="mb-0">{{stats[3]}}</p>
          <p class="mb-0">{{stats[4]}}</p>
          <p class="mb-0">{{stats[5]}}</p>
        </v-col>
      </v-row>
      <v-col class="text-left">
        <p class="mb-0">gender: {{ gender }}</p>
        <p class="mb-0">Weight class: {{ weight_class }}</p>
        <p class="mb-0">size: {{ size }}</p>
        <p class="mb-0">nature: {{ nature }}</p>
        <p class="mb-0">type: {{ type }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    stats: [],
  },
  data() {
    return {
      gender: "male",
      weight_class: 3,
      type: "Normal",
      size: "Medium",
      nature: "Happy",
      hp: { status: "hp", base: 0, added: 0, final: 0 },
      atk: { status: "atk", base: 0, added: 0, final: 0 },
      def: { status: "def", base: 0, added: 0, final: 0 },
      sp_atk: { status: "sp atk", base: 0, added: 0, final: 0 },
      sp_def: { status: "sp def", base: 0, added: 0, final: 0 },
      spd: { status: "spd", base: 0, added: 0, final: 0 },
    };
  },
  methods: {},
};
</script>

<style></style>
