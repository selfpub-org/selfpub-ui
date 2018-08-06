import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyledTabLabel } from "./tabs.styled";

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerClick = ::this.handlerClick;
  }

  handlerClick(event) {
    const { tabIndex, onClick } = this.props;
    event.preventDefault();

    onClick && onClick(tabIndex);
  }

  render() {
    const { label, isActive } = this.props;

    return (
      <StyledTabLabel isActive={isActive} onClick={this.handlerClick}>
        {label}
      </StyledTabLabel>
    );
  }
}

Tab.propTypes = {
  /** Label for tab */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Index current tab in stack(Tabs) */
  tabIndex: PropTypes.number,
  /** Flag for active tab */
  isActive: PropTypes.bool,
  /** Callback calls on label click */
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  isActive: null,
  onClick: null,
};
