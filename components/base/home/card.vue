<script setup lang="ts">
const props = defineProps<{
  image: string;
  text: string;
}>();

const { getAssetGlob } = useImg();
const images = getAssetGlob();
</script>

<template>
  <v-card link rounded="xl">
    <v-img :src="images[props.image]" />
    <v-sheet
      class="pa-3 d-flex justify-center align-center text-center"
      color="footer"
      height="70"
      width="100%"
    >
      <span>
        {{ props.text }}
      </span>
    </v-sheet>
  </v-card>
</template>
