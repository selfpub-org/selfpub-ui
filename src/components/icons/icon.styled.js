import styled, { css } from "styled-components";
import iconsSprite from "../../assets/icon-sprite.svg";
import openBookIcon from "../../assets/book-open.svg";

const StyledIcon = {};

const spriteCell = 18;

const icons = {
  ["arrow-bottom"]: 0,
  ["pencil"]: `-${spriteCell}px 0`,
  ["delete"]: `-${spriteCell * 2}px 0`,
  ["download"]: `-${spriteCell * 3}px 0`,
  ["question"]: `-${spriteCell * 4}px 0`,
  ["question-invert"]: `-72px -18px`,
  ["radio"]: `-${spriteCell * 6}px 0`,
  ["bookmark"]: `-${spriteCell * 7}px 0`,
  ["triangle-bottom"]: `-${spriteCell * 8}px 0`,
  ["success"]: `-${spriteCell * 9}px 0`,
  ["error"]: `-${spriteCell * 10}px 0`,
  ["triangle-top"]: `-${spriteCell * 8}px -18px`,
  ["arrow-up"]: `0 -${spriteCell}px`,
  ["digital-book"]: `0 -${spriteCell * 2}px`,
  ["analog-book"]: `-${26}px -36px`,
  ["cross"]: `-${26 * 2}px -36px`,
  ["checkbox"]: `-${26 * 3}px -36px`,
  ["link"]: `-26px * 4 -36px`,
  ["download"]: "-54px 0",
};

const sizes = {
  small: css`
    min-width: 18px;
    width: 18px;
    height: 18px;
    margin: 0 2px;
    display: inline-flex;
  `,
  big: css`
    width: 26px;
    height: 26px;
  `,
};

Object.keys(icons).forEach(iconType => {
  StyledIcon[`${iconType}`] = styled.span`
    display: inline-block;
    width: ${spriteCell}px;
    height: ${spriteCell}px;
    background-size: 198px 88px;
    background: url("${iconsSprite}") ${icons[iconType]};
  `;
});

StyledIcon["readings"] = styled.span`
  background: url(${openBookIcon}) no-repeat 0 2px;
  background-size: contain;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
`;

export { StyledIcon };
