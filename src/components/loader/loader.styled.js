import styled, { keyframes } from "styled-components";
import { mainTheme } from "../ui-styles";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.span`
  border: 2px solid ${mainTheme.color.loaderWhite};
  border-top: 2px solid ${mainTheme.color.orange};
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 5px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${spin} 1s linear infinite;
`;
