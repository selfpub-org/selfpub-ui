import styled, { css } from "styled-components";
import { mainTheme } from "../../components/ui-styles";
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
    background: "transparent",
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
  margin: 15px 0;
  //themes
  color: ${props => props.theme.button.variations[props.variation].color};
  border-color: ${props =>
    props.theme.button.variations[props.variation].border};
  background-color: ${props =>
    props.theme.button.variations[props.variation].background};
  // base not modified
  outline: 0;
  appearance: none;
  border-radius: 0;
  user-select: none;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s,
    color 0.2s;

  &:focus:not(:disabled) {
    box-shadow: ${props =>
      props.theme.button.variations[props.variation].focus.shadow};
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    color: ${props =>
      props.theme.button.variations[props.variation].hover.color};
    background-color: ${props =>
      darken(
        props.theme.button.variations[props.variation].hover.background,
        -5,
      )};
    border-color: ${props =>
      darken(props.theme.button.variations[props.variation].hover.border, -5)};
  }

  &:active {
    background-color: ${props =>
      darken(
        props.theme.button.variations[props.variation].active.background,
        -15,
      )};
    border-color: ${props =>
      darken(
        props.theme.button.variations[props.variation].active.border,
        -15,
      )};
  }

  font-size: ${props => props.theme.button.sizes[props.size].fontSize}px;
  font-weight: ${props => props.theme.button.sizes[props.size].fontWeight};
  border-width: ${props => props.theme.button.sizes[props.size].borderWidth}px;
  padding: ${props => props.theme.button.sizes[props.size].padding};
  text-transform: ${props =>
    props.theme.button.sizes[props.size].textTransform};
  min-width: ${props => props.theme.button.sizes[props.size].minWidth};
  line-height: ${props => props.theme.button.sizes[props.size].lineHeight};
  height: ${props => props.theme.button.sizes[props.size].height};

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
    `};
`;
