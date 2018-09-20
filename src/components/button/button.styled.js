import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles/index";
import { darken } from "../../utils/styled";

export const StyledButton = styled.div`
  // size and aligning
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-style: solid;

  // base not modified
  outline: 0;
  appearance: none;
  border-radius: 0;
  user-select: none;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s,
    color 0.2s;

  // themes (variation)
  color: ${props => props.theme.button.variations[props.variation].color};
  border-color: ${props =>
    props.theme.button.variations[props.variation].border};
  background-color: ${props =>
    props.theme.button.variations[props.variation].background};
  font-size: ${props => props.theme.button.sizes[props.size].fontSize}px;
  font-weight: ${props => props.theme.button.sizes[props.size].fontWeight};
  border-width: ${props => props.theme.button.sizes[props.size].borderWidth}px;
  text-transform: ${props =>
    props.theme.button.sizes[props.size].textTransform};
  min-width: ${props => props.theme.button.sizes[props.size].minWidth};
  line-height: ${props => props.theme.button.sizes[props.size].lineHeight};
  height: ${props => props.theme.button.sizes[props.size].height};
  margin: 15px 0;
  padding: ${props => props.theme.button.sizes[props.size].padding};
  height: ${props => props.theme.button.sizes[props.size].height};
  border-color: ${props =>
    props.theme.button.variations[props.variation].border};

  ${props =>
    props.isIconButton &&
    css`
      padding: 0;
      margin: 0;
      border-radius: 50%;
      border: 0;
      height: 100%;
    `};

  ${props => props.stretched && "width: 100%;"};

  &:disabled {
    color: ${mainTheme.color.white};
    background: ${mainTheme.color.lighterCoal};
    border-color: ${mainTheme.color.lighterCoal};
    cursor: default;
  }

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

  &:active:not(:disabled) {
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
    box-shadow: ${props =>
      props.theme.button.variations[props.variation].active.shadow};
  }

  ${props =>
    props.disabled &&
    css`
      color: ${mainTheme.color.white};
      background: ${mainTheme.color.lighterCoal};
      border-color: ${mainTheme.color.lighterCoal};
      cursor: default;
    `};
`;

export const ContentWrapper = styled.span`
  padding-right: 5px;
  padding-left: 5px;
`;
