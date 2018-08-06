import { mainTheme } from "../ui-styles";
import styled, { css } from "styled-components";
import { lighten } from "../../utils/styled";

export const StyledContainer = styled.div`
  width: 1040px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1040px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 1040px) {
    max-width: 100%;
    max-width: 100vw;
  }
`;

export const StyledTab = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-size-adjust: none;
`;

export const StyledTabContent = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-size-adjust: none;
`;

export const StyledTabLabelWrapper = styled.ul`
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  display: flex;
  border-bottom: 1px solid ${mainTheme.color.lighterCoal};
  color: ${mainTheme.color.coal};
  margin-top: 20px;
`;

export const StyledTabLabel = styled.li`
  box-sizing: border-box;
  padding: 15px 25px;
  font-size: 17px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  margin-bottom: -1px;
  transition: 0.2s;
  user-select: none;
  color: ${mainTheme.color.coal};

  ${props =>
    !props.isActive
      ? css`
          &:hover {
            border-bottom-color: ${lighten(mainTheme.color.orange, 30)};
          }

          &:active {
            border-bottom-color: ${lighten(mainTheme.color.orange, 20)};
            color: ${lighten(mainTheme.color.coal, 40)};
          }
        `
      : css`
          cursor: default;
          color: ${mainTheme.color.orange};
          border-bottom-color: ${mainTheme.color.orange};
        `};
`;
