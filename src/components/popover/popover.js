import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "./../index";

import {
  IconPopover,
  Content,
  ContentFixer,
  Header,
  PopoverWrapper,
} from "./popover.styled";

const TRIGGERS_EVENT_TYPE = {
  HOVER: "onhover",
  CLICK: "onclick",
  FOCUS: "onfocus",
};

const TRIGGER_EVENTS = {
  [TRIGGERS_EVENT_TYPE.HOVER]: [
    "onMouseOver",
    "onMouseOut",
    "onTouchStart",
    "onTouchEnd",
  ],
  [TRIGGERS_EVENT_TYPE.FOCUS]: ["onMouseDown", "onFocus", "onBlur"],
  [TRIGGERS_EVENT_TYPE.CLICK]: ["onClick", "onTouchStart", "onTouchEnd"],
};

const _getIcon = (hovered, title) => {
  return (
    <IconPopover key={title}>
      <Icon size="small" glyph="question" hovered={hovered} />
    </IconPopover>
  );
};

const _getHeaderTemplate = title => {
  if (!title.length) {
    return "";
  }

  return (
    <Header data-component="PopoverHeader" key={title}>
      {title}
    </Header>
  );
};

const _getPopupTemplate = (popupText, open) => {
  if (!popupText) {
    return "";
  }

  return (
    <Content data-component="PopoverContent">
      <ContentFixer data-component="PopoverContentFixer" open={open} />
      {popupText}
    </Content>
  );
};

const _getFragments = (isOpen, title, popupText) => {
  const icon = _getIcon(isOpen, title);
  const body = _getPopupTemplate(popupText);
  const header = _getHeaderTemplate(title);

  return {
    icon,
    body,
    header,
  };
};

const _getLayout = (position, icon, body, header) => {
  if (position === "left") {
    return [icon, body, header];
  } else if (position === "right") {
    return [body, header, icon];
  }

  return [body, icon];
};

class Popover extends Component {
  static displayName = "Button";

  state = {
    isOpen: false,
  };

  _innerRef = React.createRef();

  render() {
    const {
      id,
      header: title,
      children,
      position,
      className,
      trigger,
      open = false,
    } = this.props;
    const { isOpen } = this.state;
    const text = children || content;

    if (typeof id !== "string") {
      console.warn(`Popover component must have id property`);
    }

    const eventListeners = {};
    let triggerType = trigger;

    const _outBoundClickHandler = () => {
      this.setState({ isOpen: !isOpen });
    };

    if (!Object.values(TRIGGERS_EVENT_TYPE).includes(trigger)) {
      console.warn(`trigger not passed to component ${id}`);
      triggerType = TRIGGERS_EVENT_TYPE.HOVER;
    }

    const triggerActionType = TRIGGER_EVENTS[triggerType];
    triggerActionType.forEach(type => {
      eventListeners[type] = _outBoundClickHandler;
    });

    const { icon, body, header } = _getFragments(open, title, text);
    const _layout = _getLayout(position, icon, body, header);

    return (
      <PopoverWrapper
        role="tooltip"
        data-component="Popover"
        id={id}
        ref={this._innerRef}
        open={isOpen}
        position={position}
        className={className}
        {...eventListeners}
      >
        {_layout}
      </PopoverWrapper>
    );
  }
}

Popover.propTypes = {
  open: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  position: PropTypes.oneOf(["left", "right", "single"]),
  trigger: PropTypes.oneOf(["onfocus", "onclick", "onhover"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

Popover.defaultProps = {
  header: "",
  position: "left",
  trigger: "onhover",
};

export default Popover;
