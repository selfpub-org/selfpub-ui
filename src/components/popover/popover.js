import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import Icon from "../icons/icon";
import {
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
      <Icon
        size="small"
        glyph={this.state.open ? "question-invert" : "question"}
      />
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
  header: PropTypes.string.isRequired,
  open: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
};

Popover.defaultProps = {
  position: null,
  open: false,
};
