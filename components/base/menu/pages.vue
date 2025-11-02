<script setup lang="ts">
const menuList = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg'];
</script>

<template>
  <v-row class="d-flex justify-center">
    <v-col
      v-for="(menuPage, i) in menuList"
      :key="i"
      class="v-col-xs-12 v-col-sm-12 v-col-md-6 v-col-lg-6 v-col-xl-6 v-col-xxl-6 max-w-550"
    >
      <v-card rounded>
        {{ menuPage }} {{ i }}
        <v-img :src="images[menuPage]" />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
