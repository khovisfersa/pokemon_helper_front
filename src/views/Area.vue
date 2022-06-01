<template>
  <v-container>
    <div class="text-center">
      <h1>Here you can create areas</h1>
    </div>
    <div>
      <v-row class="d-flex justify-space between">
        <v-col class="text-center">
          <MakeArea />
        </v-col>
        <v-col class="text-center mt-3">
          <v-expansion-panels>
            <v-expansion-panel>
              <ShowArea />
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import ShowArea from "@/components/area/ShowArea.vue";
import MakeArea from "@/components/area/MakeArea.vue";
export default {
  components: { ShowArea, MakeArea },
};
</script>

<style lang="ts"></style>
