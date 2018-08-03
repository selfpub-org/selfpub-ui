/* global module */
import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from "./index";
import CheckboxAllInOneExample from "./__stories__/al-in-one";
import CheckboxWithEditablePropsExample from "./__stories__/editable-props";

const buttonsMdDocs = ``;

storiesOf("Checkbox", module)
  .add(
    "1. Width editable props",
    withInfo(buttonsMdDocs)(() => <CheckboxWithEditablePropsExample />),
  )
  .add("2. All in one", () => <CheckboxAllInOneExample />);
