The button is used as a trigger to perform a certain action. The button uniquely informs the user what will happen after clicking on it. The button in html can be represented by the element `button` or` a` with the same mapping. To use the buttons on the page at the top level, the element `<ThemeProviderWrapper>` must be defined.

```jsx
<ThemeProviderWrapper>
    ...
    <SomeComponent/>
    ...
    <Button
        // one of "big", "medium", "small"
        size="big"
        // one of "default", "primary", "white", "light", "danger", "lighter", "primary-light", "success", "black",
        variation="primary"
        // Calback action
        onClick={() => {}}
    >
        Some text
    </Button>
    ...
    <SomeComponent/>
    ...
</ThemeProviderWrapper>
```

### Base button

Button for common action

```jsx
    <Button
        // one of "big", "medium", "small"
        size="big"
        // one of "default", "primary", "white", "light", "danger", "lighter", "primary-light", "success", "black",
        variation="primary"
        // Calback action
        onClick={() => {}}
    >
        Some text
    </Button>
```

### With icon

```jsx
    <Button
        size="big"
        variation="primary"
        onClick={() => {}}
        icon="questions"
        iconSize="small"
    >
        Some text
    </Button>
```
