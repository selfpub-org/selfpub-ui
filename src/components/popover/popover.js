import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Icon from "../icons/icon";
import {
  StyledPopoverContent,
  StyledPopoverContentFixer,
  StyledPopoverHeader,
  StyledPopoverWrapper,
} from "./popover.styled";

export default class Popover extends PureComponent {
  render() {
    const { header, content, position, invert } = this.props;
    const icon = (
      <Icon
        size="small"
        className={`icon icon--small icon--question${invert ? "-invert" : ""}`}
      >
        <span />
      </Icon>
    );
    const contentLayout = content ? (
      <StyledPopoverContent>
        <StyledPopoverContentFixer />
        {content}
      </StyledPopoverContent>
    ) : null;

    return (
      <StyledPopoverWrapper>
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
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  position: PropTypes.oneOf(["left", "right"]),
};

Popover.defaultProps = {
  position: null,
};
