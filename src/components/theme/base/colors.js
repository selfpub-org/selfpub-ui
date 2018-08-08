/**
 * Base color
 * @type {string}
 */
export const baseColorOrange = "#ff4c00";
/**
 * Base color
 * @type {string}
 */
export const baseColorBlack = "#3b393f";
/**
 * Base color
 * @type {string}
 */
export const baseColorCoal = "#3b393f";
/**
 * Base color
 * @type {string}
 */
export const baseColorLightCoal = "#767579";
/**
 * Base color
 * @type {string}
 */
export const baseColorLighterCoal = "#9d9c9f";
/**
 * Base color
 * @type {string}
 */
export const baseColorStrongLighterCoal = "#c4c4c6";
/**
 * Base color
 * @type {string}
 */
export const baseColorLoaderWhite = "#f1f1f1";
/**
 * Base color
 * @type {string}
 */
export const baseColorGray = "#f5f5f5";
/**
 * Base color
 * @type {string}
 */
export const baseColorRed = "#da2d19";
/**
 * Base color
 * @type {string}
 */
export const baseColorBeige = "#efeee9";
/**
 * Base color
 * @type {string}
 */
export const baseColorGreen = "#0e920e";
/**
 * Base color
 * @type {string}
 */
export const baseColorYellow = "#f1c312";
/**
 * Base color
 * @type {string}
 */
export const baseColorBlue = "#106edc";
/**
 * Base color
 * @type {string}
 */
export const baseColorWhite = "#ffffff";

/**
 * @type enum
 */
export default {
  primary: baseColorOrange,
  primaryDark: baseColorBlue,
  danger: baseColorRed,
  success: baseColorGreen,
  warn: baseColorYellow,
  black: baseColorBlack,
  dark: baseColorCoal,
  light: baseColorWhite,
  fullDark: baseColorBlack,
  controls: {
    grey: {
      default: "#ccc", // рамки кнопок
      disabled: baseColorLighterCoal, // задизейбленные контролы
      icon: "rgba(94, 94, 94, 0.4)", // иконки
      background: "transparent", // бэкграунд кнопок
      lightBackground: "#eef2f4", // бэкграунд иконки на нотификациях
      activeBackground: "rgba(141, 150, 178, 0.2)", // бэкграунд при :active состоянии на checkbox
      outline: "#8d96b2", // обводка на outline контролах
      fieldOutline: "#dde0e8", // обводка на outline контролах
      iconBackground: "#f3f4f7",
      placeholder: "#a4a9b8",
      fieldIcon: "#B0B4C2",
      disabledText: "#afb5c9",
    },
  },
};
