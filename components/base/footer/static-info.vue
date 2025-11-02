<script setup lang="ts">
const { isMobile } = useDevice();
const { tm } = useI18n();
const { replaceTranslatePlaceholdersStrings } = useTransform();
const transformedData = replaceTranslatePlaceholdersStrings(
  tm('base.footer.text_arr'),
  tm('base.footer.text_has_links'),
);
</script>

<template>
  <div v-if="!isMobile">
    <v-row
      v-for="(i, index) in transformedData"
      :key="index"
      class="mx-3 my-1 uppercase d-flex justify-center align-center"
    >
      <span>{{ i }}</span>
    </v-row>
  </div>
  <div v-else>
    <base-typography-description-list name="base.footer" text-center />
  </div>
</template>
