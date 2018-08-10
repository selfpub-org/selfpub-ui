import React, { PureComponent } from "react";
import { Loader } from "../index";
import { Size } from "../../components/theme/base/constant";
import { getStyledIcon } from "./icon.styled";
import PropTypes from "prop-types";

export default class Icon extends PureComponent {
  render() {
    const { size, loading = true, glyph, ...restProps } = this.props;
    const TagName = getStyledIcon(glyph, size);

    return loading ? (
      <Loader size={size === "small" ? "18" : "26"} />
    ) : (
      <TagName {...restProps} />
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
    "radio-checked",
    "bookmark",
    "triangle-bottom",
    "success",
    "error",
    "triangle-top",
    "arrow-up",
    "digital-book",
    "analog-book",
    "cross",
    "cross-red",
    "checkbox",
    "checkbox-checked",
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
  size: "small",
};
