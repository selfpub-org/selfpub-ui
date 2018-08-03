import React, { Component } from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "index";

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

const iconSizes = {
  "12": "Size12",
  "14": "Size14",
  "16": "Size16",
  "18": "Size18",
  "24": "Size24",
  "32": "Size32",
  "40": "Size40",
  "48": "Size48",
  "64": "Size64",
  "96": "Size96",
  "128": "Size128",
};

const positions = {
  left: "left",
  right: "right",
};

export default class CheckboxWithEditablePropsExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Checkbox with editable props</h3>
        <div style={{ display: "flex" }}>
          <Checkbox
            checked={boolean("checked", false)}
            disabled={boolean("disabled", false)}
            iconPosition={select("iconPosition", positions)}
            id={text("id", "")}
            name={text("name", "checkbox-name")}
            size={select("size", iconSizes, "14")}
            theme={select("theme", themes, "default")}
            type={select("type", types, "")}
            onCheck={action("checkbox toggle")}
          >
            Some text
          </Checkbox>
        </div>
      </div>
    );
  }
}
