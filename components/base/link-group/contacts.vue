<script setup lang="ts">
import ILocation from 'assets/icons/location.svg';
import IMobile from 'assets/icons/mobile.svg';
import IMail from 'assets/icons/mail.svg';
import { STATIC_INFO, STATIC_LINKS } from '~/config/constants';

const props = defineProps<{
  mode: 'row' | 'column';
}>();

const links = [
  {
    href: STATIC_LINKS.LOCATION,
    icon: ILocation,
    label: STATIC_INFO.ADDRESS,
  },
  {
    href: STATIC_LINKS.PHONE,
    icon: IMobile,
    label: STATIC_INFO.PHONE,
  },
  {
    href: STATIC_LINKS.EMAIL,
    icon: IMail,
    label: STATIC_INFO.EMAIL,
  },
];

const { isMobileOrTablet } = useDevice();
</script>

<template>
  <template v-if="props.mode === 'row'">
    <div class="d-flex flex-row">
      <nuxt-link-locale
        v-for="(link, i) in links"
        :key="i"
        class="mx-3 uppercase"
        target="_blank"
        :to="link.href"
      >
        <v-icon class="mx-1" :icon="link.icon" />
        <!-- Mobile collapsing enabled only in row mode -->
        <span v-if="!isMobileOrTablet">{{ link.label }}</span>
      </nuxt-link-locale>
    </div>
  </template>
  <template v-else>
    <v-list class="bg-transparent uppercase d-flex flex-column align-center">
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :prepend-icon="link.icon"
      >
        <nuxt-link-locale target="_blank" :to="link.href">
          <span>{{ link.label }}</span>
        </nuxt-link-locale>
      </v-list-item>
    </v-list>
    <!--    <v-row v-for="(link, i) in links" :key="i" class="mx-3 my-1 uppercase">-->
    <!--      <nuxt-link-locale target="_blank" :to="link.href">-->
    <!--        <v-icon class="mx-1" :icon="link.icon" />-->
    <!--        <span>{{ link.label }}</span>-->
    <!--      </nuxt-link-locale>-->
    <!--    </v-row>-->
  </template>
</template>
