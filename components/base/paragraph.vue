<script setup lang="ts">
const { t, tm } = useI18n();

const props = defineProps<{
  name: string;
  headingPrepend?: string;
  headingPosition?: string;
  headingSize?: string;
}>();
const text = ref<string[]>(tm(props.name + '.text_arr'));
const linesWithPlaceholders = tm(props.name + '.text_has_links');

const { replaceTranslatePlaceholdersStrings } = useTransform();
text.value = replaceTranslatePlaceholdersStrings(
  text.value,
  linesWithPlaceholders as number[],
);
</script>

<template>
  <v-container>
    <base-home-heading
      :prepend="props.headingPrepend"
      :size="props.headingSize"
      :text="t(props.name + '.title')"
      :text-position="props.headingPosition"
    />
    <p
      v-for="(line, index) in text"
      :key="index"
      class="mb-4"
      v-html="line"
    ></p>
  </v-container>
</template>

<style scoped></style>
