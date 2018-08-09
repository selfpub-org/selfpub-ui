import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { injectGlobal, ThemeProvider } from "styled-components";
import baseTheme from "./base";

injectGlobal`
  /* Default */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-size-adjust: none;
    font-family: ${baseTheme.fontFamily};
  }
  
  /* Forms */
  input, textarea, button {
    appearance: none;
    font-family: ${baseTheme.systemFonts};
    letter-spacing: -.1px;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html {
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    font-family: ${baseTheme.systemFonts};
    font-size: 14px;
    letter-spacing: -.1px;
    line-height: 20px;
    min-width: 1220px;
  }
  
  template {
    display: none;
  }
  
  details {
    display: block;
  }
  
  summary {
    display: list-item;
  }
  
  [hidden] {
    display: none;
  }
  
  a {
    text-decoration: none;
  }
`;

export default class ThemeProviderWrapper extends Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    const { children } = this.props;
    const { theme } = this.props;

    return (
      <ThemeProvider theme={theme || baseTheme}>
        {Children.only(children)}
      </ThemeProvider>
    );
  }
}

ThemeProviderWrapper.propTypes = {
  /** Child `ThemeProvider` */
  children: PropTypes.node,
  /** Theme */
  theme: PropTypes.oneOf(["base"]),
};

ThemeProviderWrapper.contextTypes = {
  theme: PropTypes.string,
};

ThemeProviderWrapper.childContextTypes = {
  theme: PropTypes.string,
};
