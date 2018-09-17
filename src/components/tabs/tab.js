import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyledTabLabel } from "./tabs.styled";

export default class Tab extends PureComponent {
  static propTypes = {
    /** Label for tab */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    /** Index current tab in stack(Tabs) */
    tabIndex: PropTypes.number,
    /** Flag for active tab */
    isActive: PropTypes.bool,
    /** Callback calls on label click */
    onClick: PropTypes.func,
    /** Name of tab need for routing */
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isActive: null,
    onClick: null,
  };

  constructor(props) {
    super(props);
  }

  handlerClick = event => {
    const { tabIndex, name, onClick } = this.props;
    event.preventDefault();

    onClick && onClick(tabIndex, name);
  };

  render() {
    const { label, isActive } = this.props;

    return (
      <StyledTabLabel isActive={isActive} onClick={this.handlerClick}>
        {label}
      </StyledTabLabel>
    );
  }
}
