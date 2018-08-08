import deepmerge from "deepmerge";
// import { fade, darken, lighten, mix } from "../../utils/colors";
import colorsConfig from "./colors";
// import { mainTheme } from "../../ui-styles";
// import { darken, lighten } from "../../../utils/styled";
import buttonTheme from "./button";
import typography from "./typography";

/**
 * Создание темы
 */
export function createTheme(config) {
  // const { colors } = config;

  return {
    fontFamily: typography.fontFamilies.system,
    button: buttonTheme,
    // checkbox: {
    //   types: {
    //     regular: {
    //       colors: {
    //         default: {
    //           background: colors.light,
    //           border: lighten(colors.controls.grey.outline, 0.7),
    //           tick: colors.dark,
    //           text: colors.dark,
    //         },
    //         active: {
    //           background: darken(colors.primary, 0.2),
    //           border: darken(colors.primary, 0.2),
    //           tick: darken(colors.primary, 0.2),
    //         },
    //         focus: {
    //           border: colors.primary,
    //         },
    //         hover: {
    //           border: colors.primary,
    //           tick: colors.primary,
    //         },
    //         checked: {},
    //         disabled: {
    //           tick: colors.controls.grey.outline, 0.5),
    //           border: colors.controls.grey.outline, 0.2),
    //           text: colors.controls.grey.outline, 0.5),
    //         },
    //       },
    //     },
    //   },
    //   sizes: {
    //     medium: {
    //       size: 15,
    //       tickSize: 9,
    //       labelMargin: 10,
    //       lineHeight: 20,
    //     },
    //     small: {
    //       size: 13,
    //       tickSize: 13,
    //       labelMargin: 5,
    //       lineHeight: 15,
    //     },
    //   },
    //   animationDuration: 200,
    //   borderRadius: 1,
    //   fontSize: 13,
    // },
    // // input, select, textarea
    // field: {
    //   fontFamily: fontFamilies.Roboto,
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   borderRadius: 1,
    //   icon: {
    //     colors: {
    //       default: colors.controls.grey.fieldIcon,
    //       active: colors.primary,
    //     },
    //   },
    //   colors: {
    //     default: {
    //       outline: colors.controls.grey.fieldOutline,
    //       border: "transparent",
    //       background: colors.light,
    //       text: colors.dark,
    //       placeholder: colors.controls.grey.placeholder,
    //       arrow: colors.dark,
    //     },
    //     hover: {
    //       outline: darken(colors.controls.grey.fieldOutline, 0.1),
    //       arrow: colors.primary,
    //     },
    //     focus: {
    //       border: colors.primary,
    //       arrow: colors.primary,
    //     },
    //     disabled: {
    //       outline: colors.controls.grey.fieldOutline, 0.6),
    //       text: colors.controls.grey.disabled,
    //       placeholder: colors.controls.grey.disabled,
    //       arrow: lighten(colors.controls.grey.outline, 0.5),
    //       background: colors.light,
    //     },
    //   },
    //   mobile: {
    //     fontWeight: 400,
    //     letterSpacing: 0,
    //     sizes: {
    //       medium: {
    //         fontSize: 14,
    //       },
    //       small: {
    //         fontSize: 14,
    //       },
    //     },
    //   },
    //   sizes: {
    //     medium: {
    //       height: 45,
    //       fontSize: 13,
    //       icon: 18,
    //       eyeIcon: 15,
    //       withIconPadding: 40,
    //       withIconsPadding: 70,
    //       iconMargin: 13,
    //     },
    //     small: {
    //       height: 35,
    //       fontSize: 13,
    //       icon: 16,
    //       eyeIcon: 15,
    //       withIconPadding: 40,
    //       withIconsPadding: 70,
    //       iconMargin: 13,
    //     },
    //   },
    //   animationDuration: 200,
    // },
    // input: {
    //   eyeMargin: 13,
    //   sizes: {
    //     small: {
    //       padding: 13,
    //     },
    //     medium: {
    //       padding: 15,
    //     },
    //   },
    // },
    // loader: {
    //   animationDuration: 200,
    //   color: colors.light,
    // },
    // radio: {
    //   colors: {
    //     default: {
    //       text: colors.dark,
    //       dot: colors.dark,
    //       dotBorder: lighten(colors.controls.grey.outline, 0.7),
    //       dotBackground: colors.light,
    //     },
    //     focus: {
    //       dotBorder: colors.primary,
    //     },
    //     checked: {
    //       dotBorder: colors.primary,
    //     },
    //     active: {
    //       dotBackground: darken(colors.primary, 0.2),
    //       dotBorder: darken(colors.primary, 0.2),
    //       dot: darken(colors.primary, 0.2),
    //     },
    //     hover: {
    //       dotBorder: colors.primary,
    //       dot: colors.primary,
    //     },
    //     disabled: {
    //       dot: colors.controls.grey.outline,
    //       text: colors.controls.grey.outline,
    //       dotBorder: colors.controls.grey.outline,
    //     },
    //   },
    //   dotSize: 5,
    //   radioSize: 15,
    //   labelMargin: 10,
    //   fontSize: 13,
    //   lineHeight: 20,
    //   marginBottom: 15,
    //   animationDuration: 200,
  };
  // },
  // config,
}

export default createTheme({ colors: colorsConfig });
