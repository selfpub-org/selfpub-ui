import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./../index";
import {
  ClearButtonContainer,
  StyledInput,
  InputContainer,
} from "./input.styled";

export default class Input extends Component {
  static propTypes = {
    /** The value entered in the field. */
    value: PropTypes.any.isRequired,
    /** Placeholder for input */
    placeholder: PropTypes.string,
    /** Disabled flags */
    disabled: PropTypes.bool,
    /** Field types */
    type: PropTypes.oneOf([
      "email",
      "number",
      "password",
      "tel",
      "text",
      "url",
    ]),
    /** Input size */
    size: PropTypes.oneOf(["small", "medium"]),
    /** Input theme */
    theme: PropTypes.oneOf(["default", "inset", "ghost"]),
    /** Input name */
    name: PropTypes.string,
    /** Validation status */
    status: PropTypes.oneOf(["error", "warning", "success", null]),
    /** Focused state flag */
    isFocused: PropTypes.bool,
    /** By default, the input element is stretched to the full width of the parent container. */
    stretch: PropTypes.oneOf(["auto", "fill"]),
    /** Callback onChange return event и event.target.value */
    onChange: PropTypes.func,
    /** Callback onBlur */
    onBlur: PropTypes.func,
    /** Callback onFocus */
    onFocus: PropTypes.func,
    /** Callback onKeyUp */
    onKeyUp: PropTypes.func,
    /** Callback onKeyDown */
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    placeholder: "",
    type: "text",
    status: null,
    size: "medium",
    theme: "default",
  };

  state = {
    type: this.props.type,
  };

  onChangeHelper = event => {
    const { onChange } = this.props;

    onChange && onChange(event, event.target.value);
  };

  render() {
    const {
      disabled,
      value,
      placeholder,
      tagName = "input",
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      inputRef, // eslint-disable-line no-unused-vars
      loading,
      clearIcon,
      clearAction,
      ...rest
    } = this.props;
    const id = this.props.id || this.props.labelText;

    return (
      <InputContainer>
        <StyledInput
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          ref={input => (this.input = input)}
          tabIndex={0}
          placeholder={placeholder}
          onChange={this.onChangeHelper}
          htmlType={this.state.type}
          {...rest}
        />
        {clearIcon &&
          !!value && (
            <ClearButtonContainer>
              <Button
                icon="cross"
                iconSize="small"
                variation="beige"
                onClick={clearAction}
                loading={loading}
              />
            </ClearButtonContainer>
          )}
      </InputContainer>
    );
  }
}
