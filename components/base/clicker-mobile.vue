<script setup lang="ts">
// import { useCycleList, useIntervalFn } from '@vueuse/core';

const props = defineProps<{
  items: string[];
}>();
</script>

<template>
  <v-carousel cycle hide-delimiter-background :show-arrows="false">
    <v-carousel-item v-for="(item, i) in props.items" :key="i">
      <span class="text-rosePink fs-32">{{ item }}</span>
    </v-carousel-item>
  </v-carousel>
</template>
