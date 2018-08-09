import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Typography extends PureComponent {
  render() {
    const { tagName, children, ...rest } = this.props;
    const TagName = tagName;

    return <TagName {...rest}>{children}</TagName>;
  }
}

Typography.propTypes = {
  /** */
  tagName: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "text",
    "quote",
    "epigraph",
    "source",
    "timestamp",
    "description",
    "galleryDescription",
    "photoSource",
    "list",
  ]),
  /** */
  children: PropTypes.node,
  /** */
  uppercase: PropTypes.bool,
};

Typography.defaultProps = {
  tagName: "div",
};
