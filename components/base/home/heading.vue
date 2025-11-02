<script setup lang="ts">
const props = defineProps<{
  text: string;
  prepend?: string;
  textPosition?: string;
  size?: string;
}>();
</script>

<template>
  <div
    class="mb-5"
    :class="
      (props.textPosition ? props.textPosition : 'text-center') +
      ' ' +
      (props.size ? props.size : 'fs-32')
    "
  >
    <span class="font-amsterdam">{{ props.prepend }}</span>
    {{ props.text }}
  </div>
</template>
