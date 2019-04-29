import React, { PureComponent } from "react";

import { StyledLoader } from "./loader.styled";

export default class Loader extends PureComponent {
  static defaultProps = {
    className: "",
    size: "14",
    alt: "Loader",
  };

  render() {
    const { className, size, alt } = this.props;

    return <StyledLoader className={className} alt={alt} size={size} />;
  }
}
