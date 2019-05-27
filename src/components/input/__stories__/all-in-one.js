import React, { Component } from "react";
import { action } from "@storybook/addon-actions";

import { InputWrapper, Input, InputStatus } from "@selfpub-ui";

export class InputExample extends Component {
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
          <h3>All inputs</h3>
          <div style={{ display: "flex" }}>
            {["default", "inset", "ghost"].map(variation => (
              <div style={{ width: 300, marginRight: 40 }} key={variation}>
                <h4>{`Variation: ${variation}`}</h4>
                <InputWrapper label="Input" style={{ marginBottom: "10px" }}>
                  <Input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input password"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    type="password"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input isFocused"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    isFocused={true}
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                    tabIndex={-1}
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input success"
                  style={{ marginBottom: "10px" }}
                >
                  <InputStatus type="success" message="Success message">
                    <Input
                      status="success"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="placeholder"
                      variation={variation}
                    />
                  </InputStatus>
                </InputWrapper>
                <InputWrapper
                  label="Input warning"
                  style={{ marginBottom: "10px" }}
                >
                  <InputStatus type="warning" message="Warning message">
                    <Input
                      status="warning"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="placeholder"
                      variation={variation}
                    />
                  </InputStatus>
                </InputWrapper>
                <InputWrapper
                  label="Input error"
                  style={{ marginBottom: "10px" }}
                >
                  <InputStatus type="error" message="Error message">
                    <Input
                      status="error"
                      type="text"
                      value={this.state.value}
                      onChange={this.onChange}
                      placeholder="placeholder"
                      variation={variation}
                    />
                  </InputStatus>
                </InputWrapper>
                <InputWrapper
                  disabled
                  label="Input disabled"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input small"
                  size="small"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    size="small"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                  />
                </InputWrapper>
                <InputWrapper label="Input" style={{ marginBottom: "10px" }}>
                  <Input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                    variation={variation}
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input password"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    type="password"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                  />
                </InputWrapper>
                <InputWrapper
                  label="Input small password"
                  size="small"
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    size="small"
                    type="password"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="placeholder"
                  />
                </InputWrapper>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "600px" }}>
          <h3>Inline form groups</h3>
          <InputWrapper label="Input" inline={true}>
            <Input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
          <InputWrapper label="Input password" inline={true}>
            <Input
              type="password"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
          <InputWrapper label="Input success" inline={true}>
            <InputStatus type="success" message="Success message">
              <Input
                status="success"
                type="text"
                value={this.state.value}
                onChange={this.onChange}
                placeholder="placeholder"
              />
            </InputStatus>
          </InputWrapper>
          <InputWrapper label="Input warning" inline={true}>
            <InputStatus type="warning" message="Warning message">
              <Input
                status="warning"
                type="text"
                value={this.state.value}
                onChange={this.onChange}
                placeholder="placeholder"
              />
            </InputStatus>
          </InputWrapper>
          <InputWrapper label="Input error" inline={true}>
            <InputStatus type="error" message="Error message">
              <Input
                status="error"
                type="text"
                value={this.state.value}
                onChange={this.onChange}
                placeholder="placeholder"
              />
            </InputStatus>
          </InputWrapper>
          <InputWrapper label="Input disabled" inline={true} disabled>
            <Input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
          <InputWrapper label="Input small" size="small" inline={true}>
            <Input
              size="small"
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
          <InputWrapper label="Input" inline={true}>
            <Input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
          <InputWrapper label="Input" inline={true}>
            <Input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="placeholder"
            />
          </InputWrapper>
        </div>
      </div>
    );
  }
}
