<template>
  <v-container>
    <v-card>
      <v-card-title
        ><span class="text-left">{{ move.name }} - {{ move.type }} </span></v-card-title
      >
      <div>
        <v-row class="text-left">
          <v-col class="ml-2">
            <p>DB: {{ move.DB }}</p>
            <p>Damage Dice: {{ move.dmg_dice }}</p>
            <p>description: {{ move.description }}</p>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
  },
  data() {
    return {
      move: {
        name: "Hyper Beam",
        type: "Normal",
        DB: "12",
        dmg_dice: "12d6+4",
        description:
          "Yeah that's it. a very hyper beam shoots out of the pokemon's mouth. Nothing new under the sun",
      },
    };
  },
  methods: {},
};
</script>
