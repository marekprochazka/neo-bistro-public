<script setup lang="ts">
import type { COLORS_NAME_TYPE } from '~/config/constants';

const props = defineProps<{
  color: COLORS_NAME_TYPE;
  hoverColor?: COLORS_NAME_TYPE;
}>();

const events = defineEmits(['click']);

const handleClick = () => {
  events('click');
};

// Any custom functionality here
</script>

<template>
  <!-- Any custom css here  -->
  <v-btn :color="props.color" @click="handleClick">
    <slot />
  </v-btn>
</template>
