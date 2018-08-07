import React, { Component } from "react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { sizes } from "./constants";
import { Button, ThemeProviderWrapper } from "../../index";

export default class ButtonWithLoadingExample extends Component {
  render() {
    return (
      <ThemeProviderWrapper>
        <React.Fragment>
          <h3>Buttons with loader</h3>
          <div style={{ display: "flex" }}>
            {Button.Themes.map(variation => (
              <div style={{ width: 300, marginRight: 40 }} key={variation}>
                <h4>{`Variation: ${variation}`}</h4>
                <Button
                  size={select("Size", sizes, "small")}
                  theme={variation}
                  onClick={action("clicked")}
                  loading={boolean("Loading", true)}
                  disabled={boolean("Disabled", false)}
                >
                  Some text
                </Button>
              </div>
            ))}
          </div>
        </React.Fragment>
      </ThemeProviderWrapper>
    );
  }
}
