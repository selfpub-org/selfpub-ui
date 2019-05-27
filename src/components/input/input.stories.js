/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { InputExample } from "./__stories__/all-in-one";
import InputExampleWithEditableProps from "./__stories__/editable-props";

storiesOf("Inputs", module)
  .add("1. All in one", withInfo("Input component")(() => <InputExample />))
  .add(
    "2. With editable props",
    withInfo({ text: "Input component", inline: true })(() => (
      <InputExampleWithEditableProps />
    )),
  );
