import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Toggle, ToggleOption, ThemeProviderWrapper, colors } from "../index";

storiesOf("Toggle", module).add(
  "1. toggle-group",
  withInfo({
    text: "",
    inline: true,
    propTablesExclude: [ThemeProviderWrapper],
  })(() => {
    return (
      <ThemeProviderWrapper>
        <Toggle
          onChange={rest => action("change radio value")(rest)}
          id="test"
          value="b"
        >
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

storiesOf("Toggle", module).add(
  "2. style override",
  withInfo({
    text: "",
    inline: true,
    propTablesExclude: [ThemeProviderWrapper],
  })(() => {
    const OverrideButton = styled(ToggleOption)`
      background: ${props => (props.active ? colors.coal : "transparent")};
      border-color: ${colors.coal};
      color: ${props => (props.active ? colors.white : colors.coal)};
    `;

    return (
      <ThemeProviderWrapper>
        <Toggle
          onChange={rest => action("change radio value")(rest)}
          id="test"
          value="print-book"
        >
          <OverrideButton value="e-book">Электронные книги</OverrideButton>
          <OverrideButton value="print-book">Печатные книги</OverrideButton>
        </Toggle>
      </ThemeProviderWrapper>
    );
  }),
);
