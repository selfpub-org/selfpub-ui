import deepmerge from "deepmerge";
import { fade, darken, lighten, mix } from "../../utils/colors";
import colorsConfig from "./colors";

export const fontFamilies = {
  Georgia: "Georgia, serif",
  Roboto: "Roboto, sans-serif",
  Garamond: "Garamond, serif",
  Futura: "Futura, sans-serif",
  FontAwesome: "Font Awesome",
  PTSerif: "PTSerif, sans-serif",
  oranienbaum: "oranienbaum, sans-serif",
  PTsans: "PT Sans, sans-serif",
  Exo2: "Exo2, sans-serif",
  roboto: "ROBOTO, sans-serif",
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

/**
 * Создание темы
 */
export function createTheme(config) {
  const { colors } = config;

  const disabledButtonColors = {
    text: colors.controls.grey.disabledText,
    icon: mix(colors.controls.grey.outline, "#ffffff", 0.7),
    background: colors.controls.grey.background,
  };

  return deepmerge(
    {
      fontFamily: fontFamilies.system,
      avatar: {
        colors: {
          iconBackground: colors.controls.gray.background,
        },
      },
      button: {
        fontFamily: fontFamilies.Roboto,
        fontWeight: 500,
        letterSpacing: 1.3,
        textTransform: "uppercase",
        borderRadius: 1,
        mobile: {
          fontWeight: 500,
          letterSpacing: 1.4,
          sizes: {
            medium: {
              fontSize: 13,
              height: 55,
            },
            small: {
              fontSize: 13,
              height: 45,
            },
          },
        },
        sizes: {
          big: {
            fontSize: 11,
            icon: 10,
            height: 45,
          },
          medium: {
            fontSize: 11,
            icon: 10,
            height: 45,
          },
          small: {
            fontSize: 11,
            icon: 10,
            height: 35,
          },
        },
        types: {
          primary: {
            outlineOffset: 3,
            colors: {
              default: {
                text: colors.light,
                icon: colors.light,
                loader: colors.light,
                background: colors.primary,
              },
              hover: {
                background: darken(colors.primary, 0.1),
              },
              active: {
                background: darken(colors.primary, 0.2),
              },
              disabled: disabledButtonColors,
              focus: {
                outline: colors.primary,
              },
            },
          },
          danger: {
            outlineOffset: 3,
            colors: {
              default: {
                text: colors.light,
                icon: colors.light,
                loader: colors.light,
                background: colors.danger,
              },
              hover: {
                background: darken(colors.danger, 0.1),
              },
              active: {
                background: darken(colors.danger, 0.2),
              },
              disabled: disabledButtonColors,
              focus: {
                outline: colors.danger,
              },
            },
          },
          secondary: {
            colors: {
              default: {
                text: colors.dark,
                icon: colors.primary,
                loader: colors.primary,
                background: colors.controls.grey.background,
              },
              hover: {
                text: colors.primary,
                background: mix(colors.controls.grey.outline, "#ffffff", 0.2),
              },
              active: {
                text: darken(colors.primary, 0.2),
                icon: darken(colors.primary, 0.2),
                background: mix(colors.controls.grey.outline, "#ffffff", 0.2),
              },
              disabled: disabledButtonColors,
              focus: {
                outline: colors.primary,
              },
            },
          },
          outline: {
            colors: {
              default: {
                text: colors.dark,
                icon: colors.primary,
                loader: colors.primary,
                border: mix(colors.controls.grey.outline, "#ffffff", 0.3),
                background: "transparent",
              },
              hover: {
                text: colors.primary,
                border: colors.primary,
              },
              active: {
                text: darken(colors.primary, 0.2),
                icon: darken(colors.primary, 0.2),
                border: darken(colors.primary, 0.2),
                background: colors.controls.grey.background,
              },
              disabled: {
                text: colors.controls.grey.disabledText,
                icon: mix(colors.controls.grey.outline, "#ffffff", 0.7),
                border: mix(colors.controls.grey.outline, "#ffffff", 0.2),
              },
              focus: {
                outline: colors.primary,
              },
            },
          },
          flat: {
            colors: {
              default: {
                text: colors.dark,
                icon: colors.primary,
                loader: colors.primary,
                background: "transparent",
              },
              hover: {
                background: colors.controls.grey.background,
              },
              active: {
                background: colors.controls.grey.background,
              },
              disabled: {
                text: colors.controls.grey.disabledText,
                icon: mix(colors.controls.grey.outline, "#ffffff", 0.7),
              },
              focus: {
                outline: colors.primary,
              },
            },
          },
        },
      },
      checkbox: {
        types: {
          regular: {
            colors: {
              default: {
                background: colors.light,
                border: lighten(colors.controls.grey.outline, 0.7),
                tick: colors.dark,
                text: colors.dark,
              },
              active: {
                background: fade(darken(colors.primary, 0.2), 0.1),
                border: darken(colors.primary, 0.2),
                tick: darken(colors.primary, 0.2),
              },
              focus: {
                border: colors.primary,
              },
              hover: {
                border: colors.primary,
                tick: colors.primary,
              },
              checked: {},
              disabled: {
                tick: fade(colors.controls.grey.outline, 0.5),
                border: fade(colors.controls.grey.outline, 0.2),
                text: fade(colors.controls.grey.outline, 0.5),
              },
            },
          },
        },
        sizes: {
          medium: {
            size: 15,
            tickSize: 9,
            labelMargin: 10,
            lineHeight: 20,
          },
          small: {
            size: 13,
            tickSize: 13,
            labelMargin: 5,
            lineHeight: 15,
          },
        },
        animationDuration: 200,
        borderRadius: 1,
        fontSize: 13,
      },
      // input, select, textarea
      field: {
        fontFamily: fontFamilies.Roboto,
        fontWeight: 400,
        letterSpacing: 0,
        borderRadius: 1,
        icon: {
          colors: {
            default: colors.controls.grey.fieldIcon,
            active: colors.primary,
          },
        },
        colors: {
          default: {
            outline: colors.controls.grey.fieldOutline,
            border: "transparent",
            background: colors.light,
            text: colors.dark,
            placeholder: colors.controls.grey.placeholder,
            arrow: colors.dark,
          },
          hover: {
            outline: darken(colors.controls.grey.fieldOutline, 0.1),
            arrow: colors.primary,
          },
          focus: {
            border: colors.primary,
            arrow: colors.primary,
          },
          disabled: {
            outline: fade(colors.controls.grey.fieldOutline, 0.6),
            text: colors.controls.grey.disabled,
            placeholder: colors.controls.grey.disabled,
            arrow: lighten(colors.controls.grey.outline, 0.5),
            background: colors.light,
          },
        },
        mobile: {
          fontWeight: 400,
          letterSpacing: 0,
          sizes: {
            medium: {
              fontSize: 14,
            },
            small: {
              fontSize: 14,
            },
          },
        },
        sizes: {
          medium: {
            height: 45,
            fontSize: 13,
            icon: 18,
            eyeIcon: 15,
            withIconPadding: 40,
            withIconsPadding: 70,
            iconMargin: 13,
          },
          small: {
            height: 35,
            fontSize: 13,
            icon: 16,
            eyeIcon: 15,
            withIconPadding: 40,
            withIconsPadding: 70,
            iconMargin: 13,
          },
        },
        animationDuration: 200,
      },
      input: {
        eyeMargin: 13,
        sizes: {
          small: {
            padding: 13,
          },
          medium: {
            padding: 15,
          },
        },
      },
      loader: {
        animationDuration: 200,
        color: colors.light,
      },
      radio: {
        colors: {
          default: {
            text: colors.dark,
            dot: colors.dark,
            dotBorder: lighten(colors.controls.grey.outline, 0.7),
            dotBackground: colors.light,
          },
          focus: {
            dotBorder: colors.primary,
          },
          checked: {
            dotBorder: colors.primary,
          },
          active: {
            dotBackground: fade(darken(colors.primary, 0.2), 0.1),
            dotBorder: darken(colors.primary, 0.2),
            dot: darken(colors.primary, 0.2),
          },
          hover: {
            dotBorder: colors.primary,
            dot: colors.primary,
          },
          disabled: {
            dot: fade(colors.controls.grey.outline, 0.5),
            text: fade(colors.controls.grey.outline, 0.5),
            dotBorder: fade(colors.controls.grey.outline, 0.2),
          },
        },
        dotSize: 5,
        radioSize: 15,
        labelMargin: 10,
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 15,
        animationDuration: 200,
      },
    },
    config,
  );
}

export default createTheme({ colors: colorsConfig, i18n });
