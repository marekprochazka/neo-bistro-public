// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { pages } from './assets/locales/locales.entry';

export default defineNuxtConfig({
  runtimeConfig: {
    databaseUrl: '',
  },
  alias: {
    // custom aliases here
  },
  nitro: {
    serverAssets: [
      {
        baseName: 'queries',
        dir: './queries', // Relative to `srcDir` (`server/` for nuxt)
      },
    ],
  },
  devtools: { enabled: true },
  css: ['~/assets/styles.entry.scss'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  // plugins: [{ src: '~/plugins/db.ts', mode: 'server' }],

  modules: [
    // @ts-ignore
    (_options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      '@nuxtjs/i18n',
      {
        locales: ['cs'],
        defaultLocale: 'cs',
        vueI18n: './i18n.config.ts',
        detectBrowserLanguage: false,
        strategy: 'prefix_except_default',
        customRoutes: 'config',
        pages,
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: true,
        },
      },
    ],
    [
      'nuxt-svgo',
      {
        /* module options */
      },
    ],
    [
      '@nuxtjs/device',
      {
        refreshOnResize: true,
      },
    ], //
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://sampleurl.com/',
        exclude: ['/admin/**'],
      },
    ],
    [
      '@nuxtjs/robots',
      {
        /* module options */
        rules: [
          { UserAgent: '*' },
          { Disallow: '/admin' },
          { BlankLine: true },

          { Sitemap: 'https://sampleurl.com/sitemap.xml' },
        ],
      },
    ],
    [
      'nuxt-gtag',
      {
        id: 'G-1234567890',
      },
    ],
  ],

  vite: {
    optimizeDeps: {
      // Takhle kundovina me stala 2 dny zivota
      // Nenavidim WebDev
      include: ['@vueup/vue-quill'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  site: {
    url: 'https://sampleurl.com/',
    name: 'Bistro Name',
  },
});
