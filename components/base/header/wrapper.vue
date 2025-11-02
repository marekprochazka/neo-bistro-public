<script setup="" lang="ts">
// TODO: collapsing (https://github.com/vuetifyjs/vuetify/issues/15202)

import { useNavLinks } from '~/composables/useNavLinks';

const { isMobile } = useDevice();

const { getPrimaryLinks } = useNavLinks();
const primaryLinks = getPrimaryLinks();
</script>

<template>
  <base-header-system-bar />
  <base-header-mobile v-if="isMobile" :primary-links="primaryLinks" />
  <base-header-desktop v-if="!isMobile" :primary-links="primaryLinks" />
</template>
