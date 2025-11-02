<script setup lang="ts"></script>
<template>
  <base-layout-row>
    <template #left>
      <v-container>
        <base-paragraph name="contact_us" />
        <base-typography-table
          density="compact"
          name="contact_us"
          text-position="sides"
        />
      </v-container>
    </template>
    <template #right>
      <base-image disable_elevation src="cutavocado.png" />
    </template>
  </base-layout-row>
</template>
