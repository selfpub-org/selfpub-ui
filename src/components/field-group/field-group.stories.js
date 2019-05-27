import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { ThemeProviderWrapper, Input, FieldGroup } from "@selfpub-ui";

export default class FieldGroupExample extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.setValue = ::this.setValue;
  }

  setValue(e, value) {
    this.setState({ value });
  }

  render() {
    return (
      <ThemeProviderWrapper>
        <div>
          <h3>Form groups</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: 300, marginRight: 40 }}>
              <FieldGroup>
                <Input
                  type="text"
                  placeholder="placeholder"
                  onChange={this.setValue}
                  value={this.state.value}
                />
                <Input
                  type="text"
                  placeholder="placeholder"
                  onChange={this.setValue}
                  value={this.state.value}
                />
              </FieldGroup>
              <br />
              <FieldGroup showDivider>
                <Input
                  type="text"
                  placeholder="placeholder"
                  onChange={this.setValue}
                  value={this.state.value}
                />
                <Input
                  type="text"
                  placeholder="placeholder"
                  onChange={this.setValue}
                  value={this.state.value}
                />
              </FieldGroup>
            </div>
          </div>
        </div>
      </ThemeProviderWrapper>
    );
  }
}

storiesOf("FieldGroup", module).add(
  "1. With editable props",
  withInfo({ text: "FieldGroup", inline: true })(() => <FieldGroupExample />),
);
