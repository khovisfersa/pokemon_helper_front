<template>
  <v-container>
    <v-card>
      <v-card-title
        ><span class="text-left">{{ move[0] }} - {{ move[1] }} </span></v-card-title
      >
      <div>
        <v-row class="text-left">
          <v-col class="ml-2">
            <p>DB: {{ move[2]}}</p>
            <!-- <p>Damage Dice: {{ move.dmg_dice }}</p> -->
            <p>description: {{ move[3] }}</p>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    move: {}
  },
  data() {
    return {
      
    };
  },
  methods: {},
};
</script>
