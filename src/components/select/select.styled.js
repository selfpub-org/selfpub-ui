import styled, { css } from "styled-components";
import { colors } from "./../theme";

export const Container = styled.div`
  display: inline-flex;
  position: relative;
  border-radius: 0;
  border: 1px solid ${colors.lighterCoal};
  box-sizing: border-box;
  font-size: 17px;
  height: 46px;
  line-height: 28px;
  margin: 0;
  outline: 0;
  padding: 6px 10px 6px 10px;
  text-size-adjust: none;
  background: ${props => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;

  &:focus {
    border-color: ${colors.coal};
  }

  &:hover {
    border-color: ${colors.coal};

    ${props =>
      props.disabled &&
      css`
        border-color: ${colors.gray};
      `};
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.coal};
    `};

  ${props => props.stretch && "width: 100%;"};

  ${props =>
    props.disabled &&
    css`
      border-color: ${colors.gray};
      color: ${colors.lighterCoal};
      cursor: default;
    `};

  ${props =>
    props.status === "error" &&
    css`
      border-color: ${colors.red};
    `};
`;

export const Element = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  font-size: 17px;
  opacity: 0;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
    `};
`;

export const IconWrapper = styled.div`
  height: 22px;
  min-width: 18px;
  margin: auto 0 auto 12px;
`;
