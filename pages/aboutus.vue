<script lang="ts" setup>
import { AUTH_COOKIE_NAME } from '~/config/constants';
import type UserProfile from '~/schemas/public/UserProfile';

const { isMobileOrTablet } = useDevice();

async function getProfile() {
  const token = useCookie(AUTH_COOKIE_NAME).value;
  if (!token) {
    console.log('No token');
    return;
  }
  const { data, error } = await unpackResponse<UserProfile>(
    useFetch(`/api/auth/user/${token}`),
  );
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }
}

getProfile();

//hover effect
import { computed, ref, watch } from 'vue';

const locationSide = ref('top');
const locationAlign = ref('center');
const originSide = ref('auto');
const originAlign = ref('');

const originDisabled = computed(() => {
  return ['auto', 'overlap'].includes(originSide.value);
});

watch(locationSide, (val) => {
  if (['top', 'bottom'].includes(val)) {
    locationAlign.value =
      {
        top: 'start',
        bottom: 'end',
      }[locationAlign.value] || locationAlign.value;
  } else {
    locationAlign.value =
      {
        start: 'top',
        end: 'bottom',
      }[locationAlign.value] || locationAlign.value;
  }
});
watch(originDisabled, (val) => {
  if (!val && !originAlign.value) {
    originAlign.value = 'center';
  }
});

onMounted(() => {
  navigateTo('/');
});
</script>

<template>
  <v-container class="max-w-1200 d-flex flex-column align-center">
    <base-layout-row>
      <template #left>
        <base-paragraph name="aboutus.who_we_are" />
      </template>
      <template #right>
        <base-image alt="Obsluha bistra" src="contact.jpg" />
      </template>
    </base-layout-row>
    <v-row
      class="d-flex justify-start"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="aboutus.what_we_can" />
    </v-row>
    <v-row
      class="d-flex justify-start w-100"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="aboutus.what_to_find" />
    </v-row>
    <v-row class="d-flex flex-column align-center">
      <base-image
        alt="Koření"
        disable_elevation
        src="koreni.png"
        width="100px"
      />
    </v-row>
    <base-layout-row>
      <template #left>
        <base-image alt="Náš Kuchař" src="cook.jpg" />
      </template>
      <template #right>
        <base-paragraph name="aboutus.meet_your_cook" />
      </template>
    </base-layout-row>
    <v-row
      class="d-flex justify-start"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="aboutus.whos_behind" />
    </v-row>
    <v-row
      class="d-flex justify-start w-100"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="aboutus.what_connects_us" />
    </v-row>
    <v-row class="d-flex flex-column align-center">
      <base-image alt="Houby" disable_elevation src="houby.png" width="100px" />
    </v-row>
    <base-contact-us />
  </v-container>
</template>

<style scoped></style>
