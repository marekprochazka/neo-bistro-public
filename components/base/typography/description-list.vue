<script setup lang="ts">
const props = defineProps<{
  name: string;
  textCenter?: boolean;
}>();
const { tm } = useI18n();
const { replaceTranslatePlaceholdersDicts } = useTransform();
const text = replaceTranslatePlaceholdersDicts(tm(props.name + '.table_data'));
</script>

<template>
  <dl>
    <div v-for="(item, i) in text" :key="i" class="d-contents">
      <dt :class="props.textCenter ? 'text-center' : ''">
        <span>{{ item.title }}:</span>
      </dt>
      <dd
        class="mb-4"
        :class="props.textCenter ? 'text-center' : 'text-right'"
        v-html="item.value"
      />
    </div>
  </dl>
</template>

<style scoped></style>
