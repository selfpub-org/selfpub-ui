import React, { PureComponent } from "react";
import styled from "styled-components";
import rgba from "polished/lib/color/rgba";
import { Button } from "../index";
import colors from "./../theme/base/colors";
import Icon from "./../icons/icon";

export default class StyledInfoBox extends PureComponent {
  static Container = styled.div`
    display: flex;
    position: relative;
    border: ${props => props.theme.infoBox.borderWidth}px;
    border-style: ${props => props.theme.infoBox.borderType};
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 15px;

    background-color: ${props =>
      props.theme.infoBox.variations[props.variation].background};
    border-color: ${props =>
      props.theme.infoBox.variations[props.variation].border};

    @media (max-width: 767px) {
      flex-direction: column;
    }
  `;

  static Text = styled.div`
    width: 65%;
    min-height: 100%;
    padding: 26px 32px 32px;

    @media (max-width: 767px) {
      width: 100%;
    }
  `;

  static ActionButton = styled(Button)`
    margin-bottom: 0;

    @media (max-width: 767px) {
      margin: 0;
      max-width: 316px;
    }

    :not(:last-child) {
      margin: 0;
    }

    span {
      white-space: nowrap;
    }
  `;

  static Actions = styled.div`
    display: flex;
    position: relative;
    width: 30%;
    min-height: 100%;
    padding: 32px 32px 32px 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 767px) {
      width: 100%;
      padding: 0 32px 32px 32px;
      align-items: flex-start;
    }
  `;

  static Header = styled.div`
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 24px;
    margin-bottom: 10px;
    color: #3b393f;
  `;

  static Body = styled.div`
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 17px;
    letter-spacing: -0.0174px;

    color: #3b393f;
  `;

  static CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    cursor: pointer;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: ${rgba(colors.coal, 0.1)};
    }
  `;

  static Cross = styled(Icon)`
    padding: 5px;
  `;
}
