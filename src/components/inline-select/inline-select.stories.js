/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { InlineSelect } from "@selfpub-ui";

const rangeOptions = [
  { text: "За последние 7 дней", value: "last7" },
  { text: "За последние 30 дней", value: "last30" },
  { text: "За последние 90 дней", value: "last90" },
  { text: "За предыдущий месяц", value: "lastMonth" },
  { text: "За этот месяц", value: "thisMonth" },
];

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

storiesOf("Select/inline-select", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => (
    <InlineSelect
      value={"last30"}
      options={rangeOptions}
      onChange={() => {
        action("select change");
      }}
    />
  )),
);

