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

const rows: { text: string; image: string; list: 'ul' | 'ol' | undefined }[] = [
  {
    text: 'renting.introduction',
    image: 'placeholder.png',
    list: 'ul',
  },
  {
    text: 'renting.events',
    image: 'placeholder.png',
    list: 'ol',
  },
  {
    text: 'renting.products',
    image: 'placeholder.png',
    list: 'ol',
  },
  {
    text: 'renting.collaboration',
    image: 'placeholder.png',
    list: 'ol',
  },
];
</script>

<template>
  <v-container
    class="max-w-1200 d-flex flex-column justify-center align-center"
  >
    <base-layout-alternating-row :rows="rows" />
    <v-row
      class="d-flex flex-column align-center text-center justify-center"
      :class="isMobileOrTablet ? 'max-w-550' : ''"
    >
      <base-paragraph name="renting.conclusion" />
    </v-row>
    <base-contact-us />

    <!--  TODO: chybi icony s poctem zidli/stolu  -->

    <!--              <v-sheet class="d-flex flex-column align-stretch" height="100%">-->
    <!--                <v-btn class="my-auto" color="rosePink" icon="" size="large">-->
    <!--                  <base-asset asset-name="chair.png" width="26" />-->
    <!--                  <v-tooltip activator="parent" location="start"-->
    <!--                    >32 Židlí</v-tooltip-->
    <!--                  >-->
    <!--                </v-btn>-->
    <!--                <v-btn class="my-auto" color="success" icon="" size="large">-->
    <!--                  <base-asset asset-name="table.png" width="36" />-->
    <!--                  <v-tooltip activator="parent" location="start"-->
    <!--                    >8 Stolů</v-tooltip-->
    <!--                  >-->
    <!--                </v-btn>-->
    <!--              </v-sheet>-->
  </v-container>
</template>

<style scoped></style>
