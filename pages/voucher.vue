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
</script>

<template>
  <v-container class="max-w-1200 d-flex flex-column align-center">
    <v-row
      class="d-flex flex-column align-center mb-8 text-center"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="voucher.introduction" />
      <base-image alt="Dárkový poukaz" src="placeholder.png" />
    </v-row>
    <base-layout-row>
      <template #left>
        <base-paragraph
          heading-position="text-left"
          heading-prepend="1."
          heading-size="fs-24"
          name="voucher.how_it_works"
        />
      </template>
      <template #right>
        <base-paragraph
          heading-position="text-left"
          heading-prepend="2."
          heading-size="fs-24"
          name="voucher.benefits"
        />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-paragraph
          heading-position="text-left"
          heading-prepend="3."
          heading-size="fs-24"
          name="voucher.how_to_buy"
        />
      </template>
    </base-layout-row>
    <base-contact-us />
  </v-container>
</template>

<style scoped></style>
