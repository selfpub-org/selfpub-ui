import React, { PureComponent } from "react";
import { StyledLabel } from "./input.styled";

export default class LabelWrapper extends PureComponent {
  render() {
    const { id, children, rest, labelText } = this.props;
    const elemId = id || labelText;
    return (
      <React.Fragment>
        <StyledLabel htmlFor={elemId} {...rest}>
          {this.props.labelText}
          {children}
        </StyledLabel>
      </React.Fragment>
    );
  }
}
