<script setup lang="ts">
import IInstagram from 'assets/icons/instagram.svg';
import IFacebook from 'assets/icons/facebook.svg';
import ITiktok from 'assets/icons/tiktok.svg';
import { STATIC_LINKS } from '~/config/constants';

const socialLinks = [
  {
    href: STATIC_LINKS.INSTAGRAM,
    icon: IInstagram,
  },
  {
    href: STATIC_LINKS.FACEBOOK,
    icon: IFacebook,
  },
  {
    href: STATIC_LINKS.TIKTOK,
    icon: ITiktok,
  },
];
</script>

<template>
  <div>
    <a
      v-for="(link, i) in socialLinks"
      :key="i"
      class="mx-3 cursor-pointer"
      :href="link.href"
      target="_blank"
    >
      <v-icon :icon="link.icon" />
    </a>
  </div>
</template>
