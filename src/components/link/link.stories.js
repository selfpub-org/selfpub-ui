/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { LinkAllInOneExample } from "./__stories__/all-in-one";
import LinkWithEditablePropsExample from "./__stories__/editable-props";
import { ThemeProviderWrapper } from "../index";

const buttonsMdDocs = `Link component`;

storiesOf("Link", module)
  .add(
    "1. Width editable props",
    withInfo({
      text: buttonsMdDocs,
      inline: true,
      propTablesExclude: [ThemeProviderWrapper],
    })(LinkWithEditablePropsExample),
  )
  .add("2. All in one", () => <LinkAllInOneExample />);
