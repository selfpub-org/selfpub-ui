import colors from "./colors";
import typography from "./typography";
import { hex2Rgba } from "../../../utils/styled";

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
      color: "inherit",
      border: "inherit",
      hover: {
        color: colors.orange,
        border: hex2Rgba(colors.orange, 0.5),
      },
    },
    coal: {
      color: colors.coal,
      border: hex2Rgba(colors.coal, 0.5),
      hover: {
        color: colors.orange,
        border: hex2Rgba(colors.orange, 0.5),
      },
    },
    blue: {
      color: colors.blue,
      border: hex2Rgba(colors.blue, 0.5),
      hover: {
        color: colors.orange,
        border: hex2Rgba(colors.orange, 0.5),
      },
    },
    grey: {
      color: colors.lighterCoal,
      border: hex2Rgba(colors.lighterCoal, 0.5),
      hover: {
        color: colors.orange,
        border: hex2Rgba(colors.orange, 0.5),
      },
    },
    white: {
      color: colors.white,
      border: hex2Rgba(colors.white, 0.5),
      hover: {
        color: colors.orange,
        border: hex2Rgba(colors.orange, 0.5),
      },
    },
  },
};
