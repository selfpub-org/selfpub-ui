# Component `<Link/>`

The link is a navigation element that indicates the ability to go to another page to the anchor element on the current page.

> This component must have at the top level the definition of the component `<ThemeProviderWrapper />`

### Base link

The link can be anything: a picture, a smiley, an icon, a custom button button (for standard buttons you need to use the component `Button`)

```jsx
<ThemeProviderWrapper>
    {/* ... */}
    {[ "🌑", "🌒", "🌓", "🌔", "🌝"].map((emoji, index) => (
        <Link href={`#${index}`} key={emoji}>{emoji}</Link>
    ))}
    {/* ... */}
</ThemeProviderWrapper>
```

## Properties

| property  | propType                   | required | default    | description                   |
| --------- | ---------------------------| -------- | ---------- | ----------------------------- |
| href      | string                     | yes      | ""         | redirect url of link button   |
| variation | string                     | -        | "default"  | themes of link                |
| type      | string                     | -        | "default"  | type of link                  |
| title     | string                     | -        | ""         | native html popup text        |
| onClick   | func                       | -        | `() => {}` | handler for click behavior    |
| size      | oneOf ["inherit", "small"] | -        | "default"  | type of size inherit or small |

