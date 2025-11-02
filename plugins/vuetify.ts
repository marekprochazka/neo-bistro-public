// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { COLORS } from '~/config/constants';
import { VNumberInput } from 'vuetify/labs/VNumberInput';

const baseTheme: ThemeDefinition = {
  dark: false,
  colors: {
    ...COLORS,
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'baseTheme',
      themes: {
        baseTheme,
      },
    },
    defaults: {
      VSheet: {
        color: 'transparent',
      },
      VTable: {
        color: 'transparent',
      },
    },
    components: {
      VNumberInput,
    },
  });
  app.vueApp.use(vuetify);
});
