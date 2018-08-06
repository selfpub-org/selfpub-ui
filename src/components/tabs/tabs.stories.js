/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Tabs from "./tabs";
import Tab from "./tab";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

storiesOf("Tabs", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => (
    <Tabs defaultActiveTabIndex={1}>
      <Tab label="Статистика" onClick={action("Click tab Статистика")}>
        Statistic
      </Tab>
      <Tab label="Выплаты" onClick={action("Click tab Выплаты")}>
        Payments
      </Tab>
    </Tabs>
  )),
);
