import React, { Component } from "react";
// import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import InputWrapper from "../input-wrapper";
import InputStatus from "../input-status";
import Input from "../input";

const targets = {
  _blank: "_blank",
  _parent: "_parent",
  _self: "_self",
  _top: "_top",
  null: "empty props",
};
const types = {
  text: "text",
  email: "email",
  number: "number",
  password: "password",
  tel: "tel",
  url: "url",
};
const statusTypes = {
  error: "error",
  warning: "warning",
  success: "success",
  null: null,
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
  top: "top",
};

export default class extends Component {
  constructor() {
    super();
    this.onChange = ::this.onChange;
    this.state = {
      value: "",
    };
  }

  onChange(event, value) {
    this.setState({ value });
  }

  render() {
    return (
      <InputWrapper id="uniq-id" label={text("label", "Some Label")}>
        <InputStatus
          type={select("status theme", statusTypes, "null")}
          message={text("message", "Success message")}
        >
          <Input
            disabled={boolean("disabled", false)}
            id={"uniq-id"}
            name={text("name", "checkbox-name")}
            size={"small"}
            theme={select("theme", themes, "default")}
            type={select("type", types, "text")}
            onChange={this.onChange}
            value={this.state.value}
          />
        </InputStatus>
      </InputWrapper>
    );
  }
}
