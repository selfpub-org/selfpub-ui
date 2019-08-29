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

const TRIGGER_ON = {
  HOVER: "onhover",
  CLICK: "onclick",
  FOCUS: "onfocus",
};

const TRIGGER_EVENTS = {
  [TRIGGER_ON.HOVER]: [["onMouseOver"], ["onMouseLeave"], ["onClick"]],
  [TRIGGER_ON.FOCUS]: [["onMouseDown", "onFocus"], ["onBlur"]],
  [TRIGGER_ON.CLICK]: [["onTouchStart"], ["onTouchEnd"], ["onClick"]],
};

const _getIcon = open => {
  return (
    <IconPopover>
      <Icon size="small" glyph="question" hovered={open} />
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
    <Content data-component="PopoverContent" aria-hidden={open}>
      <ContentFixer data-component="PopoverContentFixer" open={open} />
      {popupText}
    </Content>
  );
};

const _getFragments = (title, text, isOpen) => {
  const icon = _getIcon(isOpen);
  const body = _getPopupTemplate(text, isOpen);
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

  static getDerivedStateFromProps(props, state) {
    if (props.open && !state.isOpen) {
      return { isOpen: props.open };
    }

    return null;
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("mousedown", this._outBoundClickHandler);
    document.addEventListener("mouseup", this._outBoundClickHandler);
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener("mousedown", this._outBoundClickHandler);
    document.removeEventListener("mouseup", this._outBoundClickHandler);
  }

  _innerRef = React.createRef();

  _stickingEnable = false;

  _showPopover = evt => {
    if (!this.props.open) {
      return evt && evt.preventDefault();
    }

    this._toggleView(evt);
  };

  _hidePopover = evt => {
    if (this.props.open) {
      return evt && evt.preventDefault();
    }

    this._toggleView(evt);
  };

  _toggleView = evt => {
    const { isOpen } = this.state;
    const { onChange, disabled } = this.props;

    if (disabled || !this._isMounted) {
      return evt && evt.preventDefault();
    }

    if (this._stickingEnable && evt.type === "click") {
      this._stickingEnable = false;

      return;
    }

    this.setState({ isOpen: !isOpen }, () => {
      onChange(!isOpen);
    });
  };

  _getEventListeners(triggerType) {
    const eventListeners = {};

    const [on, off, toggle = []] = TRIGGER_EVENTS[triggerType];
    on.forEach(type => {
      if (type === "onMouseOver") {
        eventListeners[type] = this._onMouseOverTooltipContent;

        return;
      }

      eventListeners[type] = this._showPopover;
    });

    off.forEach(type => {
      if (type === "onMouseLeave") {
        eventListeners[type] = this._onMouseLeaveTooltipContent;

        return;
      }

      eventListeners[type] = this._hidePopover;
    });

    toggle.forEach(type => {
      eventListeners[type] = this._toggleView;
    });

    return eventListeners;
  }

  _outBoundClickHandler = evt => {
    const { isOpen } = this.state;
    const ref = this._innerRef.current;

    if (ref && !ref.contains(evt.target) && isOpen) {
      this._hidePopover(evt);
    }
  };

  _onMouseLeaveTooltipContent = evt => {
    const { trigger, open } = this.props;
    const { isOpen } = this.state;

    // if triger type is not hover disable toggle event
    if (trigger !== TRIGGER_ON.HOVER) {
      return;
    }

    // If Popover now close and not show popover
    // by props value, disable toggle event
    if (!isOpen && open) {
      return;
    }

    // if not enable popover sticking disable event
    if (!this._stickingEnable) {
      return;
    }

    evt.persist();
    this._hidePopover(evt);
  };

  _onMouseOverTooltipContent = evt => {
    const { trigger, open } = this.props;
    const { isOpen } = this.state;

    // if triger type is not hover disable toggle event
    if (trigger !== TRIGGER_ON.HOVER) {
      return;
    }

    // If Popover now open and not hide popover
    // by props value, disable toggle event
    if (isOpen && !open) {
      return;
    }

    // flag for clip popover at enable state after hover and click
    // Next toggle event disavle onMouseLeave event
    this._stickingEnable = true;

    this._toggleView(evt);
  };

  render() {
    const {
      id,
      header: title,
      children,
      position,
      className,
      trigger,
    } = this.props;
    const { isOpen } = this.state;
    const text = children || content;

    if (typeof id !== "string") {
      console.warn(`Popover component must have id property`);
    }

    let triggerType = trigger;

    if (!Object.values(TRIGGER_ON).includes(trigger)) {
      console.warn(`trigger not passed to component ${id}`);
      triggerType = TRIGGER_ON.HOVER;
    }

    const { icon, body, header } = _getFragments(title, text, isOpen);
    const _layout = _getLayout(position, icon, body, header);
    const _eventListeners = this._getEventListeners(triggerType);

    return (
      <PopoverWrapper
        role="tooltip"
        data-component="Popover"
        id={id}
        ref={this._innerRef}
        open={isOpen}
        position={position}
        className={className}
        {..._eventListeners}
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
  onChange: PropTypes.func,
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
  onChange: Function.prototype,
};

export default Popover;
