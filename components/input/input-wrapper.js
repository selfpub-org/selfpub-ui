import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyledLabel } from "./input.styled";
import { ErrorField } from "./input";
import styled, { css } from "styled-components";
import nanoid from "nanoid";

const StyledInputWrapper = styled.div`
  width: 100%;

  ${props =>
    props.labelPosition === "top" &&
    css`
      display: flex;
      flex-direction: row;
    `};
`;

export class InputWrapper extends PureComponent {
  render() {
    const { id, label, labelPosition, children, error, ...rest } = this.props;
    const inputId = id || nanoid();
    return (
      <React.Fragment>
        <StyledInputWrapper labelPosition={labelPosition} {...rest}>
          <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
          {children}
        </StyledInputWrapper>
        <ErrorField error={error} />
      </React.Fragment>
    );
  }
}

InputWrapper.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

InputWrapper.defaultProps = {
  error: "",
};
