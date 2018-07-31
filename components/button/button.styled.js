import styled, { css } from "styled-components";
import { THEME_MAIN } from "../ui-styles";
import { darken } from "../../tools/styled";

export const themesMap = {
  ["default"]: {
    color: THEME_MAIN.color.coal,
    border: THEME_MAIN.color.lightCoal,
    background: 0,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.lightCoal,
      background: THEME_MAIN.color.coal,
    },
    active: {
      background: THEME_MAIN.color.coal,
      border: THEME_MAIN.color.coal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["primary"]: {
    color: THEME_MAIN.color.white,
    border: THEME_MAIN.color.orange,
    background: THEME_MAIN.color.orange,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.coal,
    },
    active: {
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.coal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["success"]: {
    color: THEME_MAIN.color.white,
    border: THEME_MAIN.color.green,
    background: THEME_MAIN.color.green,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.green,
      background: THEME_MAIN.color.green,
    },
    active: {
      border: THEME_MAIN.color.green,
      background: THEME_MAIN.color.green,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(29, 181, 29, 0.65)`,
    },
  },
  ["light"]: {
    color: THEME_MAIN.color.coal,
    border: THEME_MAIN.color.strongLighterCoal,
    background: THEME_MAIN.color.white,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.lighterCoal,
      background: THEME_MAIN.color.lighterCoal,
    },
    active: {
      border: THEME_MAIN.color.lighterCoal,
      background: THEME_MAIN.color.lighterCoal,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["lighter"]: {
    color: THEME_MAIN.color.coal,
    border: THEME_MAIN.color.lighterCoal,
    background: THEME_MAIN.color.white,
    hover: {
      color: THEME_MAIN.color.coal,
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.white,
    },
    active: {
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.white,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["white"]: {
    color: THEME_MAIN.color.white,
    border: THEME_MAIN.color.white,
    background: THEME_MAIN.color.white,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.coal,
    },
    active: {
      border: THEME_MAIN.color.coal,
      background: THEME_MAIN.color.white,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["danger"]: {
    color: THEME_MAIN.color.red,
    border: THEME_MAIN.color.red,
    background: THEME_MAIN.color.white,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.red,
      background: THEME_MAIN.color.red,
    },
    active: {
      border: THEME_MAIN.color.red,
      background: THEME_MAIN.color.red,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(197, 50, 50, 0.65)`,
    },
  },
  ["black"]: {
    color: THEME_MAIN.color.white,
    border: THEME_MAIN.color.coal,
    background: THEME_MAIN.color.coal,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.orange,
      background: THEME_MAIN.color.orange,
    },
    active: {
      border: THEME_MAIN.color.orange,
      background: THEME_MAIN.color.orange,
    },
    focus: {
      shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
    },
  },
  ["primary-light"]: {
    color: THEME_MAIN.color.orange,
    border: THEME_MAIN.color.orange,
    background: THEME_MAIN.color.white,
    hover: {
      color: THEME_MAIN.color.white,
      border: THEME_MAIN.color.orange,
      background: THEME_MAIN.color.orange,
    },
    active: {
      border: THEME_MAIN.color.orange,
      background: THEME_MAIN.color.orange,
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
      color: ${THEME_MAIN.color.white};
      background: ${THEME_MAIN.color.lighterCoal};
      border-color: ${THEME_MAIN.color.lighterCoal};
      cursor: default;

      &:hover {
        color: ${THEME_MAIN.color.white};
        background: ${THEME_MAIN.color.lighterCoal};
        border-color: ${THEME_MAIN.color.lighterCoal};
      }

      &:active {
        background: ${THEME_MAIN.color.lighterCoal};
        border-color: ${THEME_MAIN.color.lighterCoal};
      }
    `}
`;
