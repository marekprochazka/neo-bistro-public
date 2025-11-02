<script setup lang="ts">
const { isMobileOrTablet, isDesktop } = useDevice();
</script>
<template>
  <v-row v-if="isDesktop">
    <v-col class="d-flex flex-column align-center mb-10" cols="6">
      <slot name="left"></slot>
    </v-col>
    <v-col class="d-flex flex-column align-center mb-10" cols="6">
      <slot name="right"></slot>
    </v-col>
  </v-row>
  <v-row v-if="isMobileOrTablet" class="d-flex justify-center">
    <v-col class="d-flex flex-column align-center mb-10 max-w-550" cols="12">
      <slot name="left"></slot>
    </v-col>
    <v-col class="d-flex flex-column align-center mb-10 max-w-550" cols="12">
      <slot name="right"></slot>
    </v-col>
  </v-row>
</template>
