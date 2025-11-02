<script setup lang="ts">
const props = defineProps<{
  name: string;
  type: 'ul' | 'ol';
}>();

const { tm } = useI18n();

const text = tm(props.name + '.list_arr');
</script>

<template>
  <component :is="props.type" class="ml-6 mb-4">
    <li v-for="(line, index) in text" :key="index">
      {{ line }}
    </li>
  </component>
</template>

<style scoped></style>
