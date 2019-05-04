import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mainTheme } from "../ui-styles/index";

const BaseStyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 17px;
  line-height: 28px;
  border: 1px solid ${mainTheme.color.lighterCoal};
  border-radius: 0;
  outline: none;
  padding: 6px 10px;
  height: 46px;
  resize: none;
  min-height: 150px;

  :focus {
    border-color: ${mainTheme.color.coal};
  }
`;

export default class Textarea extends PureComponent {
  render() {
    const { value, onChange, ...rest } = this.props;

    return (
      <BaseStyledTextarea
        tagName="textarea"
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  status: PropTypes.oneOf(["error", "warning", "success", null]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  variation: PropTypes.string,
};

Textarea.defaultProps = {
  variation: "default",
};
