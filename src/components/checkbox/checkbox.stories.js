/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  iconSizes,
  positions,
  themes,
  types,
} from "./__stories__/editable-props";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Checkbox, ThemeProviderWrapper } from "../../components";
import CheckboxAllInOneExample from "./__stories__/al-in-one";

const buttonsMdDocs = `Checkbox with editable props`;

storiesOf("Checkbox", module)
  .add(
    "1. Width editable props",
    withInfo({ text: buttonsMdDocs, inline: true })(() => {
      const checked = boolean("checked", false);
      const disabled = boolean("disabled", false);
      const rounded = boolean("rounded", false);
      const iconPosition = select("iconPosition", positions);
      const id = text("id", "");
      const name = text("name", "checkbox-name");
      const size = select("size", iconSizes, "14");
      const theme = select("theme", themes, "default");
      const type = select("type", types, "");
      const onCheck = action("checkbox toggle");
      return (
        <ThemeProviderWrapper>
          <Checkbox
            checked={checked}
            disabled={disabled}
            rounded={rounded}
            iconPosition={iconPosition}
            id={id}
            name={name}
            size={size}
            theme={theme}
            type={type}
            onCheck={onCheck}
          >
            Some text
          </Checkbox>
        </ThemeProviderWrapper>
      );
    }),
  )
  .add("2. All in one", () => <CheckboxAllInOneExample />);
