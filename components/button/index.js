import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import ClickableLink from "../link/clickable-link";

import { StyledButton, themesMap } from "./button.styled.js";
import Icon from "../icons";

export const buttonThemes = [
  "default",
  "primary",
  "white",
  "light",
  "default-disabled",
  "danger",
  "lighter",
  "primary-light",
  "success",
  "black",
  "to-right",
  "null",
];

export default class Button extends PureComponent {
  render() {
    const { children, theme, icon, iconSize, onClick, ...props } = this.props;
    const isLink = !!props.href;
    const ButtonTag = isLink
      ? StyledButton.withComponent(ClickableLink)
      : StyledButton;

    const content = (
      <React.Fragment>
        {children && <span>{children}</span>}
        {props.loading && (
          <Icon size={Icon.Size.Size14} loading={props.loading} />
        )}
      </React.Fragment>
    );

    return (
      <ThemeProvider theme={themesMap[theme] || themesMap["default"]}>
        <ButtonTag
          tabIndex={props.loader ? -1 : 0}
          {...props}
          onClick={onClick}
        >
          {content}
        </ButtonTag>
      </ThemeProvider>
    );
  }
}

Button.propTypes = {
  // tagName: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
  children: PropTypes.any.isRequired,
  theme: PropTypes.oneOf(buttonThemes),
  size: PropTypes.oneOf(["big", "medium", "small", "null"]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  size: "small",
  target: "_self",
  theme: "default",
  loading: false,
};
