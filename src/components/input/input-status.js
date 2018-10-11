import React, { Fragment, cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { StyledMessage } from "./input.styled";

export default function InputStatus({
  id,
  type = "null",
  message = "",
  children,
  disabled = null,
}) {
  const inputId = id || `input-${~~(Math.random() * 10000)}`;

  const clonedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, {
      disabled,
      ...children.props,
      id: inputId,
      key: index,
    });
  });

  const Message = StyledMessage(type);

  return (
    <Fragment>
      {clonedChildren}
      {message &&
        type !== "null" && (
          <Message type={type} disabled={disabled}>
            {message}
          </Message>
        )}
    </Fragment>
  );
}

InputStatus.propTypes = {
  /** Type of status */
  type: PropTypes.oneOf(["error", "warning", "success", "null"]),
  /** Message for display */
  message: PropTypes.node,
  /** Input element for set position*/
  children: PropTypes.node.isRequired,
};

InputStatus.defaultProps = {
  type: "type",
};
