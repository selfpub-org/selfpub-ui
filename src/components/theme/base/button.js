import { mainTheme } from "../../ui-styles/index";
import typography from "./typography";

export default {
  fontFamily: typography.fontFamilies.system,
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
      fontSize: 17,
      fontWeight: 500,
      borderWidth: 2,
      padding: "14px 21px",
      textTransform: "uppercase",
      minWidth: "192px",
      lineHeight: "17px",
      height: "48px",
      icon: 10,
    },
    medium: {
      fontSize: 14,
      fontWeight: 500,
      borderWidth: 2,
      padding: "inherit",
      textTransform: "uppercase",
      minWidth: "192px",
      lineHeight: "36px",
      height: "40px",
      icon: 10,
    },
    small: {
      fontSize: 12,
      fontWeight: "normal",
      borderWidth: 1,
      padding: "7px",
      textTransform: "uppercase",
      minWidth: "inherit",
      lineHeight: "inherit",
      height: "auto",
      icon: 10,
    },
  },
  disabled: {
    color: mainTheme.color.white,
    border: mainTheme.color.lighterCoal,
    background: mainTheme.color.lighterCoal,
  },
  variations: {
    default: {
      color: mainTheme.color.coal,
      border: mainTheme.color.lightCoal,
      background: 0,
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.lightCoal,
        background: mainTheme.color.coal,
      },
      active: {
        background: mainTheme.color.coal,
        border: mainTheme.color.coal,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    primary: {
      color: mainTheme.color.white,
      border: mainTheme.color.orange,
      background: mainTheme.color.orange,
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.coal,
        background: mainTheme.color.coal,
      },
      active: {
        border: mainTheme.color.coal,
        background: mainTheme.color.coal,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    success: {
      color: mainTheme.color.white,
      border: mainTheme.color.green,
      background: mainTheme.color.green,
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.green,
        background: mainTheme.color.green,
      },
      active: {
        border: mainTheme.color.green,
        background: mainTheme.color.green,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(29, 181, 29, 0.65)`,
      },
    },
    light: {
      color: mainTheme.color.coal,
      border: mainTheme.color.strongLighterCoal,
      background: "transparent",
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.lighterCoal,
        background: mainTheme.color.lighterCoal,
      },
      active: {
        border: mainTheme.color.lighterCoal,
        background: mainTheme.color.lighterCoal,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    lighter: {
      color: mainTheme.color.coal,
      border: mainTheme.color.lighterCoal,
      background: "transparent",
      hover: {
        color: mainTheme.color.coal,
        border: mainTheme.color.coal,
        background: mainTheme.color.white,
      },
      active: {
        border: mainTheme.color.coal,
        background: mainTheme.color.white,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    white: {
      color: mainTheme.color.white,
      border: mainTheme.color.white,
      background: "transparent",
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.coal,
        background: mainTheme.color.coal,
      },
      active: {
        border: mainTheme.color.coal,
        background: mainTheme.color.white,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    danger: {
      color: mainTheme.color.red,
      border: mainTheme.color.red,
      background: "transparent",
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.red,
        background: mainTheme.color.red,
      },
      active: {
        border: mainTheme.color.red,
        background: mainTheme.color.red,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(197, 50, 50, 0.65)`,
      },
    },
    black: {
      color: mainTheme.color.white,
      border: mainTheme.color.coal,
      background: mainTheme.color.coal,
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.orange,
        background: mainTheme.color.orange,
      },
      active: {
        border: mainTheme.color.orange,
        background: mainTheme.color.orange,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
    "primary-light": {
      color: mainTheme.color.orange,
      border: mainTheme.color.orange,
      background: "transparent",
      hover: {
        color: mainTheme.color.white,
        border: mainTheme.color.orange,
        background: mainTheme.color.orange,
      },
      active: {
        border: mainTheme.color.orange,
        background: mainTheme.color.orange,
      },
      focus: {
        shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
      },
    },
  },
};
