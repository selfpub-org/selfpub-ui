import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles/index";
import { darken } from "../../utils/styled";

export const themesMap = {
  ["default"]: {
    accent: mainTheme.color.orange,
    fill: mainTheme.color.white,
    background: mainTheme.color.white,
    base: mainTheme.color.lightCoal,
    hover: {
      accent: mainTheme.color.coal,
      fill: mainTheme.color.lightCoal,
      background: 0,
    },
    active: {
      background: mainTheme.color.coal,
      border: mainTheme.color.coal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
};

export const StyledFakeCheckbox = styled.span`
  font-size: ${props => props.theme.size}px;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  top: -0.09em;
  margin: 0 5px;

  ${({ theme: { checked } }) => {
    console.log(checked);
    return (
      checked &&
      css`
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          border: 1px solid ${props => props.theme.accent};
          content: "";
          //animation: easyEffect 0.36s ease-in-out;
          //animation-fill-mode: both;
          visibility: hidden;
        }

        &:after {
          content: "✓";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          font: ${props => props.theme.size}px Font Awesome;
          color: ${props => props.theme.accent};
          width: 100%;
          height: 100%;
          vertical-align: middle;
          text-align: center;
          box-sizing: border-box;
        }
      `
    );
  }};
`;

export const StyledInnerCheck = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: ${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  border: 1px solid ${props => props.theme.base};
  border-radius: 2px;
  background-color: ${props => props.theme.background};
  transition: all 0.3s;

  ${({ theme: { checked } }) =>
    checked &&
    css`
      background-color: ${props => props.theme.background};
      border-color: ${props => props.theme.accent};
    `} &:after {
    transform: rotate(45deg) scale(0);
    position: absolute;
    left: 4.57142857px;
    top: 1.14285714px;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: " ";
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  }
`;

export const StyledCheckboxInput = styled.span`
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
`;
