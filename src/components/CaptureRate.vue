<template>
  <v-container>
    <h2>Capture Rate</h2>
    <v-row>
      <v-col>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.asleep"
          hide-details
          label="asleep"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.cursed"
          hide-details
          label="cursed"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.persistent.poisoned"
          hide-details
          label="poisoned"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.persistent.paralyzed"
          hide-details
          label="paralyzed"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.supressed"
          hide-details
          label="supressed"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.persistent.bad_sleep"
          hide-details
          label="bad_sleep"
        ></v-checkbox>
      </v-col>
      <v-col>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.persistent.burnt"
          hide-details
          label="burnt"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.persistent.frozen"
          hide-details
          label="frozen"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.confused"
          hide-details
          label="confused"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.enraged"
          hide-details
          label="enraged"
        ></v-checkbox>
        <v-checkbox
          class="mt-0"
          v-model="pokemon.afflictions.volatile.infatuated"
          hide-details
          label="infatuated"
        ></v-checkbox>
      </v-col>
      <v-col>
        <p class="mb-0">Hp left: {{ pokemon.current_hp }}</p>
        <p class="mb-0">Injuries: {{ pokemon.afflictions.injuries }}</p>
        <v-text-field
          outlined
          v-model.number="damage"
          :rules="rules_number"
          label="damage taken"
          placeholder="0"
        ></v-text-field>
        <v-btn @click="submitDamage(damage)">Submit</v-btn>
        <p>Capture Rate: {{ pokemon.capture_rate }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    hp: {
      default: 0,
    },
  },
  data() {
    return {
      pokemon: {
        capture_rate: 100,
        level: 5,
        current_hp: 50,
        max_hp: 80,
        evo_stage: 1,
        evo_stages_remaining: 2,
        is_legendary: false,
        is_pseudo_legendary: false,
        is_shiny: false,
        afflictions: {
          persistent: {
            poisoned: true,
            burnt: true,
            frozen: true,
            badly_poisoned: true,
            paralyzed: true,
          },
          volatile: {
            asleep: false,
            confused: false,
            cursed: false,
            enraged: false,
            supressed: false,
            bad_sleep: false,
            disabled: false,
            flinch: false,
            infatuated: false,
          },
          injuries: 3,
        },
      },
      injuries: 0,
      damage: null,
      // hp: null,
      capture_rate: 0,
      rules_number: [
        (value: number) => {
          if (value == 0 || value == null) return "there must be a number";
        }, //funcionando direito
      ],
    };
  },
  created() {
    this.calculateCaptureRate();
  },
  methods: {
    calculateCaptureRate() {
      let newCaptureRate: number = 100;
      newCaptureRate = newCaptureRate - 2 * this.pokemon.level;
      newCaptureRate =
        newCaptureRate + this.calculateHpInfluenceInCaptureRate();
      newCaptureRate =
        newCaptureRate + this.calculateEvoStageInfluenceInCaptureRate();
      newCaptureRate =
        newCaptureRate + this.calculateRarityInfluenceInCaptureRate();
      newCaptureRate = this.pokemon.is_shiny
        ? newCaptureRate - 10
        : newCaptureRate;
      // newCaptureRate =
      //   newCaptureRate + this.calculateAfflictionsInfluenceInCaptureRate();
      this.pokemon.capture_rate = newCaptureRate
      console.log(newCaptureRate)
      // return newCaptureRate;
    },
    calculateHpInfluenceInCaptureRate() {
      let percentage = this.pokemon.current_hp / this.pokemon.max_hp;
      if (percentage > 0.75) return -30;
      else if (percentage <= 0.75 && percentage > 0.5) return -15;
      else if (percentage <= 0.5 && percentage > 0.25) return 0;
      else if (percentage <= 0.25 && this.pokemon.current_hp > 1) return 15;
      else if (this.pokemon.current_hp == 1) return 30;
      else console.log("percentage: " + percentage);
    },
    calculateEvoStageInfluenceInCaptureRate() {
      if (this.pokemon.evo_stages_remaining == 2) return 10;
      else if (this.pokemon.evo_stages_remaining == 1) return 0;
      else if (this.pokemon.evo_stages_remaining == 1) return -10;
    },
    calculateRarityInfluenceInCaptureRate() {
      if (this.pokemon.is_legendary) return -30;
      else if (this.pokemon.is_pseudo_legendary) return -15;
      else return -10;
    },
    calculateAfflictionsInfluenceInCaptureRate() {
      let influence = 0;
      this.pokemon.afflictions.persistent.forEach((element: boolean) => {
        if (element) influence = influence + 10;
      });
      this.pokemon.afflictions.volatile.forEach((element: boolean) => {
        if (element) influence = influence + 5;
      });
      return influence;
    },
    submitDamage(damage: number) {
      this.pokemon.current_hp = this.pokemon.current_hp - damage
      damage = 0
      this.calculateCaptureRate()
    },
  },
};
</script>
