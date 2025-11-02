# Style guidelines

## Tools

- To enforce code standards, we use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
- We use [TypeScript](https://www.typescriptlang.org/) for type safety.
- Eslint configuration can be found in the root of the project in `.eslintrc.cjs` file.

## Main principles

### DRY

- Don't Repeat Yourself
- If you find yourself writing the same code over and over again, it's time to refactor it into a reusable composable or component.

### Does it already exist?

- We use many libraries:
  - [Vuetify](https://vuetifyjs.com/en/)
  - [Supabase](https://supabase.io/)
  - [VueUse](https://vueuse.org/)
- Before writing your own solution, check if there's already a library that does what you need. Especially when it comes to layouts, styles and components.

### Writing style

- variables: `camelCase`
- components: `kebab-case`
- files: `kebab-case`
- quotes: `single` (except for component props)

### Props ordering

- See `.eslintrc.cjs` file for the exact order of props in components.

## Practical tips

- Setup your editor to use Prettier on save and ESLint as part of [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol).
- Before each commit, run `yarn lint` or `yarn lint:fix` to ensure your code is up to standards as it will be run as part of workflow as well therefore you will avoid failing pipeline.
