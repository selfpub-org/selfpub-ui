import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { injectGlobal, ThemeProvider } from "styled-components";
import { mainTheme } from "../../components/ui-styles";

injectGlobal`
  /* Дефолтные стили */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-size-adjust: none;
  }
  
  /* Формы */
  input, textarea, button {
    appearance: none;
    font-family: ${mainTheme.systemFonts};
    letter-spacing: -.1px;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Аккуратные таблицы */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* Основные стили */
  html {
    background: rgba(255, 255, 255, 1);
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    font-family: ${mainTheme.systemFonts};
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
  
  /* Ссылки без дефолтного подчёркивания */
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
      <ThemeProvider theme={theme || mainTheme}>
        {Children.only(children)}
      </ThemeProvider>
    );
  }
}

ThemeProviderWrapper.propTypes = {
  /** Child `ThemeProvider` */
  children: PropTypes.node,
  /** Theme компонента */
  theme: PropTypes.oneOf(["selfpub"]),
};

ThemeProviderWrapper.contextTypes = {
  theme: PropTypes.string,
};

ThemeProviderWrapper.childContextTypes = {
  theme: PropTypes.string,
};
