<script lang="ts" setup>
import { STATIC_LINKS } from '~/config/constants';

const { t } = useI18n();
const { isMobile } = useDevice();

const navigateMapsCZ = () => {
  navigateTo(STATIC_LINKS.NAVIGATION.MAPY_CZ, { open: { target: '_blank' } });
};

const navigateGoogleMaps = () => {
  navigateTo(STATIC_LINKS.NAVIGATION.GOOGLE_MAPS, {
    open: { target: '_blank' },
  });
};
</script>

<template>
  <v-container class="max-w-1200">
    <base-layout-row>
      <template #left>
        <base-paragraph name="contact.introduction" />
        <base-typography-table
          v-if="!isMobile"
          class="w-100"
          density="default"
          name="contact_us"
          text-position="sides"
        />
        <base-typography-description-list v-else name="contact_us" />
      </template>
      <template #right>
        <base-image alt="Naše obsluha" src="placeholder.png" />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-image alt="Exteriér Bistro Name" src="placeholder.png" />
        <div class="d-flex justify-space-around align-center mt-5 w-100 px-10">
          <div v-if="!isMobile">{{ t('home.introduction.navigate') }}:</div>
          <v-btn
            alt="Navigovat přes Google mapy"
            icon=""
            size="large"
            @click="navigateMapsCZ"
          >
            <base-asset
              alt="Mapy.cz"
              asset-name="smaps.png"
              hover-asset-name="smaps-hover.png"
              width="100%"
            />
          </v-btn>
          <v-btn
            aria-label="Navigovat přes Mapy.cz"
            icon=""
            size="large"
            @click="navigateGoogleMaps"
          >
            <base-asset
              alt="Google maps"
              asset-name="gmaps.png"
              hover-asset-name="gmaps-hover.png"
              width="100%"
            />
          </v-btn>
        </div>
      </template>
      <template #right>
        <base-home-heading :text="t('home.opening-hrs.title')" />
        <base-typography-table
          class="w-100"
          density="default"
          name="home.opening-hrs"
          text-position="center"
        />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-paragraph name="home.news" />
        <base-link-group-socials class="mt-2" />
        <!--        <base-image alt="Interiér bistra" src="placeholder.png" />-->
      </template>
    </base-layout-row>
  </v-container>
</template>

<style scoped></style>
