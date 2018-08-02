import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles";
import { StyledInput, StyledLabel } from "./input.styled";

export class ErrorField extends PureComponent {
  render() {
    const { error, id } = this.props;

    const StyledErrorField = styled.div`
      margin-top: 5px;
      color: ${mainTheme.color.red};
      font-size: 14px;
    `;

    return error ? <StyledErrorField id={id}>{error}</StyledErrorField> : null;
  }
}

export class LabelWrapper extends PureComponent {
  render() {
    const { id, error, children, rest, labelText } = this.props;
    const elemId = id || labelText;
    return (
      <React.Fragment>
        <StyledLabel htmlFor={elemId} {...rest}>
          {this.props.labelText}
          {children}
        </StyledLabel>
        <ErrorField error={error} />
      </React.Fragment>
    );
    // </ThemeProvider> TODO
    //<ThemeProvider theme={themesMap[theme]}>
  }
}

export class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeHelper = ::this.onChangeHelper;
    this.input = React.createRef();
    this.state = {
      value: "",
      error: "",
    };
  }

  componentWillMount() {
    this.setState({
      value: this.props.value,
      error: this.props.error,
    });
  }

  onChangeHelper(event) {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  }

  render() {
    const {
      labelPosition,
      labelText,
      error,
      size,
      disabled,
      value,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      type = "text",
      onClick,
      autocomplete,
      ...rest
    } = this.props;

    const id = this.props.id || this.props.labelText;

    const StyledInputWrapper = styled.div`
      width: 100%;

      ${labelPosition === "top" &&
        css`
          display: flex;
          flex-direction: row;
        `};
    `;

    return (
      <div>
        <StyledInputWrapper>
          <StyledLabel htmlFor={id} {...rest}>
            {labelText}
          </StyledLabel>
          <StyledInput
            id={id}
            name={name}
            innerRef={this.input}
            size={size}
            disabled={disabled}
            value={this.state.value}
            type={type}
            onChange={this.onChangeHelper}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            autoComplete={autocomplete ? autocomplete.toString() : "true"}
          />
        </StyledInputWrapper>
        <ErrorField error={error} />
      </div>
    );
  }
}

Input.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  labelText: "",
  placeholder: "",
  type: "text",
  error: null,
  onChange: null,
  onBlur: null,
  onClick: null,
  onFocus: null,
};
