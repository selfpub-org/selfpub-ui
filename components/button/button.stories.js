import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  select,
} from "@storybook/addon-knobs";

import Button, { buttonThemes } from "../button";

// Init root for stories
const stories = storiesOf("Buttons", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

const sizes = {
  small: "small",
  medium: "medium",
  big: "big",
  null: "empty props",
};

const themes = {
  default: "default",
  primary: "primary",
  success: "success",
  light: "light",
  lighter: "lighter",
  white: "white",
  danger: "danger",
  black: "black",
  "primary-light": "primary-light",
  null: "empty props",
};

stories.add("with editable props", () => (
  <Button
    size={select("Size", sizes, "small")}
    theme={select("Theme", themes, "default")}
    onClick={action("clicked")}
    disabled={boolean("Disabled", false)}
  >
    {text("Label", "Some text")}
  </Button>
));

stories.add("with all themes", () => {
  return buttonThemes.map((theme, index) => (
    <React.Fragment key={index}>
      Theme: {theme}
      <Button
        size={select("Size", sizes, "small")}
        theme={theme}
        onClick={action("clicked")}
      >
        Some text
      </Button>
    </React.Fragment>
  ));
});
