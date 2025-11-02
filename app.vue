<script setup lang="ts">
import { VSonner } from 'vuetify-sonner';

const { t } = useI18n();
useHead({
  title: t('base.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('base.meta.description_global'),
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <v-sonner position="bottom-right" />
    <v-app>
      <base-header-wrapper />
      <v-main class="background">
        <v-container class="bg-transparent">
          <nuxt-page />
        </v-container>
      </v-main>
      <base-footer-wrapper />
    </v-app>
  </nuxt-layout>
</template>
