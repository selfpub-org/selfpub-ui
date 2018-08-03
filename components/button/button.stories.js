/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import ButtonAllInOneExample from "./__stories__/alI-in-one";
import ButtonWithEditablePropsExample from "./__stories__/editable-props";
import ButtonWithLoadingExample from "./__stories__/loading";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown

  ~~~js    
  <Button
    disabled={false}
    size="small"
    href=""
    htmlType=""
    target=""
    theme="default"
    icon=""
    iconSize={Icon.Size.Size12)}
    loading={false}
    onClick={action("clicked")}
  >
    Some text
  </Button>
  ~~~
`;

storiesOf("Buttons", module)
  .add(
    "1. Width editable props",
    withInfo(buttonsMdDocs)(() => <ButtonWithEditablePropsExample />),
  )
  .add("2. All in one", () => <ButtonAllInOneExample />)
  .add("3. With loading", () => <ButtonWithLoadingExample />);
