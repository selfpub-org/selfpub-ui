/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { LinkAllInOneExample } from "./__stories__/all-in-one";
import { LinkWithEditablePropsExample } from "./__stories__/editable-props";

const buttonsMdDocs = `Link component`;

storiesOf("Link", module)
  .add(
    "1. Width editable props",
    withInfo(buttonsMdDocs)(() => <LinkWithEditablePropsExample />),
  )
  .add("2. All in one", () => <LinkAllInOneExample />);
