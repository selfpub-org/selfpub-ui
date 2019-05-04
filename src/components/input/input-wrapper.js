import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { StyledInputWrapper, Label } from "./input.styled";

export default function InputWrapper({
  id,
  label,
  error = "",
  labelPosition,
  children,
  disabled = undefined,
  ...rest
}) {
  const inputId = id || `input-${~~(Math.random() * 10000)}`;

  const clonedChildren = Children.map(children, (child, index) => {
    const newProps = {
      disabled,
      ...children.props,
      id: inputId,
      key: index,
    };

    return cloneElement(child, newProps);
  });

  return (
    <StyledInputWrapper
      labelPosition={labelPosition}
      disabled={disabled}
      {...rest}
    >
      <Label htmlFor={inputId} disabled={disabled}>
        {label}
      </Label>
      {clonedChildren}
    </StyledInputWrapper>
  );
}

InputWrapper.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
