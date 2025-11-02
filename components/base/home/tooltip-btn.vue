<script setup lang="ts">
const _props = defineProps<{
  color: string;
  iconName: string;
  tooltipText: string;
}>();

const show = ref(false);

const showTooltip = () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 1000);
};
</script>

<template>
  <v-tooltip v-model="show">
    <template #activator="{ props }">
      <v-btn
        class="my-auto"
        :color="_props.color"
        icon=""
        size="large"
        v-bind="props"
        @click="showTooltip"
      >
        <base-asset :asset-name="_props.iconName" width="40" />
      </v-btn>
    </template>
    <span>{{ _props.tooltipText }}</span>
  </v-tooltip>
</template>
