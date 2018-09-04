import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "./../index";
import { StyledButton } from "../button/button.styled";

export default class RadioButton extends Component {
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
    iconPosition: "left",
    size: "medium",
    onFocus() {},
    onBlur() {},
  };

  static Button = styled(StyledButton)`
    width: inherit;
    position: relative;
    border: 2px solid ${props => (props.checked ? colors.primary : colors.coal)};
    background: ${props => (props.checked ? colors.primary : "transparent")};
  `;

  static Input = styled.input`
    position: absolute;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;

    ${props =>
      props.disabled &&
      css`
        cursor: default;
      `};
  `;

  static Header = styled.div`
    position: relative;
    text-align: center;
    padding: 15px;
    background: ${props => (props.checked ? colors.primary : colors.coal)};
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    font-size: 24px;
  `;

  state = {
    checked: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      props,
      props: { checked: propsChecked, defaultChecked },
    } = this;
    const checked = props.checked ? propsChecked : defaultChecked;

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

  handleButton = () => {
    const { onChange } = this.props;
    const checked = this.input.checked || false;

    this.setState({ checked });

    onChange && onChange(this.props.key);
  };

  handleChange = event => {
    const { checked } = event.target;
    const {
      props,
      props: { disabled, onChange },
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
      children,
      ...rest
    } = this.props;

    const { checked } = this.state;

    return (
      <RadioButton.Button
        {...rest}
        variation={"default"}
        htmlFor={id}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        checked={this.state.checked}
      >
        <RadioButton.Input
          id={id}
          name={name}
          type="radio"
          disabled={disabled}
          checked={!!checked}
          autoComplete="off"
          onChange={this.handleChange}
          ref={this.saveInput}
          value={value}
          {...rest}
        />
        {children}
      </RadioButton.Button>
    );
  }
}
