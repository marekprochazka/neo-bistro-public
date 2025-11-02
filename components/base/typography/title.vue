<script setup lang="ts">
const { t } = useI18n();
const { isMobile } = useDevice();
</script>

<template>
  <!--   TODO: remove redundancy with if statement only inside class-->
  <div v-if="!isMobile">
    <span class="font-amsterdam fs-50 align-self-end">{{
      t('base.title.1')
    }}</span>
    <span class="align-self-end mx-2 py-4 fs-24 uppercase letter-spacing">{{
      t('base.title.2')
    }}</span>
  </div>
  <div v-else>
    <span class="font-amsterdam fs-36 align-self-end">{{
      t('base.title.1')
    }}</span>
    <span class="align-self-end mx-2 py-4 fs-20 uppercase letter-spacing">{{
      t('base.title.2')
    }}</span>
  </div>
</template>
