import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link, ThemeProviderWrapper } from "../../index";

const targets = {
  _blank: "_blank",
  _parent: "_parent",
  _self: "_self",
  _top: "_top",
};

const types = {
  default: "default",
  underline: "underline",
  pseudo: "pseudo",
  small: "small",
};

const variations = {
  default: "default",
  blue: "blue",
  white: "white",
  grey: "grey",
};

export default function() {
  const props = {
    href: text("href", "#"),
    type: select("type", types, undefined),
    target: select("target", targets, undefined),
    variation: select("variation", variations, undefined),
    title: text("title", undefined),
    size: select("size", { inherit: "inherit", small: "small" }, undefined),
    onClick: action("clicked"),
  };

  return (
    <ThemeProviderWrapper>
      <Link {...props}>Some text</Link>
    </ThemeProviderWrapper>
  );
}
