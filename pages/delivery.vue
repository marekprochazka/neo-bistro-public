<script lang="ts" setup>
import { AUTH_COOKIE_NAME } from '~/config/constants';
import type UserProfile from '~/schemas/public/UserProfile';

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
  <v-container class="max-w-1200">
    <base-layout-row>
      <template #left>
        <base-paragraph name="delivery.company_lunches" />
      </template>
      <template #right>
        <base-image alt="Trhané hovězí maso s bramborovou kaší" src="placeholder.png" />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-image alt="Plněné kuřecí maso" src="placeholder.png" />
      </template>
      <template #right>
        <base-paragraph name="delivery.what_products_to_choose" />
        <base-typography-list
          name="delivery.what_products_to_choose"
          type="ol"
        />
      </template>
    </base-layout-row>
    <base-contact-us />
  </v-container>
</template>

<style scoped></style>
