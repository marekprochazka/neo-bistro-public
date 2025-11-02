<script setup lang="ts">
import { useTyping } from '~/composables/useTyping';

const props = withDefaults(
  defineProps<{
    initialPause?: number;
    items: string[];
    pauseDuration?: number;
    typeSpeed?: number;
  }>(),
  {
    initialPause: 1000,
    pauseDuration: 2500,
    typeSpeed: 35,
  },
);

const { textVisible, textInvisible, doTyping, iterate } = useTyping(props);

doTyping();

onUnmounted(() => {
  iterate.value = false;
});
</script>

<template>
  <span>
    <span>{{ textVisible }}</span>
    <!--    <span class="blink">|</span>-->
    <span class="invisibleText">{{ textInvisible }}</span>
  </span>
</template>
