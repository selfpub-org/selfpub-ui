import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "./../index";

export default class ToggleOption extends Component {
  static defaultProps = {
    name: "radio",
    iconPosition: "left",
    onFocus() {},
    onBlur() {},
  };

  static Label = styled.label`
    border: 2px solid ${props => (props.checked ? colors.primary : colors.coal)};
    position: relative;
    font-size: 14px;
    line-height: 1.5;
    color: ${colors.coal};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    user-select: none;
    width: 32%;

    ${props =>
      props.disabled &&
      css`
        cursor: default;
      `};
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
      <Fragment>
        <ToggleOption.Label
          {...rest}
          htmlFor={id}
          disabled={disabled}
          checked={this.state.checked}
        >
          <ToggleOption.Input
            id={id}
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
          {children}
        </ToggleOption.Label>
      </Fragment>
    );
  }
}
