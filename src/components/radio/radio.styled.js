import React from "react";
import { PureComponent } from "react";
import styled, { css } from "styled-components";
import { iconsSprite } from "../../assets/icons-string";

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

export default class StyledRadio extends PureComponent {
  static Label = styled.label`
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
  `;

  static Input = styled.input`
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

  static FakeRadio = styled.span`
    font-size: ${props => props.theme.radio.fontSize}px;
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
    width: ${props => props.theme.radio.size}px;
    height: ${props => props.theme.radio.size}px;
    background-image: url(${iconsSprite});
    background-position: 118px 0;
    background-size: 260px;

    ${props =>
      props.disabled &&
      css`
        cursor: default;
        background: ${props => props.theme.radio.disabled.background};
        border: 1px solid ${props => props.theme.radio.disabled.border};
      `}
    
    // ewgw
    ${props =>
      props.checked &&
      css`
        color: ${props => props.theme.radio.active.accent};
        font-size: ${props => props.size}px;
        background-position: 118px -24px;
      `};
  `;
}
