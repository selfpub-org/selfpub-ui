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
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    isOpen: PropTypes.bool,
    position: PropTypes.oneOf(["left", "right", "none"]),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    header: "",
    position: "left",
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({
        ...this.state,
        isOpen: nextProps.isOpen,
      });
    }
  }

  onTouchStart = () => this.toggle();

  onTouchEnd = () => this.toggle();

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  open = () => {
    if (this.state.isOpen) {
      return;
    }

    const { onOpen } = this.props;

    this.setState({ isOpen: true }, () => {
      onOpen && onOpen();
    });
  };

  close = () => {
    if (!this.state.isOpen) {
      return;
    }

    const { onClose } = this.props;

    this.setState({ isOpen: false }, () => {
      onClose && onClose();
    });
  };

  render() {
    const { header, children, position, className } = this.props;
    const { isOpen } = this.state;

    const icon = (
      <IconPopover>
        <Icon size="small" glyph="question" hovered={isOpen} />
      </IconPopover>
    );

    const contentLayout = children && (
      <Content>
        <ContentFixer isOpen={isOpen} />
        {children}
      </Content>
    );

    return (
      <PopoverElement
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        onTouchStart={this.toggle}
        onTouchEnd={this.toggle}
        isOpen={isOpen}
        className={className}
      >
        {position === "left" && icon}
        {contentLayout}
        {!!header ? <Header>{header}</Header> : ""}
        {position === "right" && icon}
      </PopoverElement>
    );
  }
}
