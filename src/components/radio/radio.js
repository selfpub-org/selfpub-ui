import React, { Fragment } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import StyledRadio from "./radio.styled";

export default class Radio extends StyledRadio {
  static propTypes = {
    /** The id of the input element. */
    id: PropTypes.string,
    /** name of radio */
    name: PropTypes.string,
    /** If true, the component is checked. */
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    /** defaultChecked */
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    /** If true, the switch will be disabled. */
    disabled: PropTypes.bool,
    /** The input component property type. */
    type: PropTypes.string,
    /** The value of the component. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Callback fired when the radio is focused.
     * Signature:
     *   function(event: object) => void
     *     - event: The event source of the callback. You can pull out the new value by accessing event.target.value.
     */
    onFocus: PropTypes.func,
    /**
     * Callback fired when the radio is blured.
     * Signature:
     *   function(event: object) => void
     *     - event: The event source of the callback. You can pull out the new value by accessing event.target.value.
     */
    onBlur: PropTypes.func,
    /**
     * Callback fired when the radio is clicked.
     * Signature:
     *   function(event: object) => void
     *     - event: The event source of the callback. You can pull out the new value by accessing event.target.value.
     */
    onClick: PropTypes.func,
    /**
     * Callback fired when the state is changed.
     *
     * Signature:
     *   function(event: object, checked: boolean) => void
     *     - event: The event source of the callback. You can pull out the new value by accessing event.target.value.
     *     - checked: The checked value of the switch
     */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: "radio",
    defaultChecked: false,
    iconPosition: "left",
    onFocus() {},
    onBlur() {},
  };

  state = {
    checked: false,
  };

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const {
      props,
      props: { checked: propsChecked, defaultChecked },
    } = this;

    const checked =
      "checked" in props && !defaultChecked ? propsChecked : defaultChecked;

    this.setState({ checked });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if ("checked" in nextProps) {
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

  handleChange = event => {
    const { checked } = event.target;
    const {
      props,
      props: { disabled },
    } = this.props;

    if (disabled) {
      return;
    }

    if (!("checked" in props)) {
      this.setState({ checked });
    }

    onChange && onChange(this.props.key);
  };

  saveInput = node => {
    this.input = node;
  };

  render() {
    const {
      id,
      name,
      disabled,
      onClick,
      onFocus,
      onBlur,
      value,
      iconPosition,
      children,
      defaultChecked,
      ...rest
    } = this.props;

    const { checked } = this.state;
    const radioId = id || `radio-${nanoid(6)}`;

    const marker = (
      <Fragment>
        <Radio.Input
          id={radioId}
          name={name}
          type="radio"
          disabled={disabled}
          checked={!!checked}
          autoComplete="off"
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          ref={this.saveInput}
          value={value}
          {...rest}
        />
        <Radio.FakeRadio {...rest} checked={!!checked} disabled={disabled} />
      </Fragment>
    );

    return (
      <Radio.Label {...rest} htmlFor={radioId} disabled={disabled}>
        {iconPosition === "left" && marker}
        {children && <span>{children}</span>}
        {iconPosition === "right" && marker}
      </Radio.Label>
    );
  }
}
