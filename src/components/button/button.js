import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link, Icon } from "../../components";
import { Size as IconSize } from "../../components/theme/base/constant";
import { StyledButton } from "./button.styled.js";
import { arrayFromHash } from "../../utils/utils";

export default class Button extends PureComponent {
  render() {
    const {
      children,
      htmlType,
      icon,
      iconSize,
      loading,
      onClick,
      ...rest
    } = this.props;

    const iconNode = !!icon ? <Icon type={icon} size={iconSize} /> : null;
    const loaderSize = iconSize ? iconSize : Icon.Size.Size12;

    const content = (
      <React.Fragment>
        {iconNode}
        {children && <span>{children}</span>}
        {loading && <Icon type="loader" size={loaderSize} loading={loading} />}
      </React.Fragment>
    );

    if ("href" in rest && !!rest.href) {
      return (
        <Link {...rest} onClick={this.handleClick}>
          {content}
        </Link>
      );
    } else {
      return (
        <StyledButton
          onClick={onClick}
          tabIndex={loading ? -1 : 0}
          type={htmlType || "button"}
          {...rest}
        >
          {content}
        </StyledButton>
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
  /** set the target of link, see: */
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
  /** themes of button */
  variation: PropTypes.oneOf(Button.Themes),
  /** set the icon of button, see: Icon component */
  icon: PropTypes.string,
  /** set the icon size, see: Icon component */
  iconSize: PropTypes.oneOf(arrayFromHash(IconSize)),
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
  iconSize: IconSize.Size12,
  size: "small",
  target: "_self",
  variation: "default",
};
