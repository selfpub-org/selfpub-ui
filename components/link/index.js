import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { themesMap, StyledLink } from "../link/link.styled";

export default class ClickableLink extends PureComponent {
  render() {
    const { children, onClick, theme, href, ...rest } = this.props;

    return (
      <ThemeProvider theme={themesMap[theme] || themesMap["default"]}>
        <StyledLink {...rest} href={href} onClick={onClick}>
          {children}
        </StyledLink>
      </ThemeProvider>
    );
  }
}

ClickableLink.Themes = ["default", "blue", "white", "gray", "null"];

ClickableLink.Types = ["default", "underline", "pseudo", "small", "null"];

ClickableLink.propTypes = {
  /** redirect url of link button */
  href: PropTypes.string.isRequired,
  /** handler for click behavior */
  onClick: PropTypes.func,
  /** themes of link */
  theme: PropTypes.string,
  /** native html popup text  */
  title: PropTypes.string,
};

ClickableLink.defaultProps = {
  href: "",
  onClick: () => {},
  theme: "default",
  title: "",
};
