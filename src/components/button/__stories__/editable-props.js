import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { sizes, targets, themes } from "./constants";
import { ThemeProviderWrapper, Button } from "../../index";

const iconTypes = {
  "arrow-bottom": "arrow-bottom",
  pencil: "pencil",
  delete: "delete",
  question: "question",
  "question-invert": "question-invert",
  radio: "radio",
  "radio-checked": "radio-checked",
  bookmark: "bookmark",
  "triangle-bottom": "triangle-bottom",
  success: "success",
  error: "error",
  "triangle-top": "triangle-top",
  "arrow-up": "arrow-up",
  "digital-book": "digital-book", // broken by size
  "analog-book": "analog-book", // broken by size
  cross: "cross",
  "cross-red": "cross-red",
  checkbox: "checkbox", // broken by size
  "checkbox-checked": "checkbox-checked", // broken by size
  link: "link",
  download: "download",
};

export default function() {
  const disabled = boolean("disabled", false);
  const loading = boolean("loading", false);
  const href = text("href", "");
  const target = select("target", targets, "_self");
  const htmlType = text("htmlType", "");
  const type = select("type", { button: "button", link: "link" }, "button");
  const iconSize = select("iconSize", { small: "small", big: "big" }, "small");
  const glyph = select("glyph", iconTypes, "question");

  return (
    <ThemeProviderWrapper>
      <Button
        disabled={disabled}
        loading={loading}
        href={href ? href : null}
        variation={select("variation", themes, "default")}
        size={select("size", sizes, "small")}
        htmlType={htmlType ? htmlType : null}
        type={type ? type : null}
        target={target ? target : null}
        icon={glyph ? glyph : null}
        iconSize={iconSize ? iconSize : null}
        onClick={action("clicked")}
      >
        {text("Label (children)", "Some text")}
      </Button>
    </ThemeProviderWrapper>
  );
}
