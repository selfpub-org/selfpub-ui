/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Tabs, Tab } from "./../index";

const buttonsMdDocs = `
*A component of navigation in the form of tabs. Usually used in conjunction with **\`<Tab />\`**.*

**Routing by url**

In component using tab routing by url. For target active tab may be used get param **\`currentTab\`**. For url **\`mysite.info/?currentTab=payments\`** be opened on load page tab with name **\`payments\`**.
`;

storiesOf("Tabs", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => (
    <Tabs defaultActiveTabIndex={1}>
      <Tab
        label="Статистика"
        name="statistics"
        onClick={action("Click tab Статистика")}
      >
        Statistic
      </Tab>
      <Tab
        label="Выплаты"
        name="payments"
        onClick={action("Click tab Выплаты")}
      >
        Payments
      </Tab>
    </Tabs>
  )),
);
