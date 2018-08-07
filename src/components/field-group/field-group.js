import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldGroup = styled.div`
  margin: 0;
  cursor: auto;
  widows: 2;
  hyphens: none;
  padding: 0;
  tab-size: 8;
  position: relative;
  font-size: medium;
  direction: ltr;
  box-sizing: border-box;
  visibility: visible;
  font-style: normal;
  text-align: left;
  list-style: disc outside none;
  font-weight: normal;
  empty-cells: show;
  line-height: normal;
  white-space: normal;
  text-indent: 0;
  text-shadow: none;
  font-family: Roboto, sans-serif;
  font-stretch: normal;
  font-variant: normal;
  word-spacing: normal;
  caption-side: top;
  border-radius: 0;
  border-spacing: 0;
  text-transform: none;
  vertical-align: baseline;
  letter-spacing: normal;
  text-align-last: auto;
  border-collapse: separate;
  flex: 1;
  flex-basis: 0;
`;

export default class FieldGroup extends PureComponent {
  render() {
    const {
      style,
      children,
      disabled,
      showDivider,
      theme, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;

    const count = React.Children.count(children);
    let i = 1;

    return (
      <StyledFieldGroup style={style}>
        {React.Children.map(children, child => {
          let groupPosition = "middle";
          if (i === 1) groupPosition = "start";
          else if (i === count) groupPosition = "end";
          i++;
          return React.cloneElement(child, {
            ...props,
            disabled,
            groupPosition,
          });
        })}
      </StyledFieldGroup>
    );
  }
}

FieldGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium"]),
  status: PropTypes.oneOf(["error", "warning", "success", null]),
  disabled: PropTypes.bool,
  showDivider: PropTypes.bool,
};

FieldGroup.defaultProps = {
  showDivider: false,
};
