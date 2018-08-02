import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles/index";
import { darken } from "../../utils/styled";

export const themesMap = {
  ["default"]: {
    color: mainTheme.color.coal,
    border: mainTheme.color.lightCoal,
    background: 0,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.lightCoal,
      background: mainTheme.color.coal,
    },
    active: {
      background: mainTheme.color.coal,
      border: mainTheme.color.coal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["primary"]: {
    color: mainTheme.color.white,
    border: mainTheme.color.orange,
    background: mainTheme.color.orange,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    active: {
      border: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["success"]: {
    color: mainTheme.color.white,
    border: mainTheme.color.green,
    background: mainTheme.color.green,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.green,
      background: mainTheme.color.green,
    },
    active: {
      border: mainTheme.color.green,
      background: mainTheme.color.green,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(29, 181, 29, 0.65)`,
    },
  },
  ["light"]: {
    color: mainTheme.color.coal,
    border: mainTheme.color.strongLighterCoal,
    background: mainTheme.color.white,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.lighterCoal,
      background: mainTheme.color.lighterCoal,
    },
    active: {
      border: mainTheme.color.lighterCoal,
      background: mainTheme.color.lighterCoal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["lighter"]: {
    color: mainTheme.color.coal,
    border: mainTheme.color.lighterCoal,
    background: mainTheme.color.white,
    hover: {
      color: mainTheme.color.coal,
      border: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    active: {
      border: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["white"]: {
    color: mainTheme.color.white,
    border: mainTheme.color.white,
    background: mainTheme.color.white,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    active: {
      border: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["danger"]: {
    color: mainTheme.color.red,
    border: mainTheme.color.red,
    background: mainTheme.color.white,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.red,
      background: mainTheme.color.red,
    },
    active: {
      border: mainTheme.color.red,
      background: mainTheme.color.red,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(197, 50, 50, 0.65)`,
    },
  },
  ["black"]: {
    color: mainTheme.color.white,
    border: mainTheme.color.coal,
    background: mainTheme.color.coal,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    active: {
      border: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["primary-light"]: {
    color: mainTheme.color.orange,
    border: mainTheme.color.orange,
    background: mainTheme.color.white,
    hover: {
      color: mainTheme.color.white,
      border: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    active: {
      border: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
};

export const StyledButton = styled.button`
  // size and aligning
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  //themes
  color: ${props => props.theme.color};
  border: solid ${props => props.theme.border};
  background-color: ${props => props.theme.background};
  // base not modified
  outline: 0;
  appearance: none;
  border-radius: 0;
  user-select: none;
  transition: background-color .2s, border-color .2s, box-shadow .2s, color .2s;
  
  &:focus:not(:disabled) {
    box-shadow: ${props => props.theme.focus.shadow};
  }
  
  &:hover:not(:disabled) {
    cursor: pointer;
    color: ${props => props.theme.hover.color};
    background-color: ${props => darken(props.theme.hover.background, -5)};
    border-color: ${props => darken(props.theme.hover.border, -5)};
  }

  &:active {
    background-color: ${props => darken(props.theme.active.background, -15)};
    border-color: ${props => darken(props.theme.active.border, -15)};
  }

  ${props =>
    props.size === "small" &&
    css`
      border-width: 1px;
      font-size: 14px;
      padding: 7px;
      width: 192px;
      margin: 15px 0;
    `}
  
  ${props =>
    props.size === "medium" &&
    css`
      border-width: 2px;
      font-size: 14px;
      text-transform: uppercase;
      line-height: 36px;
      width: 192px;
      margin: 15px 0;
      font-weight: 500;
      min-height: 40px;
    `}
  
  ${props =>
    props.size === "big" &&
    css`
      border-width: 2px;
      font-size: 17px;
      font-weight: 500;
      padding: 14px 21px;
      margin: 15px 0;
      text-transform: uppercase;
      line-height: 17px;
      height: 48px;
    `};
  
  ${props =>
    props.disabled &&
    css`
      color: ${mainTheme.color.white};
      background: ${mainTheme.color.lighterCoal};
      border-color: ${mainTheme.color.lighterCoal};
      cursor: default;

      &:hover {
        color: ${mainTheme.color.white};
        background: ${mainTheme.color.lighterCoal};
        border-color: ${mainTheme.color.lighterCoal};
      }

      &:active {
        background: ${mainTheme.color.lighterCoal};
        border-color: ${mainTheme.color.lighterCoal};
      }
    `}
`;
