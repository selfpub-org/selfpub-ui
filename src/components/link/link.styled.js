import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  display: inline;
  outline: 0;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  border-width: 1px;
  width: fit-content;
  font-size: ${props => props.theme.link.sizes[props.size].fontSize};
  color: ${props => props.theme.link.variations[props.variation].color};

  :hover {
    border-color: ${props =>
      props.theme.link.variations[props.variation].hover.border};
    color: ${props => props.theme.link.variations[props.variation].hover.color};
  }

  ${props =>
    props.type === "underline" &&
    css`
      border-bottom: 1px solid
        ${props => props.theme.link.variations[props.variation].border};
    `};

  ${props =>
    props.type === "pseudo" &&
    css`
      border-bottom-style: dashed;
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
