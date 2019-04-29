import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { themes, iconTypes, appearanceTypes, buttonTypes } from "./constants";
import Button from "./../index";

export default function() {
  const title = text("Label (children)", "Some text");
  const type = select("type", buttonTypes, "button");
  const variation = select("variation", themes, "default");
  const appearance = select("appearance", appearanceTypes, "flat");
  const iconName = select(
    "iconName",
    iconTypes,
    "baseline-keyboard_arrow_right-24px",
  );
  const iconRight = boolean("iconRight", false);
  const disabled = boolean("disabled", false);
  const loading = boolean("loading", false);
  const stretched = boolean("stretched", false);

  return (
    <Button
      onClick={action("clicked")}
      title={title}
      type={type}
      variation={variation}
      appearance={appearance}
      iconName={iconName}
      iconRight={iconRight}
      disabled={disabled}
      loading={loading}
      stretched={stretched}
    />
  );
}
