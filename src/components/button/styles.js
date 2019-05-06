import styled, { css } from "styled-components";
import OwnIcon from "../icon";
import LoaderOwned from "../loader";

export const Loader = styled(LoaderOwned)`
  margin: 3px;
`;

export const Container = styled.button`
  ${({
    theme: { base, passive, hover, active, focus, disabled },
    justIcon,
    justTitle,
    stretched,
    loading,
    fitOnAction,
  }) => {
    return css`
      appearance: none;
      box-sizing: border-box;
      text-decoration: none;
      display: inline-block;
      width: auto;
      margin: 6px;
      flex-shrink: 0;
      position: relative;
      padding: ${justIcon
        ? "6px 6px"
        : `6px ${fitOnAction ? 6 : justTitle ? 14 : 6}px`};

      border-style: solid;
      border-width: ${passive.borderWidth}px;
      border-color: ${passive.borderColor};
      outline: none;
      background: ${passive.background};
      user-select: none;
      cursor: pointer;
      box-shadow: ${passive.shadow};
      ${stretched &&
        css`
          width: 100%;
          margin: 6px 0;
        `};
      transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s,
        color 0.2s;

      // base
      font-family: ${base.fontFamily};
      letter-spacing: ${base.letterSpacing};
      font-size: ${base.fontSize}px;
      font-weight: ${base.fontWeight};
      text-transform: ${base.textTransform};
      border-radius: ${base.borderRadius};

      :hover:not(:disabled):not([aria-disabled="true"]) {
        background: ${hover.background};
        border-width: ${hover.borderWidth}px;
        border-color: ${hover.borderColor};
      }

      :active:not(:disabled):not([aria-disabled="true"]) {
        background: ${active.background};
        border-width: ${active.borderWidth}px;
        border-color: ${active.borderColor};
      }

      :focus:not(:disabled):not([aria-disabled="true"]) {
        box-shadow: ${focus.shadow};
        border-width: ${active.borderWidth}px;
        border-color: ${active.borderColor};
      }

      :disabled,
      &[aria-disabled="true"] {
        text-decoration: none;
        background: ${disabled.background};
        border-width: ${disabled.borderWidth}px;
        border-color: ${disabled.borderColor};
        box-shadow: none;
        cursor: ${loading ? "wait" : "not-allowed"};
      }

      ${fitOnAction &&
        css`
          ${Title} {
            padding: 0;
          }
        `};
    `;
  }};
`;

export const Icon = styled(OwnIcon)`
  ${({ theme: { passive, hover, active, disabled } }) => css`
    fill: ${passive.color};

    ${Container}:hover & {
      fill: ${hover.color};
    }

    ${Container}:active & {
      fill: ${active.color};
    }

    ${Container}:disabled &,
    ${Container}[aria-disabled="true"] & {
      fill: ${disabled.color};
    }
  `};
`;

export const Title = styled.span`
  ${({ theme: { base, passive, hover, active, disabled } }) => css`
    display: block;
    padding: 0 4px;
    line-height: 24px;
    color: ${passive.color};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    // base
    font-family: ${base.fontFamily};
    font-size: ${base.fontSize};
    letter-spacing: ${base.letterSpacing};
    font-weight: ${base.fontWeight};
    text-transform: ${base.textTransform};
    border-radius: ${base.borderRadius};

    ${Container}:hover & {
      color: ${hover.color};
    }

    ${Container}:active & {
      color: ${active.color};
    }

    ${Container}:disabled &,
    ${Container}[aria-disabled="true"] & {
      color: ${disabled.color};
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ reverse, justTitle }) => css`
    display: flex;
    align-items: center;
    flex-direction: ${reverse ? "row-reverse" : "row"};
    width: 100%;
    height: 100%;
    justify-content: ${justTitle ? "center" : "space-between"};
  `};
`;
