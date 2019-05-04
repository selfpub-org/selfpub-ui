import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Toggle extends Component {
  static propTypes = {
    /** Id for group. Generated automatically if not specified */
    id: PropTypes.string,
    /** Child nodes - radio */
    children: PropTypes.node,
    /** Required callback, which is called when the input is clicked and changes the state root component. */
    onChange: PropTypes.func.isRequired,
    /** Meaning of the currently selected radio */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  static defaultProps = { id: null, onChange: () => {} };

  static Wrapper = styled.div`
    display: flex;
  `;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { children, value, id } = this.props;

    const index = children.findIndex(
      childElement => childElement.props.value === value,
    );
    let activeButtonIndex;

    // This is the case where it is not specified
    if (value === undefined) {
      activeButtonIndex = -1;
    } else if (index > -1 && !children[index].props.disabled) {
      activeButtonIndex = index;
    } else {
      activeButtonIndex = this.getInitialCheckedIndex(children);
    }

    // Set id for groups
    this.groupId = id || `toggle-${~~(Math.random() * 10000)}`;

    this.setState({ activeButtonIndex });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const children = this.props.children;

    const index = children.findIndex(childElement => {
      const {
        props: { value, disabled },
      } = childElement;

      return value === nextProps.value && !disabled;
    });

    if (index !== -1 && index !== this.state.activeButtonIndex) {
      this.setState({ activeButtonIndex: index });
    }
  }

  getInitialCheckedIndex = children => {
    let activeButtonIndex;

    for (let i = 0; i < children.length; i++) {
      if (!children[i].props.disabled) {
        activeButtonIndex = i;
        break;
      }
    }

    return activeButtonIndex;
  };

  get value() {
    const { activeButtonIndex } = this.state;
    const { children } = this.props;

    const child = children.find(
      childElement => childElement.props.index === activeButtonIndex,
    );

    return (child && child.props.value) || "";
  }

  onChange = radioIndex => {
    const { onChange, children } = this.props;
    const child = children[radioIndex];
    const {
      props: { value = "" },
    } = child;

    if (!child) {
      return;
    }

    this.setState({ activeButtonIndex: radioIndex });

    onChange && onChange(value);
  };

  renderChild = (child, index, active) => {
    const { children } = this.props;
    const { onChange, ...rest } = child.props;

    const childrenProps = {
      index,
      active,
      key: index,
      last: index === children.length - 1,
      onChange: () => this.onChange(index),
      ...rest,
    };

    return React.cloneElement(child, childrenProps);
  };

  render() {
    const { activeButtonIndex } = this.state;
    const { children, ...rest } = this.props;

    const clonedChildren = children.map((child, index) =>
      this.renderChild(child, index, index === activeButtonIndex),
    );

    return (
      <Toggle.Wrapper id={this.groupId} {...rest}>
        {clonedChildren}
      </Toggle.Wrapper>
    );
  }
}
