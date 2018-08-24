import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link, ThemeProviderWrapper } from "../../index";
import { hashFromArray } from "../../../utils/utils";

export default function() {
  const props = {
    href: text("href", "#"),
    type: select("type", hashFromArray(Link.Types), undefined),
    target: select("target", hashFromArray(Link.Targets), undefined),
    variation: select("variation", hashFromArray(Link.Variations), undefined),
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
