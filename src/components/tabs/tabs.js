import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledTab,
  StyledTabContent,
  StyledTabLabelWrapper,
} from "./tabs.styled";

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex,
    };
    this.handleTabClick = ::this.handleTabClick;
  }

  /** Toggle currently active tab */
  handleTabClick(tabIndex) {
    const { onChangeTab } = this.props;
    this.setState({
      activeTabIndex: tabIndex,
    });
    onChangeTab && onChangeTab(tabIndex);
  }

  /** Encapsulate <Tabs/> component API as props for <Tab/> children */
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex,
      }),
    );
  }

  /** Render current active tab content */
  renderActiveTabContent() {
    const { children, wrapped = true } = this.props;
    const { activeTabIndex } = this.state;
    const activeTabComponent = children[activeTabIndex].props.children;

    if (children[activeTabIndex]) {
      return wrapped ? (
        <StyledContainer>{activeTabComponent}</StyledContainer>
      ) : (
        activeTabComponent
      );
    }
  }

  render() {
    return (
      <StyledTab>
        <StyledTabLabelWrapper>
          {this.renderChildrenWithTabsApiAsProps()}
        </StyledTabLabelWrapper>
        <StyledTabContent>{this.renderActiveTabContent()}</StyledTabContent>
      </StyledTab>
    );
  }
}

Tabs.propTypes = {
  /** flag for wrap tab content in component Container */
  wrapped: PropTypes.bool,
  /** Tabs content elements */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  /** Used for open tabs by number onMount */
  defaultActiveTabIndex: PropTypes.number,
  /** Callback calls on change tab */
  onChangeTab: PropTypes.func,
};

Tabs.defaultProps = {
  wrapped: null,
  onChangeTab: null,
  defaultActiveTabIndex: 0,
};
