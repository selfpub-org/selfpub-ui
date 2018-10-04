import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Icon } from "../index";
import {
  IconPopover,
  StyledPopoverContent,
  StyledPopoverContentFixer,
  StyledPopoverHeader,
  StyledPopoverWrapper,
} from "./popover.styled";

export default class Popover extends PureComponent {
  constructor(props) {
    super(props);
    this.onMouseOver = ::this.onMouseOver;
    this.onMouseOut = ::this.onMouseOut;
    this.onTouchStart = ::this.onTouchStart;
    this.onTouchEnd = ::this.onTouchEnd;

    this.state = {
      open: this.props.open,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        ...this.state,
        open: nextProps.open,
      });
    }
  }

  onMouseOver() {
    this.setState({ open: true });
  }

  onMouseOut() {
    this.setState({ open: false });
  }

  onTouchStart() {
    this.setState({ open: true });
  }

  onTouchEnd() {
    this.setState({ open: false });
  }

  render() {
    const { header, children, position } = this.props;
    const icon = (
      <IconPopover>
        <Icon size="small" glyph="question" hovered={this.state.open} />
      </IconPopover>
    );
    const contentLayout = children ? (
      <StyledPopoverContent>
        <StyledPopoverContentFixer />
        {children}
      </StyledPopoverContent>
    ) : null;

    return (
      <StyledPopoverWrapper
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        open={this.state.open}
      >
        {position === "left" && icon}
        {contentLayout}
        <StyledPopoverHeader>{header}</StyledPopoverHeader>
        {position === "right" && icon}
      </StyledPopoverWrapper>
    );
  }
}

Popover.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  open: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

Popover.defaultProps = {
  position: null,
  open: false,
};
