import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "./../index";

export default class ToggleOption extends Component {
  static defaultProps = {
    onFocus() {},
    onBlur() {},
  };

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static Button = styled.button`
    border: 2px solid ${props => (props.active ? colors.primary : colors.coal)};
    position: relative;
    font-size: 14px;
    line-height: 1.5;
    color: ${colors.coal};
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    user-select: none;
    width: 32%;
    outline: 0;
    margin: 0 0 0 -2px;

    // active state
    ${props =>
      props.active &&
      css`
        z-index: 1;
      `} 
    
    // disabled state 
    ${props =>
      props.disabled &&
      css`
        cursor: default;
        background-color: ${colors.strongLighterCoal};
        border-color: ${colors.strongLighterCoal};
        z-index: -1;
      `};
  `;

  state = {
    active: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { active } = this.props;

    this.setState({ active });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if ("active" in nextProps) {
      this.setState({
        active: nextProps.active,
      });
    }
  }

  handleChange = event => {
    const { active } = event.target;
    const { disabled, onChange } = this.props;

    if (disabled) {
      return;
    }

    if (!("active" in this.props)) {
      this.setState({ active });
    }

    onChange && onChange(this.props.key);
  };

  render() {
    const {
      id,
      name,
      disabled,
      onFocus,
      onBlur,
      value,
      children,
      ...rest
    } = this.props;

    const { active } = this.state;

    return (
      <ToggleOption.Button
        {...rest}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        active={!!active}
        onClick={e => this.handleChange(e)}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </ToggleOption.Button>
    );
  }
}
