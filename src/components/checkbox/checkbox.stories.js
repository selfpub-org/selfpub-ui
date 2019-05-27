/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Checkbox, ThemeProviderWrapper } from "@selfpub-ui";

import { positions, themes } from "./__stories__/editable-props";
import CheckboxAllInOneExample from "./__stories__/al-in-one";

const buttonsMdDocs = `Checkbox with editable props`;

storiesOf("Checkbox", module)
  .add(
    "1. Width editable props",
    withInfo({
      text: buttonsMdDocs,
      inline: true,
      propTablesExclude: [ThemeProviderWrapper],
    })(() => {
      const checked = boolean("checked", false);
      const disabled = boolean("disabled", false);
      const iconPosition = select("iconPosition", positions);
      const id = text("id", "");
      const name = text("name", "checkbox-name");
      const variation = select("variation", themes, "green");
      const onCheck = eventData => action("checkbox toggle")(eventData);

      return (
        <ThemeProviderWrapper>
          <Checkbox
            checked={checked}
            disabled={disabled}
            iconPosition={iconPosition}
            id={id}
            name={name}
            variation={variation}
            onCheck={onCheck}
          >
            Some text
          </Checkbox>
        </ThemeProviderWrapper>
      );
    }),
  )
  .add("2. All in one", () => <CheckboxAllInOneExample />);
