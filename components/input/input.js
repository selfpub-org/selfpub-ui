import React, { PureComponent } from "react";
import { StyledInput, StyledLabel } from "./input.styled";
import PropTypes from "prop-types";
import { mainTheme } from "../ui-styles";
import styled from "styled-components";

export class InputStatus extends PureComponent {
  render() {
    const { type, message, children } = this.props;

    const colorMap = {
      error: mainTheme.color.red,
      warning: mainTheme.color.yellow,
      success: mainTheme.color.green,
      null: "transparent",
    };

    const StyledMessage = styled.div`
      margin-top: 5px;
      font-size: 14px;
      color: ${colorMap[type]};
    `;

    return (
      <div>
        {children}
        {message && type !== "null" ? (
          <StyledMessage type={type}>{message}</StyledMessage>
        ) : null}
      </div>
    );
  }
}

InputStatus.propTypes = {
  /** Type of status */
  type: PropTypes.oneOf(["error", "warning", "success", "null"]),
  /** Message for display */
  message: PropTypes.node,
  /** Input element for set position*/
  children: PropTypes.node.isRequired,
};

InputStatus.defaultProps = {
  type: "type",
};

export class ErrorField extends PureComponent {
  render() {
    const { error, id } = this.props;

    const StyledErrorField = styled.div`
      margin-top: 5px;
      color: ${mainTheme.color.red};
      font-size: 14px;
    `;

    return error ? <StyledErrorField id={id}>{error}</StyledErrorField> : null;
  }
}

export class LabelWrapper extends PureComponent {
  render() {
    const { id, error, children, rest, labelText } = this.props;
    const elemId = id || labelText;
    return (
      <React.Fragment>
        <StyledLabel htmlFor={elemId} {...rest}>
          {this.props.labelText}
          {children}
        </StyledLabel>
        <ErrorField error={error} />
      </React.Fragment>
    );
    // </ThemeProvider> TODO
    //<ThemeProvider theme={themesMap[theme]}>
  }
}

export class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.saveRef = ::this.saveRef;
    this.onChangeHelper = ::this.onChangeHelper;
    this.state = {
      type: this.props.type,
    };
  }

  saveRef(ref) {
    this.input = ref;
    if (this.props.inputRef) {
      this.props.inputRef(ref);
    }
  }

  onChangeHelper(event) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  }

  render() {
    const {
      disabled,
      value,
      placeholder,
      tagName = "input",
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      inputRef, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;
    const id = this.props.id || this.props.labelText;
    const InputTag = tagName && StyledInput.withComponent(tagName);

    return (
      <InputTag
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        ref={this.saveRef}
        tabIndex={0}
        placeholder={placeholder}
        onChange={this.onChangeHelper}
        {...rest}
      />
    );
  }
}

Input.propTypes = {
  /** The value entered in the field. */
  value: PropTypes.any.isRequired,
  /** Placeholder for input */
  placeholder: PropTypes.string,
  /** Disabled flags */
  disabled: PropTypes.bool,
  /** Field types */
  type: PropTypes.oneOf(["email", "number", "password", "tel", "text", "url"]),
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
  /** Callback onChange возвращает event и event.target.value */
  onChange: PropTypes.func.isRequired,
  /** Callback onBlur */
  onBlur: PropTypes.func,
  /** Callback onFocus */
  onFocus: PropTypes.func,
  /** Callback onKeyUp */
  onKeyUp: PropTypes.func,
  /** Callback onKeyDown */
  onKeyDown: PropTypes.func,
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  status: null,
  size: "medium",
  theme: "default",
};
