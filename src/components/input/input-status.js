import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { mainTheme } from "../ui-styles/index";

export default class InputStatus extends PureComponent {
  render() {
    const { type, message, children } = this.props;

    const colorMap = {
      error: mainTheme.color.red,
      warning: mainTheme.color.yellow,
      success: mainTheme.color.green,
      null: "transparent",
    };

    const StyledMessage = styled.div`
      margin-top: 5px;
      font-size: 14px;
      color: ${colorMap[type]};
    `;

    return (
      <div>
        {children}
        {message && type !== "null" ? (
          <StyledMessage type={type}>{message}</StyledMessage>
        ) : null}
      </div>
    );
  }
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
