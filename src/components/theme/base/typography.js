import colors from "./colors";

const fontFamilies = {
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

export default {
  fontFamilies,
  h1: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 45,
    fontWeight: 500,
    lineHeight: 84,
    marginBottom: 10,
    textAlign: "center",
  },
  h2: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 40,
    marginTop: 0,
    marginBottom: 16,
    padding: "0 10px",
    textAlign: "center",
  },
  h3: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 26,
    fontWeight: 500,
    lineHeight: 32,
  },
  h4: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 21,
    lineHeight: 33,
  },
  h5: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 17,
    lineHeight: 27,
    fontWeight: 400,
  },
  h6: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 15,
    lineHeight: 24,
  },
  text: {
    colors: colors.dark,
    fontFamily: fontFamilies.system,
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 24,
  },
  paragraph: {
    display: "block",
    textAlign: "left",
    maxWidth: "80%",
    fontSize: 21,
    lineHeight: 33,
    fontWeight: "normal",
    margin: "16px auto 20px",
  },
};
