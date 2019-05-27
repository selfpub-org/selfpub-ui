import React, { Component } from "react";
import { action } from "@storybook/addon-actions";

import { InputWrapper, Textarea } from "@selfpub-ui";

export class TextareaExample extends Component {
  constructor() {
    super();
    this.onChange = ::this.onChange;
    this.state = {
      value: "",
    };
  }

  onChange(event, value) {
    action("checkbox toggle");
    this.setState({ value });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div>
          <div>
            <h3>Textarea</h3>
            <div style={{ display: "flex" }}>
              <InputWrapper
                label="Textarea"
                size="small"
                style={{ marginBottom: "10px" }}
              >
                <Textarea
                  value={this.state.value}
                  onChange={this.onChange}
                  placeholder="placeholder"
                />
              </InputWrapper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
