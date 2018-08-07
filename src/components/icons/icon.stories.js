/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { number, select, boolean } from "@storybook/addon-knobs";
import { InlineSelect } from "../../components";
import Icon from "./icon";
import PropTypes from "prop-types";

const rangeOptions = [
  { text: "За последние 7 дней", value: "last7" },
  { text: "За последние 30 дней", value: "last30" },
  { text: "За последние 90 дней", value: "last90" },
  { text: "За предыдущий месяц", value: "lastMonth" },
  { text: "За этот месяц", value: "thisMonth" },
];

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
  bookmark: "bookmark",
  "triangle-bottom": "triangle-bottom",
  success: "success",
  error: "error",
  "triangle-top": "triangle-top",
  "arrow-up": "arrow-up",
  "digital-book": "digital-book",
  "analog-book": "analog-book",
  cross: "cross",
  checkbox: "checkbox",
  link: "link",
  download: "download",
};

storiesOf("Icon", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => (
    <Icon
      size={number("size", 18)}
      glyph={select("glyph", iconTypes, "question")}
      height={number("height", 18)}
      width={number("width", 18)}
      loading={boolean("loading", false)}
    />
  )),
);
