import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { RadioGroup, Radio, ThemeProviderWrapper } from "../index";
import React from "react";

storiesOf("RadioGroup", module).add(
  "Radio width radio-group",
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
          <Radio value="a">a-radio</Radio>
          <Radio value="b">b-radio</Radio>
          <Radio value="c" disabled>
            c-radio
          </Radio>
          <Radio value="d">d-radio</Radio>
        </RadioGroup>
      </ThemeProviderWrapper>
    );
  }),
);
