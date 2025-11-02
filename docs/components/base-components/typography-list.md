# Typography List

- component used to display a list of items

### Props

```vue
props: { name: string; type: 'ul' | 'ol'; }
```

- `name`: name of the i18n key to display
- `type`: type of the list
  - values: `ul`(unordered, bullet list), `ol` (ordered, numbered list)

### Usage

```vue
<base-typography-list name="about-us.introduction" type="ul" />
```

- finds the key `introduction` in the file `about-us.cs.json`

### Structure in i18n files

- example: `about-us.cs.json`

```json
{
  "introduction": {
    "list_arr": ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
  }
}
```

- for typography list component is required to have `list_arr` key
- if there are any labels `{label.link}` in the strings, they **<u>won't</u>** be replaced with links
