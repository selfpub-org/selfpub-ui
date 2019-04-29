/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./index";

storiesOf("Icon2", module)
  .add("color", () => <Icon name="baseline-warning-24px" color="red" />)
  .add("size", () => <Icon name="baseline-warning-24px" size={32} />);
