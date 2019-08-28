import styled, { css } from "styled-components";
import { mainTheme } from "../ui-styles/index";

const popoverContentPseudoMixin = css`
  position: absolute;
  z-index: -1;
  content: "";
  right: calc(50% - 10px);
  top: -10px;
  border-style: solid;
  transition-duration: 0.2s;
  transition-property: transform;
`;

export const Header = styled.div``;
export const Content = styled.div``;
export const ContentFixer = styled.div``;
export const IconPopover = styled.div``;

export const PopoverWrapper = styled.div`
  min-height: 20px;
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  cursor: pointer;
  border: transparent;

  ${Header} {
    display: inline-block;
    vertical-align: bottom;
    line-height: 1.2;
    user-select: none;
  }

  ${Content} {
    position: absolute;
    display: block;
    width: 248px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30px);
    background-color: ${mainTheme.color.white};
    padding: 16px;
    text-align: left;
    font-size: 14px;
    line-height: 21px;
    text-transform: none;
    color: ${mainTheme.color.coal};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: default;
    white-space: normal;
    transition: all 0.2s;
    z-index: 10;
    opacity: 0;
    visibility: hidden;

    ${props =>
      props.open &&
      css`
        opacity: 1;
        visibility: visible;
      `};

    ${ContentFixer} {
      position: relative;
      display: inline-flex;
      cursor: auto;
      opacity: 0;
      transition: all 0.2s;
    }

    &:before {
      ${popoverContentPseudoMixin};
      border-width: 0 11px 11px 11px;
      border-color: transparent transparent rgba(59, 57, 63, 0.1) transparent;
      top: -11px;
      right: calc(50% - 11px);
    }

    &:after {
      ${popoverContentPseudoMixin};
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #fff transparent;
    }
  }

  ${IconPopover} {
    height: 100%;
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-end;

    ${props => {
      if (props.position === "left") {
        return css`
          padding-right: 4px;
        `;
      } else if (props.position === "right") {
        return css`
          padding-left: 4px;
        `;
      }

      return css`
        padding-right: 4px;
        padding-left: 4px;
      `;
    }};
  }
`;
