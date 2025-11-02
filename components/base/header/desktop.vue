<script setup lang="ts">
import ILogo from '~/assets/icons/logo.png';
import type { IHeaderProps } from '~/components/base/header/types';

const props = defineProps<IHeaderProps>();

const pripraryHalves = computed(() => {
  const half = Math.ceil(props.primaryLinks.length / 2);
  return {
    left: props.primaryLinks.slice(0, half),
    right: props.primaryLinks.slice(half, props.primaryLinks.length),
  };
});

// TODO cache in storage
const { getActiveUserLite } = useAuthSession();
const activeUser = await getActiveUserLite();
const localePath = useLocalePath();
const adminLink = localePath({ name: 'admin-home' });
const { getAssetGlob } = useImg();

const images = getAssetGlob();
</script>

<template>
  <!--  <v-app-bar id="app-bar-main" color="lightPink" extension-height="90">-->
  <!--    <v-spacer />-->
  <!--    <v-row>-->
  <!--      <v-col-->
  <!--        v-for="(link, i) in props.primaryLinks"-->
  <!--        :key="i"-->
  <!--        class="text-center"-->
  <!--        cols="2"-->
  <!--      >-->
  <!--        <nuxt-link-locale :to="link.to">-->
  <!--          {{ link.label }}-->
  <!--        </nuxt-link-locale>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--    <v-spacer />-->
  <!--    <nuxt-link-locale v-if="activeUser?.is_admin" :to="adminLink">-->
  <!--      Admin-->
  <!--    </nuxt-link-locale>-->

  <!--    <template #extension>-->
  <!--      <v-toolbar id="tool-bar-main" color="darkPink" height="90">-->
  <!--        <v-row class="text-center text-black">-->
  <!--          <v-col-->
  <!--            v-for="(link, i) in secondaryHalves.left"-->
  <!--            :key="i"-->
  <!--            class="align-center justify-center d-flex"-->
  <!--          >-->
  <!--            <nuxt-link-locale class="link-alt" :to="link.to">-->
  <!--              {{ link.label }}-->
  <!--            </nuxt-link-locale>-->
  <!--          </v-col>-->
  <!--          <v-col class="text-center">-->
  <!--            <nuxt-link-locale class="link-alt" to="/">-->
  <!--              <v-icon class="pt-2" :icon="ILogo" size="70" />-->
  <!--            </nuxt-link-locale>-->
  <!--          </v-col>-->
  <!--          <v-col-->
  <!--            v-for="(link, i) in secondaryHalves.right"-->
  <!--            :key="i"-->
  <!--            class="align-center justify-center d-flex"-->
  <!--          >-->
  <!--            <nuxt-link-locale class="link-alt" :to="link.to">-->
  <!--              {{ link.label }}-->
  <!--            </nuxt-link-locale>-->
  <!--          </v-col>-->
  <!--        </v-row>-->
  <!--      </v-toolbar>-->
  <!--    </template>-->
  <!--  </v-app-bar>-->
  <v-app-bar id="app-bar-main" color="darkPink" height="90">
    <v-container class="d-flex justify-center">
      <v-row class="text-black max-w-1200">
        <v-col
          v-for="(link, i) in pripraryHalves.left"
          :key="i"
          class="d-flex align-center justify-center"
        >
          <nuxt-link-locale class="text-center" :to="link.to">
            {{ link.label }}
          </nuxt-link-locale>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <nuxt-link-locale to="/">
            <!--            <v-icon class="pt-2" :icon="ILogo" size="70" />-->
            <base-asset asset-name="logo-pink.png" width="70" />
          </nuxt-link-locale>
        </v-col>
        <v-col
          v-for="(link, i) in pripraryHalves.right"
          :key="i"
          class="d-flex align-center justify-center"
        >
          <nuxt-link-locale class="text-center" :to="link.to">
            {{ link.label }}
          </nuxt-link-locale>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
