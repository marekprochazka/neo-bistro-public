# Typography Table

- component used to display a table of items

### Props

```vue
props: { name: string; textPosition: 'center' | 'sides'; density: 'default' |
'compact'; }
```

- `name`: name of the i18n key to display
- `textPosition`: position of the text in the table
  - values: `center`, `sides` (left column has text on the left side, right column has text on the right side)
- `density`: density of the table
  - values: `default`, `compact`

### Usage

```vue
<base-typography-table
  name="about-us.introduction"
  textPosition="center"
  density="default"
/>
```

- finds the key `introduction` in the file `about-us.cs.json`

### Structure in i18n files

- example: `about-us.cs.json`

```json
{
  "introduction": {
    "table_data": [
      {
        "title": "Lorem ipsum",
        "value": "Lorem ipsum"
      },
      {
        "title": "Lorem ipsum",
        "value": "Lorem ipsum"
      },
      {
        "title": "Lorem ipsum",
        "value": "Lorem ipsum"
      }
    ]
  }
}
```

- for typography table component is required to have `table_data` key
- `table_data` is an array of objects with `title` and `value` keys
- `title` is a string displayed in the left column
- `value` is a string displayed in the right column
- if there are any labels `{label.link}` in the strings, they **<u>will</u>** be replaced with links
