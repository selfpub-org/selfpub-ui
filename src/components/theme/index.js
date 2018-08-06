import React, { Component } from "react";
import PropTypes from "prop-types";
import deepmerge from "deepmerge";

// const theming = createTheming(RAMBLER_UI_THEME);
// const { ThemeProvider, withTheme } = theming;

export class ThemeProvider extends Component {
  static propTypes = {
    /** Дочерний элемент `ThemeProvider` */
    children: Type.node,
    /** Тема компонента */
    theme: Type.oneOf(["SELFPUB", "alfa-on-white"]),
  };

  static contextTypes = {
    theme: Type.string,
  };

  static childContextTypes = {
    theme: Type.string,
  };

  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }
  render() {
    const { children } = this.props;
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {React.Children.only(this.props.children)}
      </ThemeProvider>
    );
  }
}
