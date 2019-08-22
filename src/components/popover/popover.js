import React, { useCallback, useRef, useState, useEffect } from "react";
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

const _getIcon = (hovered, title) => (
  <IconPopover key={`IconPopover_${title}`}>
    <Icon size="small" glyph="question" hovered={hovered} />
  </IconPopover>
);

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

const _getEventByTriggerType = (triggerType, toggleFn) => {
  switch (triggerType) {
    case TRIGGERS_EVENT_TYPE.HOVER:
      return {
        onMouseEnter: toggleFn,
        onTouchStart: toggleFn,
        onMouseLeave: toggleFn,
        onTouchEnd: toggleFn,
      };
    case TRIGGERS_EVENT_TYPE.FOCUS:
      return {
        onFocus: toggleFn,
        onBlur: toggleFn,
      };
    case TRIGGERS_EVENT_TYPE.CLICK:
    default:
      return {
        onClick: toggleFn,
        onTouchStart: toggleFn,
      };
  }
};

const _getHandleClickOutside = (ref, setOpen, onChange) => event => {
  if (ref.current && !ref.current.contains(event.target)) {
    setOpen(false);
    onChange(false);
  }
};

const _getToggleFn = (isOpen, setOpen, onChange = Function.prototype) => () => {
  setOpen(!isOpen);

  try {
    onChange(isOpen);
  } catch (err) {
    throw new Error(err);
  }
};

function Popover(props) {
  const _ref = useRef();
  const {
    id,
    header,
    children,
    position,
    className,
    trigger: triggerType = TRIGGERS_EVENT_TYPE.HOVER,
    open = false,
    onChange = Function.prototype,
  } = props;
  const [isOpen, setOpen] = useState(open);

  const text = children || content;
  const { icon, body, header: title } = _getFragments(isOpen, header, text);
  const _layout = _getLayout(position, icon, body, title);
  const _toggleFn = _getToggleFn(isOpen, setOpen, onChange);

  const _events = _getEventByTriggerType(triggerType, _toggleFn);

  useEffect(() => {
    const _outBoundClickHandler = _getHandleClickOutside(
      _ref,
      setOpen,
      onChange,
    );

    window.addEventListener("mousedown", _outBoundClickHandler);

    return () => {
      window.removeEventListener("mousedown", _outBoundClickHandler);
    };
  }, []);

  return (
    <PopoverWrapper
      id={id}
      ref={_ref}
      open={isOpen}
      position={position}
      className={className}
      {..._events}
      data-component="Popover"
    >
      {_layout}
    </PopoverWrapper>
  );
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
  trigger: "hovered",
};

export default Popover;
