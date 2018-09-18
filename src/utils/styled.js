/**
 * Subtract the specified percentage to the color (rr, gg or bb) in hexadecimal form
 *
 * @param color
 * @param amount
 * @returns {string}
 */
export function subtractLight(color, amount) {
  const colorAccumulator = parseInt(color, 16) - amount;
  const normaliseColor = colorAccumulator > 255 ? 255 : colorAccumulator;

  return normaliseColor.toString(16).length > 1
    ? normaliseColor.toString(16)
    : `0${normaliseColor.toString(16)}`;
}

/**
 * Adds the specified percentage to the color (rr, gg or bb) in hexadecimal form
 *
 * @param color
 * @param amount
 * @returns {string}
 */
const addLight = function(color, amount) {
  const colorAccumulator = parseInt(color, 16) + amount;
  const normaliseColor = colorAccumulator > 255 ? 255 : colorAccumulator;

  return normaliseColor.toString(16).length > 1
    ? normaliseColor.toString(16)
    : `0${normaliseColor.toString(16)}`;
};

/**
 * Darkens the hexadecimal color of 6 #RRGGBB characters according to the specified percentage
 *
 * @param colorString
 * @param amount
 * @returns {string}
 */
export function darken(colorString, amount) {
  const color = colorString.includes("#")
    ? colorString.substring(1, colorString.length)
    : colorString;
  const normaliseAmount = parseInt((255 * amount) / 100);

  const redChanel = subtractLight(color.substring(0, 2), normaliseAmount);
  const greenChanel = subtractLight(color.substring(2, 4), normaliseAmount);
  const blueChanel = subtractLight(color.substring(4, 6), normaliseAmount);

  return `#${redChanel}${greenChanel}${blueChanel}`;
}

/**
 * lightens the hexadecimal color of 6 #RRGGBB characters according to the specified percentage
 *
 * @param colorString
 * @param amount
 * @returns {string}
 */
export function lighten(colorString, amount) {
  const color =
    colorString.indexOf("#") >= 0
      ? colorString.substring(1, colorString.length)
      : colorString;
  const normaliseAmount = parseInt((255 * amount) / 100);

  const redChanel = addLight(color.substring(0, 2), normaliseAmount);
  const greenChanel = addLight(color.substring(2, 4), normaliseAmount);
  const blueChanel = addLight(color.substring(4, 6), normaliseAmount);

  return `#${redChanel}${greenChanel}${blueChanel}`;
}

/**
 * Converts a CSS hex color value to RGBA.
 * @param {string} hex - Expanded hexadecimal CSS color value.
 * @param {number} alpha - Alpha as a decimal.
 * @returns {string} RGBA CSS color value.
 */
export function hex2Rgba(hex, alpha = 1) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
