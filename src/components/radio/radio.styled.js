import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

export const Label = styled.label`
  position: relative;
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

  ${props =>
    props.disabled &&
    css`
      cursor: default;
    `};
`;

export const Input = styled.input`
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

  ${props =>
    props.disabled &&
    css`
      cursor: default;
    `};
`;

export const FakeRadio = styled.span`
  z-index: 1;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: ${props => props.size || props.theme.radio.size}px;
  height: ${props => props.size || props.theme.radio.size}px;
  border: 2px solid ${props => props.theme.radio.base};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: auto 5px 2px;
  border-radius: 50%;
  flex: none;
  vertical-align: middle;
  transition-duration: 200ms;
  transition-property: border-color, background-color, color;

  ${props =>
    !props.disabled &&
    css`
      :hover {
        border: 2px solid ${props.theme.radio.hover.accent};
      }
    `};

  :after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 8px;
    height: 8px;
    margin: auto;
    content: "";
    opacity: 0;
    position: absolute;
    transform: scale(0.9, 0.9);
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 50%;
    transition-property: opacity, transform, background-color;
    transition-duration: inherit;
  }

  // checked
  ${props =>
    props.checked &&
    css`
      border: 2px solid ${props.theme.radio.accent};

      :after {
        opacity: 1;
        background-color: ${props.theme.radio.accent};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      border-color: ${props.theme.radio.disabled.border};
      background-color: ${props.theme.radio.disabled.background};

      :after {
        background-color: ${props.theme.radio.disabled.accent};
      }
    `};
`;

export const Text = styled.span`
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
`;
