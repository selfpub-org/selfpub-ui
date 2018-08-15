import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link, Icon } from "../index";
import { StyledButton } from "./button.styled.js";

const LinkButton = StyledButton.withComponent("a");
const StylesButton = StyledButton.withComponent("button");

export default class Button extends PureComponent {
  constructor() {
    super();
    this.onMouseOver = ::this.onMouseOver;
    this.onMouseOut = ::this.onMouseOut;
    this.onTouchStart = ::this.onTouchStart;
    this.onTouchEnd = ::this.onTouchEnd;
    this.state = {
      isHovered: false,
    };
  }

  onMouseOver() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }

  onTouchStart() {
    this.setState({ isHovered: true });
  }

  onTouchEnd() {
    this.setState({ isHovered: false });
  }

  render() {
    const {
      children,
      htmlType,
      icon,
      iconSize,
      loading,
      onClick,
      type,
      ...rest
    } = this.props;

    const iconNode = !!icon ? (
      <Icon glyph={icon} hovered={this.state.isHovered} size={iconSize} />
    ) : null;
    const loaderSize = iconSize ? iconSize : "small";

    const content = (
      <React.Fragment>
        {iconNode}
        {children && <span>{children}</span>}
        {loading && <Icon type="loader" size={loaderSize} loading={loading} />}
      </React.Fragment>
    );

    if (!!rest.href && type === "link") {
      return (
        <LinkButton {...rest} onClick={this.handleClick}>
          {content}
        </LinkButton>
      );
    } else {
      return (
        <StylesButton
          onClick={onClick}
          tabIndex={loading ? -1 : 0}
          htmlType={htmlType || "button"}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          {...rest}
        >
          {content}
        </StylesButton>
      );
    }
  }
}

Button.Themes = [
  "default",
  "primary",
  "white",
  "light",
  "danger",
  "lighter",
  "primary-light",
  "success",
  "black",
];

Button.Sizes = ["big", "medium", "small"];

Button.propTypes = {
  /** children - label or content for button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /** disabled state of button */
  disabled: PropTypes.bool,
  /** redirect url of link button */
  href: PropTypes.string,
  /** set the original html type of button, see: MDN */
  htmlType: PropTypes.string,
  /** element type for button */
  type: PropTypes.oneOf(["button", "link"]),
  /** set the target of link, see: */
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
  /** themes of button */
  variation: PropTypes.oneOf(Button.Themes),
  /** set the icon of button, see: Icon component */
  icon: PropTypes.string,
  /** set the icon size, see: Icon component */
  iconSize: PropTypes.oneOf(["small", "big"]),
  /** set the loading status of button */
  loading: PropTypes.bool,
  /** size type for button */
  size: PropTypes.oneOf(Button.Sizes),
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  href: null,
  htmlType: null,
  icon: null,
  iconSize: "small",
  size: "small",
  target: "_self",
  variation: "default",
  type: "button",
};
