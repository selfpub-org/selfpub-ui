import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledLabel } from "./input.styled";

const StyledInputWrapper = styled.div`
  width: 100%;
`;

export default class InputWrapper extends PureComponent {
  render() {
    const { id, label, labelPosition, children, ...rest } = this.props;
    const inputId = id || `${~~(Math.random() * 10000)}`;

    return (
      <React.Fragment>
        <StyledInputWrapper labelPosition={labelPosition} {...rest}>
          <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
          {children}
        </StyledInputWrapper>
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
