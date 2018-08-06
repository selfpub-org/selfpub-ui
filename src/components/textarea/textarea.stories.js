/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { TextareaExample } from "./__stories__/all-in-one";

storiesOf("TextArea", module).add(
  "1. All in one",
  withInfo("Input component")(() => <TextareaExample />),
);
