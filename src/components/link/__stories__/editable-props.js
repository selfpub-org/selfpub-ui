import React, { Component } from "react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link } from "ui-styles/index";

const targets = {
  _blank: "_blank",
  _parent: "_parent",
  _self: "_self",
  _top: "_top",
  null: "empty props",
};
const types = {
  default: "default",
  underline: "underline",
  pseudo: "pseudo",
  small: "small",
  null: "empty props",
};
const themes = {
  default: "default",
  blue: "blue",
  white: "white",
  grey: "grey",
  null: "empty props",
};

export class LinkWithEditablePropsExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>ALl links type</h3>
        <div style={{ display: "flex" }}>
          <Link
            type={select("type", types, "")}
            target={select("target", targets, "_self")}
            href={text("href", "#")}
            theme={select("theme", themes, "default")}
            onClick={action("clicked")}
          >
            Some text
          </Link>
        </div>
      </div>
    );
  }
}
