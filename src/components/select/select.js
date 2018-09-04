import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./../select/select.styled";
import { Icon } from "./../index";

export default class Select extends StyledSelect {
  static propTypes = {
    /** Callback on change select value */
    onChange: PropTypes.func,
    /** Started value */
    value: PropTypes.string.isRequired,
    /** Options array */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]).isRequired,
      }),
    ).isRequired,
  };

  state = {
    value: "",
    options: [],
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      value: this.props.value,
      options: this.props.options,
    });
  }

  setValue = value => {
    this.setState({
      value,
    });
  };

  onChangeHandler = event => {
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
        if (this.state.value === option.value) return option.text;
      })
      .join("");

    const optionsElements = options.map(option => (
      <option key={option.text} value={option.value}>
        {option.text}
      </option>
    ));

    return (
      <Select.Container
        onClick={() => this.select.click && this.select.click()}
      >
        <Select.Element
          ref={select => (this.select = select)}
          onChange={this.onChangeHandler}
          value={value}
        >
          {optionsElements}
        </Select.Element>
        {text}
        <Icon glyph="arrow-bottom" loading={false} hovered={false} size="big" />
      </Select.Container>
    );
  }
}
