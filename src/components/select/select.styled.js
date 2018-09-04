import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

export default class StyledSelect extends PureComponent {
  static Container = styled.div`
    display: inline-flex;
    position: relative;
    border-radius: 0;
    border: 1px solid #9d9c9f;
    box-sizing: border-box;
    font-size: 17px;
    height: 46px;
    line-height: 28px;
    margin: 0;
    outline: 0;
    padding: 6px 10px;
    text-size-adjust: none;
    background: ${props => props.theme.colors.white};
    justify-content: space-between;
    align-items: center;

    &:focus {
      border-color: ${props => props.theme.colors.coal};
    }

    ${props =>
      props.isFocused &&
      css`
        border-color: ${props => props.theme.colors.coal};
      `};

    ${props =>
      props.disabled &&
      css`
        border-color: ${props => props.theme.colors.gray};
      `};

    ${props =>
      props.status === "error" &&
      css`
        border-color: ${props => props.theme.colors.red};
      `};
  `;

  static Element = styled.select`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    font-size: 17px;
    opacity: 0;
    cursor: pointer;
  `;
}
