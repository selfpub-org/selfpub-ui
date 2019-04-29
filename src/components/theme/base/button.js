import { mainTheme } from "../../ui-styles/index";
import typography from "./typography";

const disabled = {
  background: "rgba(180,180,180, 0.3)",
  borderWidth: 2,
  borderColor: "transparent",
  color: "rgba(160,160,160,0.7)",
};

const common = {
  base: {
    fontFamily: typography.fontFamilies.system,
    fontWeight: 500,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    borderRadius: 0,
    fontSize: "14px",
  },
  default: {
    passive: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: mainTheme.color.lightCoal,
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    active: {
      background: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  primary: {
    passive: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },

    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  success: {
    passive: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.green,
      background: mainTheme.color.green,
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.green,
      background: mainTheme.color.green,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.green,
      background: mainTheme.color.green,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 180, 0, 0.40)`,
    },
    disabled: {
      ...disabled,
    },
  },
  light: {
    passive: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: mainTheme.color.strongLighterCoal,
      background: "transparent",
    },
    hover: {
      ...disabled,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.lighterCoal,
      background: mainTheme.color.lighterCoal,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  beige: {
    passive: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: "transparent",
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: "transparent",
      background: mainTheme.color.beige,
    },
    active: {
      borderWidth: 2,
      borderColor: "transparent",
      background: mainTheme.color.gray,
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    focus: {
      shadow: "none",
    },
    disabled: {
      ...disabled,
    },
  },
  lighter: {
    passive: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: mainTheme.color.lighterCoal,
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.coal,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  white: {
    passive: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.white,
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.white,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  danger: {
    passive: {
      color: mainTheme.color.red,
      borderWidth: 2,
      borderColor: mainTheme.color.red,
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.red,
      background: mainTheme.color.red,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.red,
      background: mainTheme.color.red,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(180, 0, 0, 0.40)`,
    },
    disabled: {
      ...disabled,
    },
  },
  black: {
    passive: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.coal,
      background: mainTheme.color.coal,
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(0, 0, 0, 0.39)`,
    },
    disabled: {
      ...disabled,
    },
  },
  "primary-light": {
    passive: {
      color: mainTheme.color.orange,
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: "transparent",
    },
    hover: {
      color: mainTheme.color.white,
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    active: {
      borderWidth: 2,
      borderColor: mainTheme.color.orange,
      background: mainTheme.color.orange,
    },
    focus: {
      shadow: `0 1px 8px 0 rgba(154, 154, 154, 0.65)`,
    },
    disabled: {
      ...disabled,
    },
  },
};

const raisedStyles = {
  borderWidth: 2,
  borderColor: "transparent",
  shadow:
    "0 1px 1px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12),inset 0 1px 0 rgba(255,255,255,0.15), inset 0 0 16px rgba(0,0,0,0.04)",
};

export default {
  flat: {
    ...common,
  },
  raised: {
    ...common,
    base: {
      ...common.base,
      borderRadius: "3px",
    },
    default: {
      ...common.default,
      passive: {
        ...common.default.passive,
        ...raisedStyles,
      },
    },
    primary: {
      ...common.primary,
      passive: {
        ...common.primary.passive,
        ...raisedStyles,
      },
    },

    success: {
      ...common.success,
      passive: {
        ...common.success.passive,
        ...raisedStyles,
      },
    },

    light: {
      ...common.light,
      passive: {
        ...common.light.passive,
        ...raisedStyles,
      },
    },

    lighter: {
      ...common.lighter,
      passive: {
        ...common.lighter.passive,
        ...raisedStyles,
      },
    },

    white: {
      ...common.white,
      passive: {
        ...common.white.passive,
        ...raisedStyles,
      },
    },

    danger: {
      ...common.danger,
      passive: {
        ...common.danger.passive,
        ...raisedStyles,
      },
    },

    black: {
      ...common.black,
      passive: {
        ...common.black.passive,
        ...raisedStyles,
      },
    },

    "primary-light": {
      ...common["primary-light"],
      passive: {
        ...common["primary-light"].passive,
        ...raisedStyles,
      },
    },
  },
};
