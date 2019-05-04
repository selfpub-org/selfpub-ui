/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { select, boolean } from "@storybook/addon-knobs";

import Icon from "./icon";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

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

storiesOf("Icon", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => {
    const size = select("size", { small: "small", big: "big" }, "small");
    const glyph = select("glyph", iconTypes, "question");

    return (
      <Icon
        size={size ? size : null}
        glyph={glyph ? glyph : null}
        loading={boolean("loading", false)}
      />
    );
  }),
);
