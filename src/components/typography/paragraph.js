import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import nanoid from "nanoid";

export default class Paragraph extends PureComponent {
  constructor() {
    super();
    this.postfix = nanoid(6);
  }

  render() {
    const { children, ...rest } = this.props;
    const id = this.props.id || `paragraph-${this.postfix}`;

    const StyledParagraph = styled.p`
      display: block;
      text-align: left;
      max-width: 80%;
      font-size: 21px;
      line-height: 33px;
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
