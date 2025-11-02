# Button

- Wrappes Vuetify's native `v-btn` component
- I'm not totaly sure if it's truly necessary to have this component, if there won't be at least more than one class and some extra functionality attached I think it'll be smarter to keep with `v-btn` and use it directly

### Props

```typescript
interface props {
  color: COLORS_NAME_TYPE;
}
```

- For typedef of `COLORS_NAME_TYPE` seek `./config/constants.ts`

### Usacase

```vue
<base-button color="primary" @click="someEpicFun"> Click me </base-button>
```

### v-btn for comparison

- same at this point, highly depends if some extra logic/stylization will be added to `base-button`

```vue
<v-btn color="primary" @click="someEpicFun"> Click me </v-btn>
```
