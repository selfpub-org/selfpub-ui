import styled, { keyframes } from "styled-components";
import { THEME_MAIN } from "../ui-styles/index";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const size = "15px";

export default styled.span`
  border: 2px solid ${THEME_MAIN.color.loaderWhite};
  border-top: 2px solid ${THEME_MAIN.color.orange};
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  width: ${size};
  height: ${size};
  margin-left: 5px;
  animation: ${spin} 1s linear infinite;
`;
