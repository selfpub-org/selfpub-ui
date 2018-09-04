import styled, { css } from "styled-components";
import { iconsSprite, openBookIcon } from "../../assets";

const spriteCell = 18;
const spriteBigCell = 26;

const icons = {
  ["arrow-bottom"]: { small: { x: 0, y: 0 }, big: { x: 0, y: 0 } },
  ["pencil"]: {
    small: { x: -18, y: 0 },
    big: { x: -25, y: 0 },
  },
  ["delete"]: {
    small: { x: -(spriteCell * 2), y: 0 },
    big: { x: -(spriteBigCell * 2), y: 0 },
  },
  ["download"]: {
    small: { x: -(spriteCell * 3), y: 0 },
    big: { x: -(spriteBigCell * 3), y: 0 },
  },
  ["question"]: {
    small: { x: -(spriteCell * 4), y: 0 },
    big: { x: -(spriteBigCell * 4), y: 0 },
  },
  ["question-invert"]: {
    small: { x: -(spriteCell * 4), y: -spriteCell },
    big: { x: -(spriteBigCell * 4), y: -spriteBigCell },
  },
  ["radio"]: {
    small: { x: -(spriteCell * 6), y: 0 },
    big: { x: -(spriteBigCell * 6), y: 0 },
  },
  ["radio-checked"]: {
    small: { x: -(spriteCell * 6), y: 0 },
    big: { x: -(spriteBigCell * 6), y: -spriteBigCell },
  },
  ["bookmark"]: {
    small: { x: -(spriteCell * 7), y: 0 },
    big: { x: -(spriteBigCell * 7), y: 0 },
  },
  ["triangle-bottom"]: {
    small: { x: -(spriteCell * 8), y: 0 },
    big: { x: -(spriteBigCell * 8), y: 0 },
  },
  ["success"]: {
    small: { x: -(spriteCell * 9), y: 0 },
    big: { x: -(spriteBigCell * 9), y: 0 },
  },
  ["error"]: {
    small: { x: -(spriteCell * 10), y: 0 },
    big: { x: -(spriteBigCell * 10), y: 0 },
  },
  ["triangle-top"]: {
    small: { x: -(spriteCell * 8), y: -spriteCell },
    big: { x: -(spriteBigCell * 8), y: -spriteBigCell },
  },
  ["arrow-up"]: {
    small: { x: 0, y: -spriteCell },
    big: { x: 0, y: -spriteBigCell },
  },
  ["digital-book"]: {
    small: { x: 0, y: -(spriteCell * 2) },
    big: { x: 0, y: -(spriteBigCell * 2) },
  },
  ["analog-book"]: { small: { x: -26, y: -36 }, big: { x: -26, y: -36 } },
  ["cross"]: { small: { x: -57, y: -40 }, big: { x: -82, y: -60 } },
  ["cross-red"]: { small: { x: -57, y: -67 }, big: { x: -82, y: -98 } },
  ["checkbox"]: {
    small: { x: -68, y: -40, backgroundSize: "215px 95px" },
    big: { x: -82, y: -40, backgroundSize: "205px 95px" },
  },
  ["checkbox-checked"]: {
    small: { x: -68, y: -40, backgroundSize: "215px 95px" },
    big: { x: -82, y: -68, backgroundSize: "205px 95px" },
  },
  ["link"]: { small: { x: -(26 * 4), y: -36 }, big: { x: -(26 * 4), y: -36 } },
  ["download"]: { small: { x: -54, y: 0 }, big: { x: -54, y: 0 } },
};

const iconSizes = {
  small: css`
    background-size: 198px 88px;
    margin: auto 2px;
    width: 18px;
    height: 18px;
  `,
  big: css`
    background-size: 288px 128px;
    width: 26px;
    height: 26px;
  `,
};

export const getStyledIcon = (glyph, size, hovered) => {
  const currentStep = size === "small" ? spriteCell : spriteBigCell;
  if (glyph === "readings") {
    return styled.span`
      background: url(${openBookIcon}) no-repeat 0 2px;
      background-size: contain;
    `;
  }

  return styled.span`
    display: inline-flex;
    background-image: url("${iconsSprite}");
    background-position-x: ${icons[glyph][size].x}px;
    background-position-y: ${
      !hovered ? icons[glyph][size].y : icons[glyph][size].y - currentStep
    }px;
    
    ${iconSizes[size]}
    
    ${icons[glyph][size].backgroundSize &&
      css`
        background-size: ${icons[glyph][size].backgroundSize};
      `};
  `;
};
