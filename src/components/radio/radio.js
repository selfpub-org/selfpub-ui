import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { FakeRadio, Input, Label, Text } from "./radio.styled";

export default class Radio extends Component {
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
    iconPosition: PropTypes.syring,
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

  constructor(props) {
    super(props);
    this.defaultId = `radio-${~~(Math.random() * 10000)}`;
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

  saveInput = node => {
    this.input = node;
  };

  _onChange = event => {
    const { checked, value } = event.target;
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    if (!("checked" in this.props)) {
      this.setState({ checked });
    }

    if (onChange && !onChange.nativeEvent) {
      onChange(value);
    }
  };

  render() {
    const {
      id,
      name,
      disabled,
      value,
      iconPosition,
      children,
      onChange,
      defaultChecked,
      ...rest
    } = this.props;

    const { checked } = this.state;
    const radioId = id || this.defaultId;

    const marker = (
      <Fragment>
        <Input
          id={radioId}
          name={name}
          type="radio"
          disabled={disabled}
          checked={!!checked}
          autoComplete="off"
          onChange={this._onChange}
          ref={this.saveInput}
          value={value}
          {...rest}
        />
        <FakeRadio {...rest} checked={!!checked} disabled={disabled} />
      </Fragment>
    );

    return (
      <Label {...rest} htmlFor={radioId} disabled={disabled}>
        {iconPosition === "left" && marker}
        {children && <Text disabled={disabled}>{children}</Text>}
        {iconPosition === "right" && marker}
      </Label>
    );
  }
}
