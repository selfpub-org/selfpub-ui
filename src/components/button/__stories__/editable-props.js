import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { sizes, targets, themes, iconSizes } from "./constants";
import { ThemeProviderWrapper, Button } from "../../../components";

export default function() {
  const disabled = boolean("disabled", false);
  const loading = boolean("loading", false);
  const href = text("href", "");
  const target = select("target", targets, "_self");
  const htmlType = text("htmlType", "");
  const type = select("type", { button: "button", link: "link" }, "button");
  const icon = text("icon", "");

  return (
    <ThemeProviderWrapper>
      <Button
        disabled={disabled}
        loading={loading}
        href={href ? href : null}
        variation={select("variation", themes, "default")}
        size={select("Size", sizes, "small")}
        htmlType={htmlType ? htmlType : null}
        type={type ? type : null}
        target={target ? target : null}
        icon={icon ? icon : null}
        iconSize={select("iconSize", iconSizes, "12")}
        onClick={action("clicked")}
      >
        {text("Label (children)", "Some text")}
      </Button>
    </ThemeProviderWrapper>
  );
}
