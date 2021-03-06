import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Paragraph extends PureComponent {
  constructor() {
    super();
    this.postfix = `${~~(Math.random() * 10000)}`;
  }

  render() {
    const { children, ...rest } = this.props;
    const id = this.props.id || `paragraph-${this.postfix}`;

    const StyledParagraph = styled.p`
      display: block;
      text-align: left;
      max-width: 80%;
      font-size: 16px;
      line-height: 1.6;
      font-weight: normal;
      margin: 16px auto 20px;

      @media screen and (max-width: 375px) {
        font-size: 18px;
        line-height: 32px;
        max-width: 95%;
      }
    `;

    return (
      <StyledParagraph id={id} {...rest}>
        {children}
      </StyledParagraph>
    );
  }
}

Paragraph.propTypes = {
  /** Paragraph id */
  id: PropTypes.string,
};
