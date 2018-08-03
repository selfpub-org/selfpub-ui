import React, { PureComponent } from "react";
import { Loader } from "../index";
import { Color, Size } from "./icon-constant";
import PropTypes from "prop-types";

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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
};

Icon.defaultProps = {
  color: Color.DEFAULT,
  glyph: "",
  height: Size.Size32,
  width: Size.Size32,
  loading: false,
  size: Size.Size32,
};
