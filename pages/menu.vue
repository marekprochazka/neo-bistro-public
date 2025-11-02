<script lang="ts" setup>
import type Menu from '~/schemas/public/Menu';

const { isMobile, isMobileOrTablet } = useDevice();
const { getAssetGlob } = useImg();
// const images = getAssetGlob();

const menus = ref<Menu[]>([]);

async function init() {
  const { getAllMenus } = useFoodMenu();
  menus.value = await getAllMenus();
}

const menusSplitted = computed(() => {
  const result: Menu[][] = [];
  for (let i = 0; i < menus.value.length; i += 2) {
    result.push(menus.value.slice(i, i + 2));
  }
  return result;
});
init();


</script>

<template>
  <v-container class="max-w-1200">
    <v-col>
      <v-row class="d-flex justify-center">
        <v-col class="text-center" :class="isMobileOrTablet ? 'max-w-550' : ''">
          <base-paragraph name="menu.introduction" />
        </v-col>
      </v-row>
      <base-layout-row v-for="(menuRow, index) in menusSplitted" :key="index">
        <template #left>
          <v-card rounded>
            <v-img
              :max-width="isMobile ? 350 : 500"
              :src="menuRow[0].file_data!"
              width="auto"
            />
          </v-card>
        </template>
        <template #right>
          <v-card rounded>
            <v-img
              :max-width="isMobile ? 350 : 500"
              :src="menuRow[1].file_data!"
              width="auto"
            />
          </v-card>
        </template>
      </base-layout-row>

      <!--      <base-contact-us />-->
    </v-col>
  </v-container>
</template>

<style scoped></style>
