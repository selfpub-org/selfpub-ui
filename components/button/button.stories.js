import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button, { buttonThemes } from "./index";

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
    loading={boolean("Loading", false)}
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

stories.add("with loader", () => {
  return buttonThemes.map((theme, index) => (
    <React.Fragment key={index}>
      Theme: {theme}
      <Button
        size={select("Size", sizes, "small")}
        theme={theme}
        onClick={action("clicked")}
        loading={boolean("Loading", true)}
        disabled={boolean("Disabled", false)}
      >
        Some text
      </Button>
    </React.Fragment>
  ));
});

stories.add("defaults", () => (
  <div className="buttons">
    <Button>Button default</Button>

    <Button short>...</Button>

    <Button href="/">Button link</Button>

    <Button loader>Button loader</Button>

    <Button primary loader>
      Primary loader
    </Button>

    <Button icon={"cross"} loader>
      Icon loader
    </Button>

    {/*{renderButtonModifications()}*/}

    <Button text>Text action</Button>

    {/*{renderTextModifications()}*/}

    <Button icon={"cross"}>Icon action</Button>

    {/*{renderIconWithTextModifications()}*/}

    <Button icon={"cross"} title="Icon action" />

    {/*{renderIconActionModifications()}*/}
  </div>
));
