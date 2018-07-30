import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./button.styled.js";
import ClickableLink from "../../components/link/clickable-link";

export default class Button extends PureComponent {
  render() {
    const {
      children,
      // theme,
      // size,
      onClick,
      // target,
      // externalClassName,
      ...props
    } = this.props;
    const isLink = !!props.href;
    // const Tag = isLink ? ClickableLink : "button"; // TODO: create ClickableLink

    return (
      <StyledButton
        // tabIndex={loader ? -1 : 0}
        // type={isLink ? null : 'button'}
        // target={target}
        {...props}
        onClick={onClick}
      >
        {/*{loader && !icon && <div className={styles.loaderBackground}/>}*/}
        {/*{content}*/}
        {children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  // tagName: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
  externalClassName: PropTypes.string,
  children: PropTypes.any.isRequired,
  theme: PropTypes.oneOf([
    "default",
    "primary",
    "white",
    "light",
    "disabled",
    "default-disabled",
    "danger",
    "lighter",
    "primary-light",
    "success",
    "black",
    "to-right",
  ]),
  size: PropTypes.oneOf(["big", "medium", "small"]).isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  target: "_self",
  theme: "default",
  externalClassName: "",
};
