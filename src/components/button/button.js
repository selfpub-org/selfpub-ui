import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Icon, Loader } from "../index";
import { ContentWrapper } from "./button.styled";
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

    // Temporary workaround
    const isIconButton = icon && !children;
    const hovered = isIconButton ? false : this.state.isHovered;

    const iconNode = !!icon ? (
      <Icon glyph={icon} hovered={hovered} size={iconSize} />
    ) : null;

    const content = (
      <React.Fragment>
        {((isIconButton && !loading) || !isIconButton) && iconNode}
        {children && <ContentWrapper>{children}</ContentWrapper>}
        {loading && <Loader />}
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
          isIconButton={isIconButton}
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
  "beige",
];

Button.Sizes = ["big", "medium", "small"];

Button.propTypes = {
  /** children - label or content for button */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
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
  /** flag for disabled stretched */
  stretched: PropTypes.bool,
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
  stretched: true,
};
