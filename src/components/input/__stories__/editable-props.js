import React, { Component } from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import {
  InputWrapper,
  InputStatus,
  Input,
  ThemeProviderWrapper,
} from "./../../index";

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
      <ThemeProviderWrapper>
        <InputWrapper id="uniq-id" label={text("label", "Some Label")}>
          <InputStatus
            type={select("status theme", statusTypes, "null")}
            message={text("message", "Success message")}
          >
            <Input
              disabled={boolean("disabled", false)}
              id="uniq-id"
              name={text("name", "checkbox-name")}
              size={"small"}
              theme={select("theme", themes, "default")}
              type={select("type", types, "text")}
              onChange={this.onChange}
              value={this.state.value}
              clearAction={action("clear input")}
              clearIcon
            />
          </InputStatus>
        </InputWrapper>
      </ThemeProviderWrapper>
    );
  }
}
