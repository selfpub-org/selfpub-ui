import styled, { css } from "styled-components";
import { mainTheme } from "../../components/ui-styles";
// import { darken } from "../../utils/styled";
import svgSprite from "../../assets/icon-sprite.svg";

export const themesMap = {
  // ["default"]: {
  //   accent: mainTheme.color.orange,
  //   fill: mainTheme.color.white,
  //   background: mainTheme.color.white,
  //   base: mainTheme.color.lighterCoal,
  //   hover: {
  //     accent: darken(mainTheme.color.coal, 15),
  //     fill: mainTheme.color.lighterCoal,
  //     background: 0,
  //   },
  //   active: {
  //     background: 0,
  //     border: mainTheme.color.coal,
  //     accent: mainTheme.color.orange,
  //   },
  //   focus: {
  //     shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
  //   },
  // },
  // ["dark"]: {
  //   accent: mainTheme.color.coal,
  //   fill: mainTheme.color.white,
  //   background: 0,
  //   border: mainTheme.color.lighterCoal,
  //   hover: {
  //     accent: mainTheme.color.lightCoal,
  //     fill: mainTheme.color.lightCoal,
  //     background: 0,
  //   },
  //   active: {
  //     background: mainTheme.color.coal,
  //     border: mainTheme.color.coal,
  //     accent: mainTheme.color.white,
  //   },
  //   focus: {
  //     shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
  //   },
  // },
  ["green"]: {
    accent: mainTheme.color.green,
    fill: mainTheme.color.white,
    background: mainTheme.color.white,
    base: mainTheme.color.lightCoal,
    hover: {
      accent: mainTheme.color.coal,
      fill: mainTheme.color.green,
      background: 0,
    },
    active: {
      background: mainTheme.color.green,
      border: mainTheme.color.green,
      accent: mainTheme.color.white,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
};

export const StyledFakeCheckbox = styled.span`
  font-size: ${props => props.theme.size}px;
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
  background: url(${svgSprite}) 119px -37px;

  ${({ theme: { checked } }) => {
    return (
      checked &&
      css`
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid ${props => props.theme.active.border};
          content: "";
          visibility: hidden;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          background: url(${svgSprite}) 119px -63px;
          font-size: ${props => props.theme.size}px;
          color: ${props => props.theme.active.accent};
          width: ${props => props.theme.size}px;
          height: ${props => props.theme.size}px;
          vertical-align: middle;
          text-align: center;
          box-sizing: border-box;
        }
      `
    );
  }};
`;

export const StyledInnerCheck = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: ${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.background};
  transition: all 0.3s;

  ${({ theme: { rounded } }) =>
    rounded &&
    css`
      border-radius: 2px;
    `} ${({ theme: { checked } }) =>
    checked &&
    css`
      background-color: ${props => props.theme.active.background};
      border-color: ${props => props.theme.active.background};
    `} &:after {
    transform: rotate(45deg) scale(0);
    position: absolute;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: " ";
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  }
`;

export const StyledCheckboxInput = styled.span`
  position: absolute;
  box-sizing: border-box;
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
