import colors from "./colors";
import typography from "./typography";

export default {
  fontFamily: typography.fontFamilies.system,
  fontSize: "inherit",
  sizes: {
    inherit: {
      fontSize: "inherit",
    },
    small: {
      fontSize: "12px",
    },
  },
  variations: {
    default: {
      color: colors.coal,
      border: `rgba(59,57,63,.5)`,
      hover: {
        color: colors.orange,
        border: colors.orange,
      },
    },
    blue: {
      color: colors.blue,
      border: `rgba(16,110,220,.5)`,
      hover: {
        color: colors.orange,
        border: colors.orange,
      },
    },
    grey: {
      color: colors.lighterCoal,
      border: colors.lighterCoal,
      hover: {
        color: colors.orange,
        border: colors.orange,
      },
    },
    white: {
      color: colors.white,
      border: `rgba(255,255,255,.5)`,
      hover: {
        color: colors.orange,
        border: colors.orange,
      },
    },
  },
};
