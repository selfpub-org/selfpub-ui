import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  display: inline;
  outline: 0;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  width: fit-content;
  font-size: ${props => props.theme.link.sizes[props.size].fontSize};
  color: ${props => props.theme.link.variations[props.variation].color};
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.theme.link.variations[props.variation].border};

  :hover {
    border-color: ${props =>
      props.theme.link.variations[props.variation].hover.border};
    color: ${props => props.theme.link.variations[props.variation].hover.color};
  }

  ${props =>
    props.type === "underline" &&
    css`
      border-style: solid;
    `};

  ${props =>
    props.type === "pseudo" &&
    css`
      border-style: dashed;
    `};

  ${props =>
    props.size === "small" &&
    css`
      font-style: italic;
      line-height: 15px;

      :hover {
        border-color: transparent;
      }
    `};
`;
