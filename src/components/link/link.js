import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./link.styled";

export default class Link extends PureComponent {
  render() {
    const { children, onClick, href, ...rest } = this.props;

    return (
      <StyledLink {...rest} href={href} onClick={onClick}>
        {children}
      </StyledLink>
    );
  }
}

Link.Variations = ["default", "coal", "blue", "white", "grey"];

Link.Types = ["default", "underline", "pseudo", "small"];

Link.Targets = ["_blank", "_parent", "_self", "_top"];

Link.propTypes = {
  /** redirect url of link button */
  href: PropTypes.string.isRequired,
  /** handler for click behavior */
  onClick: PropTypes.func,
  /** themes of link */
  variation: PropTypes.oneOf(["default", "coal", "blue", "white", "grey"]),
  /** type of link */
  type: PropTypes.string,
  /** native html popup text  */
  title: PropTypes.string,
  /** type of size inherit or small */
  size: PropTypes.oneOf(["inherit", "small"]),
  /** link HTMLTarget */
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
};

Link.defaultProps = {
  onClick: () => {},
  variation: "default",
  type: "default",
  size: "inherit",
  title: "",
  target: "_self",
};
