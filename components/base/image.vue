<script setup lang="ts">
const props = defineProps<{
  src: string;
  disable_elevation?: boolean;
  width?: string;
}>();
const { getAssetGlob } = useImg();
const images = getAssetGlob();
</script>

<template>
  <v-sheet
    class="max-w-550 mt-5"
    :class="props.disable_elevation ? '' : 'elevation-5'"
    rounded="xl"
    :width="props.width ? props.width : '100%'"
  >
    <v-img cover rounded="xl" :src="images[props.src]" width="100%" />
  </v-sheet>
</template>

<style scoped></style>
