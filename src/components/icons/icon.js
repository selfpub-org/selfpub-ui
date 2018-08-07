import React, { PureComponent } from "react";
import { Loader } from "../index";
import { Size } from "../../components/theme/base/constant";
import { StyledIcon } from "./icon.styled";
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

    const TagName = StyledIcon[glyph];

    return loading ? (
      <Loader size={size} />
    ) : (
      <TagName style={style} {...restProps} />
    );
  }
}

Icon.Color = {
  DEFAULT: "",
};

Icon.Size = Size;

Icon.propTypes = {
  color: PropTypes.string,
  glyph: PropTypes.oneOf([
    "arrow-bottom",
    "pencil",
    "delete",
    "download",
    "question",
    "question-invert",
    "radio",
    "bookmark",
    "triangle-bottom",
    "success",
    "error",
    "triangle-top",
    "arrow-up",
    "digital-book",
    "analog-book",
    "cross",
    "checkbox",
    "link",
    "download",
  ]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
};

Icon.defaultProps = {
  color: Icon.Color.DEFAULT,
  glyph: "question",
  height: Size.Size32,
  width: Size.Size32,
  loading: false,
  size: Size.Size32,
};
