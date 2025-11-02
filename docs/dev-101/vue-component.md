# Writing a component

- Here are some general guidelines regarding writing a new component.

## `Script part`

- Start with import and props/model definition
- Initialize composables
- Define refs
- Define computed
- Define methods
- Define lifecycle hooks/watches

### Example

```vue
<script setup lang="ts">
import { SomeDbComposable } from '@/composables/some-db-composable';

// Use type inference for props/models
const props = defineProps<{
  someProp: string;
}>();

const model = defineModel<boolean>();

const { t } = useI18n();
const { someDbComposable } = SomeDbComposable();

const data = ref<string>('');

const computed = computed(() => {
  return someDbComposable.someData;
});

function someMethod() {
  // some logic
}

async function init() {
  await someDbComposable.fetchData();
}

// End with init
init();
</script>
```

## `Template part`

- Don't use raw text, always use `t` function for translations
- Try to write as little html as possible, whenever you can use loop, use it! (for example seek `./components/base/header/desktop.vue`)

### Example

```vue
<template>
  <h1>{{ t('example.title') }}</h1>
  <h5>{{ t('example.sub_title') }}</h5>
  <v-container>
    <v-row v-for="(action, i) in actions" :key="i">
      <v-col>
        <v-btn @click="action.action">{{ action.label }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
```
