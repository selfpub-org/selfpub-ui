import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Color, Size } from "./icon-constant";
import Loader from "../loader";

export default class Icon extends PureComponent {
  render() {
    const {
      size,
      color,
      loading = true,
      glyph,
      width,
      height,
      ...restProps
    } = this.props;

    const style =
      width || height
        ? { width, height, color }
        : {
            width: size,
            height: size,
            color,
          };

    return (
      <React.Fragment>
        {loading ? (
          <Loader size={size} />
        ) : (
          <span {...restProps}>
            <img src={glyph} style={style} alt="altText" />
          </span>
        )}
      </React.Fragment>
    );
  }
}

Icon.Color = Color;

Icon.Size = Size;

Icon.propTypes = {
  color: PropTypes.string,
  glyph: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  height: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
  loading: PropTypes.bool,
};

Icon.defaultProps = {
  color: Color.DEFAULT,
  glyph: "",
  size: Size.Size32,
};
