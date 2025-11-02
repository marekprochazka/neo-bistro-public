<script setup lang="ts">
import IWolt from '~/assets/icons/wolt.svg';
import IBolt from '~/assets/icons/bolt.svg';

const SVGButtonsData = [
  {
    icon: IWolt,
    href: '/',
  },
  {
    icon: IWolt,
    href: 'https://wolt.com/',
  },
  {
    icon: IBolt,
    href: 'https://bolt.eu/',
  },
];
</script>

<template>
  <v-row justify="center">
    <v-col
      v-for="(button, i) in SVGButtonsData"
      :key="i"
      class="text-center"
      cols="1"
    >
      <nuxt-link-locale target="_blank" :to="button.href">
        <v-icon :icon="button.icon" size="42" />
      </nuxt-link-locale>
    </v-col>
    <v-col cols="1">
      <nuxt-link-locale target="_blank" :to="'#'">
        <base-asset
          asset-name="foodora.png"
          style="width: 42px; height: auto"
        />
      </nuxt-link-locale>
    </v-col>
  </v-row>
</template>
