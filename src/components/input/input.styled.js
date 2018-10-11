import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles/index";
import { lighten } from "../../utils/styled";

const colorMap = {
  error: mainTheme.color.red,
  warning: mainTheme.color.yellow,
  success: mainTheme.color.green,
  null: "transparent",
};

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  display: inline-block;
  user-select: none;
  margin: 0 0 5px;

  ${props =>
    !props.disabled &&
    css`
      cursor: pointer;
    `};
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

export const InputContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const InputIconContainer = styled.div`
  position: absolute;
  margin: auto 10px auto auto;
  top: 9px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
`;

export const ClearButtonContainer = styled(InputIconContainer)`
  right: 0;
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
`;

export const StyledMessage = type => styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: ${colorMap[type]};
`;
