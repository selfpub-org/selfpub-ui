import React, { PureComponent, cloneElement, Children } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import {
  StyledContainer,
  StyledTab,
  StyledTabContent,
  StyledTabLabelWrapper,
} from "./tabs.styled";

export default class Tabs extends PureComponent {
  static propTypes = {
    /** flag for wrap tab content in component Container */
    wrapped: PropTypes.bool,
    /** Tabs content elements */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node,
    ]).isRequired,
    /** Used for change tabs by number */
    activeTabIndex: PropTypes.number,
    /** Used for open tabs by number onMount */
    defaultActiveTabIndex: PropTypes.number,
    /** Callback calls on change tab */
    onChangeTab: PropTypes.func,
  };

  static defaultProps = {
    wrapped: null,
    onChangeTab: null,
    activeTabIndex: null,
    defaultActiveTabIndex: 0,
  };

  state = {
    activeTabIndex: 0,
  };

  componentDidMount() {
    const currentTabName = this.getCurrentActiveTabName();

    this.setState({ activeTabIndex: this.props.defaultActiveTabIndex });

    this.updateCurrentActiveTab(currentTabName);
  }

  componentWillReceiveProps(newProps, nextContext) {
    const { activeTabIndex } = newProps;

    this.setState({
      activeTabIndex,
    });
  }

  getCurrentActiveTabName = () => {
    const parsed = queryString.parse(window.location.search);
    const { currentTab = "" } = parsed;

    return currentTab;
  };

  updateUrl = currentTab => {
    const urlParams = queryString.parse(window.location.search);
    const url = queryString.stringify({ ...urlParams, currentTab });

    window.history.pushState(null, null, `?${url}`);
  };

  updateCurrentActiveTab = currentTabName => {
    let activeTabIndex = this.props.defaultActiveTabIndex;

    this.props.children.forEach((tab, index) => {
      const { name: tabName = "" } = tab.props;

      activeTabIndex = tabName === currentTabName ? index : activeTabIndex;
    });

    this.setState({
      activeTabIndex,
    });
  };

  /** Toggle currently active tab */
  handleTabClick = (tabIndex, name) => {
    const { onChangeTab } = this.props;

    this.setState(
      {
        activeTabIndex: tabIndex,
      },
      () => {
        this.updateUrl(name);

        onChangeTab && onChangeTab(tabIndex);
      },
    );
  };

  /** Encapsulate <Tabs/> component API as props for <Tab/> children */
  renderChildrenWithTabsApiAsProps() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return Children.map(children, (child, index) =>
      cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === activeTabIndex,
      }),
    );
  }

  /** Render current active tab content */
  renderActiveTabContent() {
    const { children, wrapped = true } = this.props;
    const { activeTabIndex } = this.state;
    const activeTabComponent =
      children.length > activeTabIndex && children[activeTabIndex] ? (
        children[activeTabIndex].props.children
      ) : (
        <div>&nbsp;</div>
      );

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
