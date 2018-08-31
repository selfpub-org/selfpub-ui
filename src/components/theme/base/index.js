import colorsConfig from "./colors";
import buttonTheme from "./button";
import checkboxTheme from "./checkbox";
import typographyTheme from "./typography";
import linkTheme from "./link";
import infoBoxTheme from "./info-box";
import radioTheme from "./radio";

export default {
  fontFamily: typographyTheme.fontFamilies.system,
  typography: typographyTheme,
  colors: colorsConfig,
  button: buttonTheme,
  link: linkTheme,
  checkbox: checkboxTheme,
  infoBox: infoBoxTheme,
  radio: radioTheme,
};
