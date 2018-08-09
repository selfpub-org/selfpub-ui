import styled, { css } from "styled-components";
import svgSprite from "../../assets/icon-sprite.svg";

const mixinCheckboxPseudo = css`
  box-sizing: border-box;
  position: absolute;
  display: block;
  content: "";
  top: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const mixinCheckboxInput = styled.span`
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

export const StyledCheckboxInput = styled.div``;

export const StyledFakeCheckbox = styled.div``;

export const StyledInput = styled.input``;

export const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  display: inline-block;
  user-select: none;

  ${StyledCheckboxInput} {
    ${mixinCheckboxInput};
  }

  ${StyledInput} {
    ${mixinCheckboxInput};
  }

  ${StyledFakeCheckbox} {
    font-size: ${props => props.theme.checkbox.fontSize}px;
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
    margin: 0 5px;
    width: ${props => props.theme.checkbox.size}px;
    height: ${props => props.theme.checkbox.size}px;
    background: url(${svgSprite}) 119px -37px;

    ${props =>
      props.disabled &&
      css`
        cursor: default;
        background: ${props =>
          props.theme.checkbox.variations[props.variation].disabled.background};
        border: 1px solid
          ${props =>
            props.theme.checkbox.variations[props.variation].disabled.border};
      `} ${props =>
      props.checked &&
      css`
        color: ${props =>
          props.theme.checkbox.variations[props.variation].active.accent};
        font-size: ${props => props.size}px;

        &:before {
          ${mixinCheckboxPseudo};

          background: ${props =>
            props.theme.checkbox.variations[props.variation].active.background};
          border: 1px solid
            ${props =>
              props.theme.checkbox.variations[props.variation].active.border};

          ${props =>
            props.disabled &&
            css`
              background: ${props =>
                props.theme.checkbox.variations[props.variation].disabled
                  .background};
            `};
        }

        &:after {
          ${mixinCheckboxPseudo};
          background: url(${svgSprite}) 119px -63px;

          ${props =>
            props.disabled &&
            css`
              background: url(${svgSprite}) 37px 1px;
              border: 1px solid
                ${props =>
                  props.theme.checkbox.variations[props.variation].disabled
                    .border};
            `};
        }
      `};
  }
`;
