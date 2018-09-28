import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RadioGroup extends Component {
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

  state = {
    checkedIndex: 0,
    value: "",
  };

  componentWillMount() {
    const { children, value, id } = this.props;

    const index = children.findIndex(
      childElement => childElement.props.value === value,
    );
    let checkedIndex;

    // This is the case where it is not specified
    if (value === undefined) {
      checkedIndex = -1;
    } else {
      if (index > -1 && !children[index].props.disabled) {
        checkedIndex = index;
      } else {
        checkedIndex = this.getInitialCheckedIndex(children);
      }
    }

    // Set id for groups
    this.groupId = id || `radio-group-${~~(Math.random() * 10000)}`;

    this.setState({ checkedIndex: checkedIndex });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const children = this.props.children;

    const index = children.findIndex(childElement => {
      const {
        props: { value, disabled },
      } = childElement;

      return value === nextProps.value && !disabled;
    });

    if (index !== -1 && index !== this.state.checkedIndex) {
      this.setState({ checkedIndex: index });
    }
  }

  getInitialCheckedIndex = children => {
    let checkedIndex;

    for (let i = 0; i < children.length; i++) {
      if (!children[i].props.disabled) {
        checkedIndex = i;
        break;
      }
    }

    return checkedIndex;
  };

  onChange = (checkedIndex, value) => {
    const { onChange, value: groupValue } = this.props;
    const { value: prevValue } = this.state;

    if (!groupValue || value !== prevValue) {
      this.setState({ checkedIndex, value });
    }

    if (onChange) {
      onChange(value);
    }
  };

  renderChild = (child, index, checked) => {
    const { children } = this.props;

    const childrenProps = {
      name: this.props.name,
      index,
      checked,
      key: index,
      last: index === children.length - 1,
      onChange: value => this.onChange(index, value),
    };

    return React.cloneElement(child, childrenProps);
  };

  render() {
    const { checkedIndex } = this.state;
    const { children, onChange, ...rest } = this.props;

    const clonedChildren = React.Children.map(children, (child, index) => {
      return this.renderChild(child, index, index === checkedIndex);
    });

    return (
      <div id={this.groupId} {...rest}>
        {clonedChildren}
      </div>
    );
  }
}
