import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Toggle, ToggleOption, ThemeProviderWrapper } from "../index";
import React from "react";

storiesOf("Toggle", module).add(
  "toggle-group",
  withInfo({
    text: "",
    inline: true,
    propTablesExclude: [ThemeProviderWrapper],
  })(() => {
    return (
      <ThemeProviderWrapper>
        <Toggle onChange={rest => action("change radio value")(rest)} id="test">
          <ToggleOption value="a">a-radio</ToggleOption>
          <ToggleOption value="b">b-radio</ToggleOption>
          <ToggleOption value="c" disabled>
            c-radio
          </ToggleOption>
          <ToggleOption value="d">d-radio</ToggleOption>
        </Toggle>
      </ThemeProviderWrapper>
    );
  }),
);
