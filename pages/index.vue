<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { STATIC_LINKS } from '~/config/constants';

const { isMobile } = useDevice();

const { t, tm } = useI18n();
//hover effect
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
//-----------------------------------
const delivery = [
  {
    href: STATIC_LINKS.DELIVERY.BOLT,
    title: t('home.introduction.bolt'),
    hover_color_class: 'hover-color-bolt',
  },
  {
    href: STATIC_LINKS.DELIVERY.FOODORA,
    title: t('home.introduction.foodora'),
    hover_color_class: 'hover-color-foodora',
  },
  {
    href: STATIC_LINKS.DELIVERY.WOLT,
    title: t('home.introduction.wolt'),
    hover_color_class: 'hover-color-wolt',
  },
];
</script>

<template>
  <v-container class="max-w-1200">
    <base-layout-row>
      <template #left>
        <v-row class="w-100 d-flex justify-md-start justify-center my-10">
          <base-typography-title />
        </v-row>
        <p class="fs-32 after-space w-100">
          {{ t('home.here_for_all_static') }}
        </p>
        <base-clicker-mobile
          v-if="isMobile"
          class="h-100 min-h-375"
          :items="tm('home.here_for_all_dynamic')"
        />
        <base-timed-text
          v-if="!isMobile"
          class="text-rosePink fs-32 d-block w-100 min-h-250"
          :items="tm('home.here_for_all_dynamic')"
        />
        <div class="fill-height"></div>
        <div class="w-100">
          <v-row class="d-flex justify-md-start justify-center mb-5">
            <nuxt-link-locale :to="{ name: 'menu' }">
              <base-button
                aria-label="menu"
                class="my-4"
                color="rosePink"
                rounded="lg"
                size="x-large"
                >{{ t('home.introduction.menu') }}
              </base-button>
            </nuxt-link-locale>
          </v-row>
          <v-row
            class="d-flex justify-space-around align-center"
            :class="isMobile ? 'flex-column' : 'flex-row'"
          >
            <span>{{ t('home.introduction.delivery') }}</span>
            <a
              v-for="(item, i) in delivery"
              :key="i"
              :href="item.href"
              target="_blank"
            >
              <base-button
                class="my-4"
                :class="item.hover_color_class"
                color="rosePink"
                rounded="xl"
                size="x-large"
                >{{ item.title }}
              </base-button>
            </a>
          </v-row>
        </div>
      </template>
      <template #right>
        <v-row class="w-100">
          <v-col class="pa-0 d-flex justify-center" :cols="isMobile ? 12 : 10">
            <base-image
              alt="Plněné kuřecí maso"
              disable_elevation
              src="placeholder.png"
            />
          </v-col>
          <v-col
            class="d-flex justify-space-around align-center w-auto pa-0"
            :class="isMobile ? 'flex-row' : 'flex-column h-100'"
            :cols="isMobile ? 12 : 2"
          >
            <base-home-tooltip-btn
              color="darkPink"
              icon-name="bez-lepku.png"
              :tooltip-text="t('home.introduction.gluten-free')"
            />
            <base-home-tooltip-btn
              color="softGreen"
              icon-name="bez-laktozy.png"
              :tooltip-text="t('home.introduction.lactose-free')"
            />
            <base-home-tooltip-btn
              color="darkPink"
              icon-name="suroviny.png"
              :tooltip-text="t('home.introduction.seasonal-ingredients')"
            />
            <base-home-tooltip-btn
              color="softGreen"
              icon-name="nutrice.png"
              :tooltip-text="t('home.introduction.nutritional-balance')"
            />
            <base-home-tooltip-btn
              color="darkPink"
              icon-name="imunita.png"
              :tooltip-text="t('home.introduction.imunity')"
            />
          </v-col>
        </v-row>
      </template>
    </base-layout-row>
    <!--    <base-layout-row>-->
    <!--      <template #left>-->
    <!--        <base-image alt="Náš kuchař" src="cook.jpg" />-->
    <!--        <div-->
    <!--          class="d-flex justify-space-between align-center w-100 mt-5"-->
    <!--          :class="isMobile ? 'flex-column' : 'flex-row'"-->
    <!--        >-->
    <!--          <base-typography-list name="home.about-us" type="ul" />-->
    <!--          <nuxt-link-locale :to="{ name: 'aboutus' }">-->
    <!--            <base-button-->
    <!--              aria-label="O nás"-->
    <!--              class="my-6 my-md-0"-->
    <!--              color="success"-->
    <!--              rounded="lg"-->
    <!--              size="x-large"-->
    <!--            >-->
    <!--              {{ t('home.about-us.button') }}-->
    <!--            </base-button>-->
    <!--          </nuxt-link-locale>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--      <template #left>-->
    <v-row class="justify-space-around">
      <v-col cols="12" sm="4">
        <nuxt-link-locale :to="{ name: 'voucher' }">
          <base-home-card
            alt="Dárkový poukaz"
            aria-label="Prohlédnout dárkové poukazy"
            image="placeholder.png"
            :text="t('home.introduction.giftcards')"
          />
        </nuxt-link-locale>
      </v-col>
      <v-col cols="12" sm="4">
        <nuxt-link-locale :to="{ name: 'renting' }">
          <base-home-card
            alt="Prostory k pronájmu"
            aria-label="Pronajmout prostory"
            image="placeholder.png"
            :text="t('home.introduction.rentals')"
          />
        </nuxt-link-locale>
      </v-col>
      <v-col cols="12" sm="4">
        <nuxt-link-locale :to="{ name: 'delivery' }">
          <base-home-card
            alt="Oběd"
            aria-label="Obědy do firem"
            image="placeholder.png"
            :text="t('home.introduction.catering')"
          />
        </nuxt-link-locale>
      </v-col>
    </v-row>
    <!--      </template>-->
    <!--    </base-layout-row>-->
    <base-layout-row>
      <template #left>
        <base-image alt="Exteriér bistra" src="placeholder.png" />
        <div class="d-flex justify-space-around align-center mt-5 w-100 px-10">
          <div v-if="!isMobile">{{ t('home.introduction.navigate') }}:</div>
          <v-btn
            aria-label="Navigovat přes Mapy.cz"
            :href="STATIC_LINKS.NAVIGATION.MAPY_CZ"
            icon=""
            size="large"
            target="_blank"
          >
            <base-asset
              alt="Mapy.cz"
              asset-name="smaps.png"
              hover-asset-name="smaps-hover.png"
              width="100%"
            />
          </v-btn>
          <v-btn
            aria-label="Navigovat přes Google mapy"
            :href="STATIC_LINKS.NAVIGATION.GOOGLE_MAPS"
            icon=""
            size="large"
            target="_blank"
          >
            <base-asset
              alt="Google mapy"
              asset-name="gmaps.png"
              hover-asset-name="gmaps-hover.png"
              width="100%"
            />
          </v-btn>
        </div>
      </template>
      <template #right>
        <base-paragraph name="home.news" />
        <base-link-group-socials class="mt-2" />
        <base-image alt="interiér bistra" src="placeholder.png" />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-paragraph name="home.petfriendly" />
        <base-image alt="Pet friendly bistro" src="placeholder.png" />
      </template>
      <template #right>
        <base-paragraph name="home.ourdelivery" />
      </template>
    </base-layout-row>
    <base-layout-row>
      <template #left>
        <base-paragraph name="home.nesnezeno" />
        <base-image alt="Nesnězeno v Olomouci" src="placeholder.png" />
      </template>
      <template #right>
        <base-home-heading :text="t('home.opening-hrs.title')" />
        <base-typography-table
          class="w-100"
          density="default"
          name="home.opening-hrs"
          text-position="center"
        />
      </template>
    </base-layout-row>
  </v-container>
</template>
