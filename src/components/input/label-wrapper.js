import React, { PureComponent, Fragment } from "react";
import { Label } from "./input.styled";

export default class LabelWrapper extends PureComponent {
  render() {
    const { id, children, rest, labelText } = this.props;
    const elemId = id || labelText;
    return (
      <Fragment>
        <Label htmlFor={elemId} {...rest}>
          {this.props.labelText}
          {children}
        </Label>
      </Fragment>
    );
  }
}
