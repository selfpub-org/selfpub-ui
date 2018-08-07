import styled, { css } from "styled-components";
import { mainTheme } from "../../components/ui-styles";

export const themesMap = {
  ["default"]: {
    color: mainTheme.color.coal,
    border: `rgba(59,57,63,.5)`,
    hover: {
      color: mainTheme.color.orange,
      border: mainTheme.color.orange,
    },
  },
  ["blue"]: {
    color: mainTheme.color.blue,
    border: `rgba(16,110,220,.5)`,
    hover: {
      color: mainTheme.color.orange,
      border: mainTheme.color.orange,
    },
  },
  ["grey"]: {
    color: mainTheme.color.lighterCoal,
    border: `rgba(16,110,220,.5)`,
    hover: {
      color: mainTheme.color.orange,
      border: mainTheme.color.orange,
    },
  },
  ["white"]: {
    color: mainTheme.color.white,
    border: `rgba(255,255,255,.5)`,
    hover: {
      color: mainTheme.color.orange,
      border: mainTheme.color.orange,
    },
  },
};

export const StyledLink = styled.a`
  display: inline;
  outline: 0;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  border-width: 1px;
  width: fit-content;

  color: ${props => props.theme.color};

  :hover {
    border-color: ${props => props.theme.hover.border};
    color: ${props => props.theme.hover.color};
  }

  ${props =>
    props.type === "underline" &&
    css`
      border-bottom: 1px solid ${props => props.theme.border};
    `};

  ${props =>
    props.type === "pseudo" &&
    css`
      border-bottom-style: dashed;
    `};

  ${props =>
    props.type === "small" &&
    css`
      font-size: 14px;
      font-style: italic;
      line-height: 15px;

      :hover {
        border-color: transparent;
      }
    `};
`;
