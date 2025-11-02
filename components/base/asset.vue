<script lang="ts" setup>
const props = defineProps<{
  assetName: string;
  hoverAssetName?: string;
}>();

const { getAssetGlob } = useImg();
const images = getAssetGlob();

const isHovered = ref(false);
const activeImage = computed(() => {
  return isHovered.value && props.hoverAssetName
    ? images[props.hoverAssetName]
    : images[props.assetName];
});
</script>

<template>
  <img
    alt="Discover Nuxt 3"
    :src="activeImage"
    @mouseleave="isHovered = false"
    @mouseover="isHovered = true"
  />
</template>

<style scoped></style>
