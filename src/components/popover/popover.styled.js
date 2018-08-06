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

export const StyledPopoverHeader = styled.div``;

export const StyledPopoverContent = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  display: none;
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
`;
export const StyledPopoverContentFixer = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  top: -20px;
  left: 0;
`;

export const StyledPopoverWrapper = styled.div`
  position: relative;
  display: inline-flex;
  cursor: auto;

  &:hover {
    ${StyledPopoverContent} {
      z-index: 10;
      opacity: 1;
      visibility: visible;
      display: block;
      transform: translate(-50%, 21px);
      transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
    }
  }
`;
