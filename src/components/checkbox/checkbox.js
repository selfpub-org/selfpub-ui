import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import {
  StyledLabel,
  StyledFakeCheckbox,
  StyledInput,
} from "./checkbox.styled";
import nanoid from "nanoid";

export default class Checkbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked };
    this.handleChange = ::this.handleChange;
    this.focus = ::this.focus;
    this.blur = ::this.blur;
  }

  componentWillReceiveProps(nextProps) {
    if ("checked" in nextProps && this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      });

      this.input.checked = nextProps.checked && "checked";
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
      event,
      target: {
        ...this.props,
        checked: event.target.checked,
      },
    });
  }

  render() {
    const {
      id,
      name,
      disabled,
      iconPosition,
      children,
      variation,
      size,
      checked,
      ...rest
    } = this.props;

    const content = <Fragment>{children && <span>{children}</span>}</Fragment>;
    const checkboxId = id || `checkbox-${nanoid(6)}`;

    return (
      <StyledLabel
        {...rest}
        htmlFor={checkboxId}
        variation={variation}
        disabled={disabled}
        checked={checked}
        size={size}
      >
        {iconPosition === "right" && content}
        <StyledFakeCheckbox {...rest}>
          <StyledInput
            id={checkboxId}
            name={name}
            ref={input => {
              this.input = input;
            }}
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.checked}
            value={this.state.checked}
          />
        </StyledFakeCheckbox>
        {iconPosition === "left" && content}
      </StyledLabel>
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
  /** Theme of checkbox */
  variation: PropTypes.oneOf(["green"]),
  /** callback for event change checked state for checkbox */
  onCheck: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  iconPosition: "left",
  id: "",
  name: "checkbox",
  variation: "green",
};
