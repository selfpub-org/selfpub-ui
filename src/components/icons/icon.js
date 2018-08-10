import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { getStyledIcon } from "./icon.styled";
import { Loader } from "../index";

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

Icon.Glyps = [
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
];

Icon.propTypes = {
  /** Types of glyphs see: https://github.com/mybook/selfpub-ui/blob/master/src/components/icons/icon.js */
  glyph: PropTypes.oneOf(Icon.Glyps),
  /** Size of icon */
  size: PropTypes.oneOf(["small", "big"]),
  /** show loader use icon size */
  loading: PropTypes.bool,
};

Icon.defaultProps = {
  glyph: "question",
  size: "small",
  loading: false,
};
