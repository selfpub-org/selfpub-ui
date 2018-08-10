import React, { PureComponent } from "react";
import styled from "styled-components";
import { mainTheme } from "../ui-styles/index";

const StyledErrorField = styled.div`
  margin-top: 5px;
  color: ${mainTheme.color.red};
  font-size: 14px;
`;

export default class ErrorField extends PureComponent {
  render() {
    const { error, id } = this.props;

    return error ? <StyledErrorField id={id}>{error}</StyledErrorField> : null;
  }
}
