import React, { PureComponent } from "react";
import { StyledLoader } from "./loader.styled";

export default class Loader extends PureComponent {
  render() {
    const { size, alt } = this.props;

    return <StyledLoader alt={alt} size={size} />;
  }
}
