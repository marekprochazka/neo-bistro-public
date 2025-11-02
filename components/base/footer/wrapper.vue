<script lang="ts" setup>
import { useNavLinks } from '~/composables/useNavLinks';

const { getPrimaryLinks } = useNavLinks();
const primaryLinks = getPrimaryLinks();

const { getActiveUserLite } = useAuthSession();
const activeUser = await getActiveUserLite();

const { isMobile, isMobileOrTablet } = useDevice();

function onLogout() {
  const { logout } = useAuthSession();
  logout();
}
</script>

<template>
  <v-footer class="bg-footer">
    <v-col>
      <v-row>
        <v-container class="max-w-1200 d-flex flex-column align-center">
          <!--          <v-icon class="mb-5" :icon="ILogo" size="70" />-->
          <base-asset asset-name="logo-pink.png" width="70" />
          <v-container
            class="mb-5 d-flex justify-center"
            :class="isMobileOrTablet ? 'flex-column' : 'flex-row'"
          >
            <nuxt-link-locale
              v-for="(link, i) in primaryLinks"
              :key="i"
              class="text-center px-10 fs-16"
              :to="link.to"
            >
              {{ link.label }}
            </nuxt-link-locale>
          </v-container>
          <base-footer-static-info />
          <div class="my-3" />
          <base-link-group-contacts :mode="isMobile ? 'row' : 'column'" />
          <div class="my-5" />
          <base-link-group-socials />
          <div class="my-7" />
        </v-container>
      </v-row>
      <v-row>
        <v-col>
          <span v-if="activeUser">{{ activeUser.email }}</span>
        </v-col>
        <v-spacer />
      </v-row>
    </v-col>
  </v-footer>
</template>

<style scoped></style>
