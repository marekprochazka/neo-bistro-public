<script setup lang="ts">
const props = defineProps<{
  rows: {
    text: string;
    image: string;
    list: 'ul' | 'ol' | undefined;
  }[];
}>();

const { isMobileOrTablet } = useDevice();
</script>

<template>
  <div v-if="!isMobileOrTablet">
    <base-layout-row v-for="(row, i) in props.rows" :key="i">
      <template #left>
        <div v-if="i % 2" class="w-100">
          <base-image :src="row.image" />
        </div>
        <div v-else>
          <base-paragraph :name="row.text" />
          <base-typography-list
            v-if="row.list"
            :name="row.text"
            :type="row.list"
          />
        </div>
      </template>
      <template #right>
        <div v-if="i % 2">
          <base-paragraph :name="row.text" />
          <base-typography-list
            v-if="row.list"
            :name="row.text"
            :type="row.list"
          />
        </div>
        <div v-else class="w-100">
          <base-image :src="row.image" />
        </div>
      </template>
    </base-layout-row>
  </div>
  <div v-else class="d-flex flex-column align-center">
    <v-col v-for="(row, i) in props.rows" :key="i" class="max-w-550" cols="12">
      <base-paragraph :name="row.text" />
      <base-typography-list v-if="row.list" :name="row.text" :type="row.list" />
      <base-image :src="row.image" />
    </v-col>
  </div>
</template>

<style scoped></style>
