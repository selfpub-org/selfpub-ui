import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import ButtonAllInOneExample from "./__stories__/alI-in-one";
import ButtonWithEditableProps from "./__stories__/editable-props";
import ButtonTemplate from "./__stories__/button-template";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

const arrowIcon = "baseline-keyboard_arrow_right-24px";

storiesOf("Button", module)
  .add(
    "width editable props",
    withInfo({ text: buttonsMdDocs, inline: true })(ButtonWithEditableProps),
  )
  .add("all in one", ButtonAllInOneExample)
  .add(
    "with icon",
    ButtonTemplate({
      title: "Button",
      iconName: arrowIcon,
    }),
  )
  .add(
    "without icon",
    ButtonTemplate({
      title: "Button",
    }),
  )
  .add(
    "without title",
    ButtonTemplate({
      iconName: arrowIcon,
    }),
  )
  .add(
    "disabled",
    ButtonTemplate({
      iconName: arrowIcon,
      title: "Button",
      disabled: true,
    }),
  )
  .add(
    "with icon (right)",
    ButtonTemplate({
      title: "Button",
      iconName: arrowIcon,
      iconRight: true,
    }),
  );
