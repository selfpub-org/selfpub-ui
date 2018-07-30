import styled from "styled-components";
import { THEME_MAIN } from "../ui-styles";

export const StyledButton = styled.button`
  background: 0;
  border: 0;
  text-align: center;
  appearance: none;
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s,
    color 0.2s;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  user-select: none;
  border: 2px solid ${THEME_MAIN.color.lightCoal};
  color: ${THEME_MAIN.color.coal};

  &:focus {
    box-shadow: 0 2px 11px 0 rgba(255, 76, 0, 0.43);
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    color: #fff;
    background: ${THEME_MAIN.color.coal};
    border-color: ${THEME_MAIN.color.coal};
  }

  &:active {
    background: darken($coal, 5%);
  }

  &:focus {
    box-shadow: 0 2px 11px 0 rgba(154, 154, 154, 0.65);
  }

  ${props =>
    props.size === "small" &&
    `
      border: 1px solid;
      font-size: 14px;
      padding: 7px;
      width: 192px;
      margin: 15px 0;
   `} ${props =>
  props.size === "medium" &&
  `
    border: 2px solid;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 36px;
    width: 192px;
    margin: 15px 0;
    font-weight: 500;
    min-height: 40px;
  `}
  ${props =>
    props.size === "big" &&
    `
    padding: 14px 21px;
    text-transform: uppercase;
    margin: 15px 0;
    font-size: 17px;
    font-weight: 500;
    line-height: 17px;
    height: 48px;
    border: 2px solid;
  `};
  
  ${props =>
    props.theme === "primary" &&
    `
      background: ${THEME_MAIN.color.orange};
      border-color: ${THEME_MAIN.color.orange};
      color: ${THEME_MAIN.color.white};
    
      &:hover {
        background: ${THEME_MAIN.color.coal};
        border-color: ${THEME_MAIN.color.coal};
      }
    
      &:active {
        background: darken(${THEME_MAIN.color.coal}, 5%);
        border-color: darken(${THEME_MAIN.color.coal}, 5%);
      }
  `}
  
   ${props =>
     props.theme === "success" &&
     `
        background: ${THEME_MAIN.color.green};
        border-color: ${THEME_MAIN.color.green};
        color: #fff;
      
        &:hover {
          background: darken(${THEME_MAIN.color.green}, 5%);
          border-color: darken(${THEME_MAIN.color.green}, 5%);
          color: ${THEME_MAIN.color.white};
        }
      
        &:active {
          background: darken(${THEME_MAIN.color.green}, 15%);
          border-color: darken(${THEME_MAIN.color.green}, 15%);
        }
      
        &:focus {
          box-shadow: 0 2px 11px 0 rgba(29, 181, 29, .65);
        }
    `}
    ${props =>
      props.theme === "disabled" &&
      `
        color: ${THEME_MAIN.color.white};
        background: ${THEME_MAIN.color.lighterCoal};
        border-color: ${THEME_MAIN.color.lighterCoal};
        cursor: default;
    `}
`;
