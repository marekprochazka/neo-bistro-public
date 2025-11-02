<script setup lang="ts">
import type { IHeaderProps } from '~/components/base/header/types';

const { t } = useI18n();
const props = defineProps<IHeaderProps>();
const home_link = t('base.header.link.home');
const drawer = ref(false);
</script>

<template>
  <v-app-bar color="darkPink" height="90">
    <v-app-bar-title>
      <nuxt-link-locale :to="{ name: 'index' }">
        <!--        <v-icon class="text-black" :icon="ILogo" size="70" />-->
        <base-asset asset-name="logo-pink.png" width="70" />
      </nuxt-link-locale>
    </v-app-bar-title>
    <v-spacer />
    <v-app-bar-nav-icon
      color="black"
      size="x-large"
      variant="text"
      @click.stop="drawer = !drawer"
    />
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :class="drawer ? 'w-100' : 'w-0'"
    :scrim="false"
  >
    <v-container class="bg-lightPink h-100" fluid>
      <v-list>
        <v-list-item class="text-center mb-2 text-black">
          <nuxt-link-locale :to="{ name: 'index' }">
            {{ home_link }}
          </nuxt-link-locale>
        </v-list-item>
        <v-list-item
          v-for="(link, i) in props.primaryLinks"
          :key="i"
          class="text-center mb-2 text-black"
        >
          <nuxt-link-locale class="fs-16" :to="link.to">
            {{ link.label }}
          </nuxt-link-locale>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>
