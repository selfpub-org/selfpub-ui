import { mainTheme } from "../../ui-styles/index";
import { rgba } from "polished";

export default {
  animationDuration: 200,
  borderWidth: 2,
  borderType: "solid",
  fontSize: 14,
  size: 24,
  variations: {
    info: {
      border: mainTheme.color.blue,
      font: mainTheme.color.beige,
      background: rgba(mainTheme.color.blue, 0.1),
    },
    warn: {
      border: mainTheme.color.yellow,
      font: mainTheme.color.beige,
      background: rgba(mainTheme.color.yellow, 0.2),
    },
    error: {
      border: mainTheme.color.red,
      font: mainTheme.color.beige,
      background: rgba(mainTheme.color.red, 0.2),
    },
  },
};
