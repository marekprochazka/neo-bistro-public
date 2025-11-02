import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/neo-bistro/',
  title: 'Neo-Bistro docs',
  description: 'Dev docs',
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/get-started/installation' },
      { text: 'Development 101', link: '/dev-101/' },
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Installation', link: '/get-started/installation' },
          { text: 'Commands', link: '/get-started/commands' },
        ],
      },
      {
        text: 'Development 101',
        items: [
          { text: 'Introduction', link: '/dev-101/' },
          { text: 'Project structure', link: '/dev-101/project-structure' },
          { text: 'Style Guidelines', link: '/dev-101/style-guidelines' },
          { text: 'Writing a component', link: '/dev-101/vue-component' },
          { text: 'Git flow', link: '/dev-101/git-flow' },
          { text: 'Unit testing', link: '/dev-101/unit-testing' },
        ],
      },
      {
        text: 'DAL',
        items: [{ text: 'Introduction', link: '/dal/' }],
      },

      {
        text: 'Composables',
        items: [{ text: 'Introduction', link: '/composables/' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'Introduction', link: '/components/' },
          { text: 'Asset', link: '/components/base-components/asset' },
          { text: 'Button', link: '/components/base-components/button' },
          { text: 'Paragraph', link: '/components/base-components/paragraph' },
          {
            text: 'Typography table',
            link: '/components/base-components/typography-table',
          },
          {
            text: 'Typography list',
            link: '/components/base-components/typography-list',
          },
        ],
      },
      {
        text: 'SCSS',
        items: [
          { text: 'Base', link: '/scss/base' },
          { text: 'Utils', link: '/scss/utils' },
          { text: 'Variables', link: '/scss/variables' },
          { text: 'Typography', link: '/scss/typography' },
        ],
      },
      {
        text: 'Deployment',
        link: '/deployment',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marekprochazka/neo-bistro' },
    ],
  },
});
