import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyledInlineSelect, StyledSelectElem } from "./inline-select.styled";

export default class InlineSelect extends Component {
  state = {
    value: "",
    options: [],
  };

  componentDidMount() {
    this.setState({
      value: this.props.value,
      options: this.props.options,
    });
  }

  setValue(value) {
    this.setState({
      value,
    });
  }

  _onChangeHandler = event => {
    const {
      target: { value },
    } = event;
    const { onChange } = this.props;

    this.setValue(value);
    onChange && onChange(value, this.state.options);
  };

  render() {
    const { value, options } = this.state;
    const text = options
      .map(option => {
        if (this.state.value === option.value) {
          return option.text;
        }
      })
      .join("");
    const optionsElements = options.map(option => (
      <option key={option.text} value={option.value}>
        {option.text}
      </option>
    ));

    return (
      <StyledInlineSelect
        onClick={() => this.select.click && this.select.click()}
      >
        <StyledSelectElem
          ref={select => {
            this.select = select;
          }}
          onChange={this._onChangeHandler}
          value={value}
        >
          {optionsElements}
        </StyledSelectElem>
        {text}
      </StyledInlineSelect>
    );
  }
}

InlineSelect.propTypes = {
  /** Callback on change select value */
  onChange: PropTypes.func,
  /** Started value */
  value: PropTypes.string.isRequired,
  /** Options array */
  options: PropTypes.array.isRequired,
};
