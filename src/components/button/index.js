import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import isNil from "lodash.isnil";

import { Container, Wrapper, Icon, Title, Loader } from "./styles";
import themes from "./../theme/base/button";

class Button extends PureComponent {
  _getCommonButtonProps = () => {
    const {
      className,
      onClick,
      iconName,
      title,
      disabled,
      loading,
      stretched,
    } = this.props;

    const hasIcon = !isNil(iconName);
    const hasTitle = !!title;
    const justIcon = hasIcon && !hasTitle;
    const justTitle = hasTitle && !hasIcon;
    const fitOnAction = loading && !hasIcon;

    return {
      className,
      disabled: disabled || loading,
      onClick: onClick,
      justIcon: justIcon,
      justTitle: justTitle,
      fitOnAction: fitOnAction,
      stretched: stretched,
      loading: loading,
    };
  };

  renderIcon = () => {
    const { iconName, loading } = this.props;
    const hasIcon = !isNil(iconName);

    if (loading) {
      return <Loader />;
    }

    return hasIcon && <Icon name={iconName} />;
  };

  renderChildren = () => {
    const { iconName, iconRight, title } = this.props;

    const hasIcon = !isNil(iconName);
    const hasTitle = !!title;
    const justIcon = hasIcon && !hasTitle;
    const justTitle = hasTitle && !hasIcon;

    return (
      <Wrapper reverse={iconRight} justTitle={justTitle} justIcon={justIcon}>
        {this.renderIcon()}
        {hasTitle && <Title>{title}</Title>}
      </Wrapper>
    );
  };
  renderButton = () => {
    const { type, disabled, href, tabIndex, loading } = this.props;

    if (type === "link") {
      const linkDisabled = disabled || loading;

      return (
        <Container
          {...this._getCommonButtonProps()}
          as="a"
          role="button"
          href={linkDisabled ? undefined : href}
          tabIndex={linkDisabled ? -1 : tabIndex}
          aria-disabled={linkDisabled}
        >
          {this.renderChildren()}
        </Container>
      );
    }

    return (
      <Container {...this._getCommonButtonProps()}>
        {this.renderChildren()}
      </Container>
    );
  };

  render() {
    const { variation, appearance } = this.props;

    const appearanceTheme = themes[appearance] || themes.common;
    const { base = themes.common.base } = appearanceTheme;
    const variationTheme =
      appearanceTheme[variation || "default"] || themes.common.default;
    const theme = { ...variationTheme, base };

    return <ThemeProvider theme={theme}>{this.renderButton()}</ThemeProvider>;
  }
}

function requiredPropsCheck(props, propName, componentName) {
  if (isNil(props.iconName) && isNil(props.title)) {
    return new Error(
      `One of props 'iconName' or 'title' was not specified in '${componentName}'.`,
    );
  }

  if (!isNil(props[propName]) && typeof props[propName] !== "string") {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}', expected 'string'.`,
    );
  }

  if (!isNil(props[propName]) && props[propName].length === 0) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}', expected not empty string.`,
    );
  }
}

function requiredHref({ type, href }, propName, componentName) {
  if (type === "link" && !href) {
    return new Error(
      `Then 'href' prop was not specified for type link in '${componentName}'.`,
    );
  }

  if (type !== "link" && href) {
    if (typeof href !== "string") {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}', expected 'string'.`,
      );
    }

    return new Error(
      `The 'href' prop should be used only for type link in '${componentName}'.`,
    );
  }
}

function requiredOnClick({ type, onClick }, propName, componentName) {
  if (type !== "link" && !onClick) {
    return new Error(
      `Then 'onClick' prop was not specified for type button in '${componentName}'.`,
    );
  }

  if (typeof onClick !== "function") {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}', expected 'func'.`,
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: requiredOnClick,
  iconName: requiredPropsCheck,
  title: requiredPropsCheck,
  iconRight: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(themes.flat)),
  appearance: PropTypes.oneOf(Object.keys(themes)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  stretched: PropTypes.bool,
  href: requiredHref,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  className: "",
  type: "button",
  iconRight: false,
  variation: "default",
  appearance: "raised",
  disabled: false,
  loading: false,
  stretched: true,
  tabIndex: 0,
};

export default Button;
