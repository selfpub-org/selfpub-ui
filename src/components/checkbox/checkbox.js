import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { themesMap } from "./checkbox.styled";
import { ThemeProvider } from "styled-components";
import {
  StyledCheckboxInput,
  StyledFakeCheckbox,
  StyledInnerCheck,
} from "./checkbox.styled";
import nanoid from "nanoid";
import { StyledLabel } from "../input/input.styled";

export default class Checkbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked };
    this.handleChange = ::this.handleChange;
    this.focus = ::this.focus;
    this.blur = ::this.blur;
    this.id = props.id || nanoid();
  }

  componentWillReceiveProps(nextProps) {
    if ("checked" in nextProps && this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange(event) {
    const { onCheck, disabled, checked } = this.props;
    if (disabled) {
      return;
    }

    if (!checked) {
      this.setState({
        checked: event.target.checked,
      });
    }

    if (typeof onCheck !== "function") {
      return;
    }

    onCheck({
      target: {
        ...this.props,
        checked: event.target.checked,
      },
      stopPropagation() {
        event.stopPropagation();
      },
      preventDefault() {
        event.preventDefault();
      },
      nativeEvent: event.nativeEvent,
    });
  }

  render() {
    const {
      name,
      disabled,
      iconPosition,
      children,
      theme,
      size,
      ...rest
    } = this.props;

    const content = (
      <React.Fragment>{children && <span>{children}</span>}</React.Fragment>
    );

    const StyledInput = StyledCheckboxInput.withComponent("input");

    return (
      <ThemeProvider
        theme={{
          ...themesMap[theme],
          size,
          checked: this.state.checked,
          rounded: this.props.rounded,
        }}
      >
        <StyledLabel htmlFor={this.id} {...rest}>
          {iconPosition === "right" && content}
          <StyledFakeCheckbox>
            <StyledInput
              id={this.id}
              name={name}
              ref={input => {
                this.input = input;
              }}
              size={size}
              type="checkbox"
              disabled={disabled}
              checked={this.state.checked}
              onChange={this.handleChange}
              value=""
            />
            <StyledInnerCheck />
          </StyledFakeCheckbox>
          {iconPosition === "left" && content}
        </StyledLabel>
      </ThemeProvider>
    );
  }
}

Checkbox.propTypes = {
  /** Checked state flag */
  checked: PropTypes.bool,
  /** Checkbox disable flag */
  disabled: PropTypes.bool,
  /** Checkbox Position */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /** Checkbox input ID */
  id: PropTypes.string,
  /** Checkbox name */
  name: PropTypes.string,
  /** Checkbox size */
  size: PropTypes.string,
  /** Theme of checkbox */
  theme: PropTypes.string,
  /** callback for event change checked state for checkbox */
  onCheck: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  iconPosition: "left",
  id: "",
  name: "",
  size: "14",
  theme: "default",
};
