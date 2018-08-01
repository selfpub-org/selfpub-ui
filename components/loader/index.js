import styled, { keyframes } from "styled-components";
import { THEME_MAIN } from "../ui-styles/index";
import { PureComponent } from "react";
import React from "react";

export default class Loader extends PureComponent {
  render() {
    const { size, alt } = this.props;

    const spin = keyframes`
      from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
    `;

    const Loader = styled.span`
      border: 2px solid ${THEME_MAIN.color.loaderWhite};
      border-top: 2px solid ${THEME_MAIN.color.orange};
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      margin-left: 5px;
      animation: ${spin} 1s linear infinite;
    `;

    return <Loader alt={alt} />;
  }
}
