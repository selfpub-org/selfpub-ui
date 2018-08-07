import React, { PureComponent } from "react";
import styled from "styled-components";
import { mainTheme } from "../../components/ui-styles";
import { lighten } from "../../utils/styled";

const StyledBaseTabelItem = styled.div`
  padding: 10px 20px;
  color: ${mainTheme.color.coal};
  font: 20px/1em;
  text-align: left;
`;

export class Table extends PureComponent {
  render() {
    const { children } = this.props;

    const StyledTable = styled.div`
      color: ${mainTheme.color.coal};
    `;

    return <StyledTable>{children}</StyledTable>;
  }
}

export class Tr extends PureComponent {
  render() {
    const { children, isHeader, onClick } = this.props;

    const StyledTr = styled.div`
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: 500;
      transition: 0.2s;
      opacity: 1;
      min-height: 80px;
      white-space: nowrap;
      padding: 0 10px;

      &:nth-child(odd) {
        background: ${lighten(mainTheme.color.strongLighterCoal, 20)};
      }

      :first-child {
        background: ${mainTheme.color.beige};
        font-weight: 400;
      }
    `;

    return <StyledTr onClick={onClick}>{children}</StyledTr>;
  }
}

export class Td extends PureComponent {
  render() {
    const { children, onClick, style } = this.props;

    const StyledTd = styled.div`
      display: flex;
      align-items: center;
      width: 18%;
      white-space: nowrap;
      padding: 0 10px;
    `;

    return (
        <StyledTd onClick={onClick} style={style}>
        {children}
      </StyledTd>
    );
  }
}
