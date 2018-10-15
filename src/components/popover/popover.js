import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../index";
import {
  IconPopover,
  Content,
  ContentFixer,
  Header,
  PopoverWrapper,
} from "./popover.styled";

const PopoverElement = PopoverWrapper.withComponent("div");

export default class Popover extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    open: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    position: PropTypes.oneOf(["left", "right", "single"]),
    trigger: PropTypes.oneOf(["hovered", "click", "focus"]),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    header: "",
    position: "left",
    trigger: "hovered",
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        ...this.state,
        open: nextProps.open,
      });
    }
  }

  onTouchStart = () => this.toggle();

  onTouchEnd = () => this.toggle();

  toggle = () => {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  };

  open = () => {
    if (this.state.open) {
      return;
    }

    const { onOpen } = this.props;

    this.setState({ open: true }, () => {
      onOpen && onOpen();
    });
  };

  close = () => {
    if (!this.state.open) {
      return;
    }

    const { onClose } = this.props;

    this.setState({ open: false }, () => {
      onClose && onClose();
    });
  };

  getActionPropsByType = type => {
    const actions = {
      click: {
        onClick: this.toggle,
        onTouchStart: this.toggle,
        onTouchEnd: this.toggle,
      },
      hovered: {
        onMouseEnter: this.open,
        onMouseLeave: this.close,
        onTouchStart: this.open,
        onTouchEnd: this.close,
      },
      focus: {
        onFocus: this.open,
        onBlur: this.close,
      },
    };

    return actions[type];
  };

  getIcon = open => (
    <IconPopover key={Math.random()}>
      <Icon size="small" glyph="question" hovered={open} />
    </IconPopover>
  );

  getPopoverLayout = ({ open, position, header, children }) => {
    let layout = [];

    const icon = this.getIcon(open);
    const headerContent = !!header ? (
      <Header key={Math.random()}>{header}</Header>
    ) : (
      ""
    );

    const contentLayout = children && (
      <Content key={Math.random()}>
        <ContentFixer open={open} />
        {children}
      </Content>
    );

    if (position === "left") {
      layout = [icon, contentLayout, headerContent];
    } else if (position === "right") {
      layout = [contentLayout, headerContent, icon];
    } else {
      layout = [contentLayout, icon];
    }

    return layout;
  };

  render() {
    const { open } = this.state;
    const { header, children, position, className, trigger } = this.props;

    const actionProps = this.getActionPropsByType(trigger);

    const layout = this.getPopoverLayout({
      open,
      position,
      header,
      children,
    });

    return (
      <PopoverElement
        {...actionProps}
        open={open}
        className={className}
        position={position}
      >
        {layout}
      </PopoverElement>
    );
  }
}
