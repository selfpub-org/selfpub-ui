/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import withTestsWrapper from "../../../.storybook/withTest";
import { TableExample } from "./__stories__/all-in-one";

storiesOf("Table", module)
  .addDecorator(withTestsWrapper("table"))
  .add("1. All in one", () => <TableExample />);
