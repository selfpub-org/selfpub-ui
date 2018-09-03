import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { RadioGroup, RadioButton, ThemeProviderWrapper } from "../index";
import React from "react";

storiesOf("RadioButton", module).add(
  "RadioButton width radio-group",
  withInfo({
    text: "",
    inline: true,
    propTablesExclude: [ThemeProviderWrapper],
  })(() => {
    return (
      <ThemeProviderWrapper>
        <RadioGroup
          onChange={rest => action("change radio value")(rest)}
          id="test"
        >
          <RadioButton value="a">a-radio</RadioButton>
          <RadioButton value="b">b-radio</RadioButton>
          <RadioButton value="c" disabled>
            c-radio
          </RadioButton>
          <RadioButton value="d">d-radio</RadioButton>
        </RadioGroup>
      </ThemeProviderWrapper>
    );
  }),
);
