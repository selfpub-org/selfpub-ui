/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ButtonAllInOneExample from "./__stories__/alI-in-one";
import ButtonWithLoadingExample from "./__stories__/loading";
import ButtonWithEditableProps from "./__stories__/editable-props";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

storiesOf("Buttons", module)
  .add(
    "1. Width editable props",
    withInfo({ text: buttonsMdDocs, inline: true })(ButtonWithEditableProps),
  )
  .add("2. All in one", ButtonAllInOneExample)
  .add("3. With loading", () => <ButtonWithLoadingExample />);
