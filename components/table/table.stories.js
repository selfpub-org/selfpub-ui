/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { TableExample } from "./__stories__/all-in-one";

storiesOf("Table", module).add("1. All in one", () => <TableExample />);
