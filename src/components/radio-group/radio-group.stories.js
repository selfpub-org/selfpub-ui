import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { RadioGroup, Radio, ThemeProviderWrapper } from "../index";
import React from "react";

storiesOf("RadioGroup", module).add(
  "1. Width editable props",
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
          <Radio value="a" disabled>
            disabled a-radio
          </Radio>
          <Radio value="b" defaultChecked>
            b-radio
          </Radio>
          <Radio value="c">c-radio</Radio>
          <Radio value="d">d-radio</Radio>
          <Radio value="d1">d-radio</Radio>
          <Radio value="d2">d-radio</Radio>
          <Radio value="d3">d-radio</Radio>
        </RadioGroup>
      </ThemeProviderWrapper>
    );
  }),
);
