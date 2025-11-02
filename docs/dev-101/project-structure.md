# Project structure

- As we're using the [Nuxt.js](https://nuxtjs.org/) framework, project structure conventions are crucial as there's a
  lot of magic happening on the framework's side.
- Details on each magic folder can be found [here](https://nuxt.com/docs/guide/directory-structure/app)

## `./.github`

- GitHub actions

## `./assets`

- Static files, such as images, fonts, css, i18n translations, etc.

## `./bin`

- Not a magic folder of Nuxt.js
- Utility scripts for the project

## `./components`

- Auto-imported components, parts of the UI that are used in the root components of `./pages` folder.
- Whilst auto-imported, the naming convention can vary, please use the following

### Example

- we have a component `./components/atoms/my-component.vue`
- Use it anywhere as:

```vue
<template>
  ...
  <atoms-my-component />
  ...
</template>
```

- ie. always use the entire path to the component as a prefix
- More on `./components` folder [here](https://nuxt.com/docs/guide/directory-structure/components)

## `./composables`

- Auto-imported functionalities made to fit DRY principles with as much transparency as possible.
- More on `./composables` folder [here](https://nuxt.com/docs/guide/directory-structure/composables)
- More on `composables` in general [here](https://vuejs.org/guide/reusability/composables)

## `./config`

- Not a magic folder of Nuxt.js
- Global constants and configurations

## `./docs`

- Not a magic folder of Nuxt.js
- Contains markdown files for this documentation

## `./error`

- Not a magic folder of Nuxt.js
- App-defined error classes

## `./lib`

- git submodules

## `./middleware/auth.middleware.ts`

- Middleware for admin-protected routes

## `./migrations`

- Not a magic folder of Nuxt.js
- Database migrations

## `./pages`

- Root components of each URL view of page.
- Naming convention is `english-kebab-case` for each file.
- Each file name _must_ be unique and mapped onto it's URL translation in `./assets/locales/locales.entry.ts` file.
- More on `./pages` folder [here](https://nuxt.com/docs/guide/directory-structure/pages)

## `./plugins`

- Attaching external modules to Vue instance upon it's creation.
- More on `./plugins` folder [here](https://nuxt.com/docs/guide/directory-structure/plugins)

## `./schemas`

- Not a magic folder of Nuxt.js
- Auto-generated TypeScript types of the database schema

## `./server`

- Nitro instance with API called by `useFetch` composable

### `./server/api`

- Concrete API endpoints

### `./server/composables`

- Server-side composable functions

### `./server/plugins/db.ts`

- Injection of db connection method

### `./server/utils`

- Client getter
- Query parser

### `./server/queries`

- SQL queries processed by `./server/utils/q.ts`

## `./types`

- Not a magic folder of Nuxt.js
- TypeScript types for the project either auto-generated or hand-made

## `./utils`

- Not a magic folder of Nuxt.js
- Utility functions
