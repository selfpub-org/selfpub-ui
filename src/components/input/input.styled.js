import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles";
import { lighten } from "../../utils/styled";

export const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;
`;

export const StyledInput = styled.input`
  border-radius: 0;
  border: 1px solid #9d9c9f;
  box-sizing: border-box;
  display: block;
  font-size: 17px;
  height: 46px;
  line-height: 28px;
  margin: 0;
  outline: 0;
  padding: 6px 10px;
  text-size-adjust: none;
  width: 100%;

  &:focus {
    border-color: ${mainTheme.color.coal};
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: ${mainTheme.color.coal};
    `};

  ${props =>
    props.disabled &&
    css`
      border-color: ${mainTheme.color.gray};
      background: ${lighten(mainTheme.color.gray, 40)};
    `};

  ${props =>
    props.status === "error" &&
    css`
      border-color: ${mainTheme.color.red};
      background: ${lighten(mainTheme.color.red, 40)};
    `};
`;