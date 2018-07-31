import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ClickableLink extends PureComponent {
  render() {
    const { onClick, ...restProps } = this.props;

    return <a {...restProps} onClick={onClick} />;
  }
}

ClickableLink.propTypes = {
  href: PropTypes.string.require,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
