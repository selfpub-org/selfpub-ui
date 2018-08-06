/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ParagraphExample } from "./__stories__/paragraph.stories";
import { HeaderExample } from "./__stories__/header.stories";
import { TypographyExample } from "./__stories__/all-in-one";

storiesOf("Typography", module)
  .add(
    "1. All in one",
    withInfo("Input component")(() => <TypographyExample />),
  )
  .add("2. Header", () => <HeaderExample />)
  .add("3. Paragraph", () => <ParagraphExample />);
