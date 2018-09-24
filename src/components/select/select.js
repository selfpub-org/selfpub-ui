import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "./../index";
import { Container, Element, IconWrapper } from "./select.styled";

export default class Select extends Component {
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
    stretch: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    stretch: false,
    loading: false,
  };

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

  saveRef = () => select => (this.select = select);

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

  getCurrentOption = options =>
    options.find(option => {
      return this.state.value.toString() === option.value.toString();
    });

  getOptionsElements = options =>
    options.map((option, index) => (
      <option key={index} value={option.value}>
        {option && option.text}
      </option>
    ));

  render() {
    const { stretch, loading } = this.props;
    const { value, options } = this.state;

    const optionsElements = this.getOptionsElements(options);
    const currentOption = this.getCurrentOption(options);

    return (
      <Container
        onClick={() => this.select.click && this.select.click()}
        stretch={stretch}
        disabled={disabled}
      >
        <Element
          ref={this.saveRef()}
          onChange={this.onChangeHandler}
          disabled={disabled}
          value={value}
        >
          {optionsElements}
        </Element>
        {currentOption && currentOption.text}
        <IconWrapper>
          <Icon
            glyph="arrow-bottom"
            loading={loading}
            hovered={false}
            size="small"
          />
        </IconWrapper>
      </Container>
    );
  }
}
