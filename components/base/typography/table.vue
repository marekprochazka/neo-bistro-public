<script setup lang="ts">
const props = defineProps<{
  name: string;
  textPosition: 'center' | 'sides';
  density: 'default' | 'compact';
}>();
// TODO: pouzit nepovinne props - haze to error 500

const { tm } = useI18n();
const { replaceTranslatePlaceholdersDicts } = useTransform();
const items2 = replaceTranslatePlaceholdersDicts(
  tm(props.name + '.table_data'),
);
</script>

<template>
  <v-table
    class="bg-transparent"
    :density="props.density === 'default' ? 'default' : 'compact'"
  >
    <tbody>
      <tr v-for="(item, i) in items2" :key="i">
        <td
          :class="props.textPosition === 'center' ? 'text-center' : 'text-left'"
        >
          {{ item.title }}
        </td>
        <td
          :class="
            props.textPosition === 'center' ? 'text-center' : 'text-right'
          "
          v-html="item.value"
        />
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
