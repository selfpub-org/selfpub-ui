/**
 * Base color
 * @type {string}
 */
const baseColorOrange = "#ff4c00";
/**
 * Base color
 * @type {string}
 */
const baseColorBlack = "#3b393f";
/**
 * Base color
 * @type {string}
 */
const baseColorCoal = "#3b393f";
/**
 * Base color
 * @type {string}
 */
const baseColorLightCoal = "#767579";
/**
 * Base color
 * @type {string}
 */
const baseColorLighterCoal = "#9d9c9f";
/**
 * Base color
 * @type {string}
 */
const baseColorStrongLighterCoal = "#c4c4c6";
/**
 * Base color
 * @type {string}
 */
const baseColorLoaderWhite = "#f1f1f1";
/**
 * Base color
 * @type {string}
 */
const baseColorGray = "#f5f5f5";
/**
 * Base color
 * @type {string}
 */
const baseColorRed = "#da2d19";
/**
 * Base color
 * @type {string}
 */
const baseColorBeige = "#efeee9";
/**
 * Base color
 * @type {string}
 */
const baseColorGreen = "#0e920e";
/**
 * Base color
 * @type {string}
 */
const baseColorYellow = "#f1c312";
/**
 * Base color
 * @type {string}
 */
const baseColorBlue = "#106edc";
/**
 * Base color
 * @type {string}
 */
const baseColorWhite = "#ffffff";

// //colors
// $color-white: #ffffff;
// $color-black: #000000;
//
// $border-header-menu: rgba(241, 196, 15, .4);
// $border-header-menu-item: rgba(127, 140, 141, .4);
// $border-green: #16a085;
// $border-faq-aside: #344860;
// $border-tag: rgba(51, 73, 94, .75);
// $border-doc-photo: #cccccc;
// $border-book-group: #d0d0d1;
//
// $shadow-dropdown: rgba($color-black, .3);
// $shadow-book: rgba($color-black, .1);
//
// // background
// $bg-global-nav: rgba(32, 24, 22, 0.7);
// $bg-global-nav-inner: #282c2f;
// $bg-error: rgba($color-black, .5);
// $bg-error-close: rgba($color-black, .8);
// $bg-input: #fffae7;
// $bg-select: #eeeeee;
// $bg-group-1: #f4f5f6;
// $bg-group-2: #e0e4e8;
// $bg-header-license: #ec7c30;
// $bg-table-green: rgba($border-green, .2);
// $bg-table-green-light: rgba($border-green, .1);
// $bg-payment: rgba(127, 140, 141,.1);
// $bg-dialog-red: #d64015;
// $bg-dialog-red-hover: #d74638;
// $bg-dialog-yellow: #f1c40f;
// $bg-dialog-yellow-dark: #b99506;
// $bg-dialog-yellow-hover: #d6b11c;
// $bg-dialog-green: #18987f;
// $bg-dialog-green-hover: #168e77;
// $bg-dialog-black: #2d3e50;
// $bg-dialog-black-hover: #435970;
// $bg-btn: rgba(161, 172, 183, 0.65);
// $bg-cover-edit: rgba($color-white, .9);
//
// $gradient-faq-title: rgba(46, 61, 80, .25);
// $gradient-faq-title-link: rgba(232, 76, 61, .25);
//
// $font-color-link:  #e84c3d;
// $font-color-text:  #677071;
// $font-color-default-text:  #7f8c8d;
// $font-color-aside-link-opacity:  rgba(#344860, .5);
// $font-color-aside-link: #2e3d50;
// $font-adnmin-hover: #f1c40f;
// $font-close: #f00f00;
// $font-error: #940f0f;
// $font-footer-link: #656f79;
// $font-title-book: #9E9E9E;
//
// $chart-grey: #5f8b95;
// $chart-red: #ba4d51;
// $chart-green-light: rgba(154, 181, 126, 0.6);
// $chart-green-dark: #657752;
// $chart-green: #9ab57e;
//
// $chart-analytic-red: #d70206;
// $chart-analytic-pink: #f05b4f;
// $chart-analytic-yellow: #f4c63d;

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
