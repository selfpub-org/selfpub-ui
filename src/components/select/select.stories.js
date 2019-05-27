import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import { Select, ThemeProviderWrapper } from "@selfpub-ui";

const rangeOptions = [
  { text: "За последние 7 дней", value: "last7" },
  { text: "За последние 30 дней", value: "last30" },
  { text: "За последние 90 дней", value: "last90" },
  { text: "За предыдущий месяц", value: "lastMonth" },
  { text: "За этот месяц", value: "thisMonth" },
];

storiesOf("Select/select", module).add(
  "1. Width editable props",
  withInfo({ text: "Select", inline: true })(() => (
    <ThemeProviderWrapper>
      <Select
        value={"last30"}
        options={rangeOptions}
        onChange={() => {
          action("select change");
        }}
        stretch={boolean("stretch", false)}
        disabled={boolean("disabled", false)}
      />
    </ThemeProviderWrapper>
  )),
);
