import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import nanoid from "nanoid";

const styles = {
  h1: styled.h1`
    font-size: 45px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 84px;

    @media screen and (max-width: 768px) {
      line-height: 1.2;
    }

    @media screen and (max-width: 420px) {
      font-size: 32px;
      margin-bottom: 14px;
      text-align: center;
    }
  `,
  h2: styled.h2`
    font-size: 32px;
    margin-bottom: 16px;
    text-align: center;
    line-height: 40px;
    padding: 0 10px;
    font-weight: 500;
    color: #3b393f;
    margin-top: 0;

    @media screen and (max-width: 420px) {
      font-size: 28px;
      margin-bottom: 14px;
      text-align: center;
      line-height: 32px;
    }
  `,
  h3: styled.h3`
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 6px;
    color: #3b393f;
    margin-top: 0;
  `,
  h4: styled.h4`
    font-size: 21px;
    line-height: 33px;
    margin-bottom: 6px;
    color: #3b393f;
    margin-top: 0;
  `,
  h5: styled.h5`
    font-size: 17px;
    line-height: 27px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #3b393f;
    margin-top: 0;
  `,
  h6: styled.h6`
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 6px;
    color: #3b393f;
    margin-top: 0;
  `,
};

export default class Header extends PureComponent {
  constructor() {
    super();
    this.postfix = nanoid(6);
  }

  render() {
    const { children, level, align, ...rest } = this.props;
    const headerType = `h${level}`;
    const id = this.props.id || `${headerType}-${this.postfix}`;
    const StyledHeader = styled(styles[headerType])`
      text-align: ${align};
    `;

    return (
      <StyledHeader id={id} {...rest}>
        {children}
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  /** Paragraph id */
  id: PropTypes.string,
  /** header level h1, h2, h3 etc */
  level: PropTypes.number.isRequired,
  /** */
  align: PropTypes.string,
};

Header.defaultProps = {
  align: "center",
};
