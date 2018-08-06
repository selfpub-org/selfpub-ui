import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { StyledLink, themesMap } from "./link.styled";

export default class Link extends PureComponent {
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

Link.Themes = ["default", "blue", "white", "gray", "null"];

Link.Types = ["default", "underline", "pseudo", "small", "null"];

Link.propTypes = {
  /** redirect url of link button */
  href: PropTypes.string.isRequired,
  /** handler for click behavior */
  onClick: PropTypes.func,
  /** themes of link */
  theme: PropTypes.string,
  /** native html popup text  */
  title: PropTypes.string,
};

Link.defaultProps = {
  href: "",
  onClick: () => {},
  theme: "default",
  title: "",
};
