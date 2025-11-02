# Paragraph

- component used to display text with many paragraphs and a title
- display text from i18n files

### Props

```vue
props: { name: string; headingPrepend?: string; headingPosition?: string;
headingSize?: string;
```

- `name`: name of the i18n key to display
- `headingPrepend`: text to prepend to the heading
- `headingPosition`: position of the heading relative to the text
  - values: `text-center`, `text-left`, `text-right`
- `headingSize`: size of the heading
  - values: vue typography classes (e.g. `fs-32`)

### Usage

```vue
<base-paragraph
  name="about-us.introduction"
  headingPrepend="4th chapter:"
  headingPosition="text-center"
  headingSize="fs-32"
/>
```

- finds the key `introduction` in the file `about-us.cs.json`

### Structure in i18n files

- example: `about-us.cs.json`

```json
{
  "introduction": {
    "title": "Introduction",
    "text_arr": ["Lorem ipsum", "Lorem ipsum {label.link}", "Lorem ipsum"],
    "text_has_links": [1]
  }
}
```

- for paragraph component is required to have `title`, `text_arr` and `text_has_links` keys
- title can be empty string
- `text_arr` is an array of strings, where `{label.link}` is a placeholder for a link, can be empty
- `text_has_links` is an array of indexes of strings in `text_arr` that contain links, can be empty when there are no links
