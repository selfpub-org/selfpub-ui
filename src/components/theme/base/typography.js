import { fontFamilies } from "./index";
import colors from "./colors";

export default {
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
    display: block,
    textAlign: left,
    maxWidth: "80%",
    fontSize: 21,
    lineHeight: 33,
    fontWeight: "normal",
    margin: "16px auto 20px",
  },
  quote: {
    fontSize: 22,
    lineHeight: 32,
    fontStyle: "italic",
    fontFamily: fontFamilies.system,
    borderColor: colors.primary,
  },
  epigraph: {
    fontSize: 22,
    lineHeight: 32,
    fontStyle: "italic",
    fontFamily: fontFamilies.system,
  },
  source: {
    fontSize: 11,
    fontFamily: fontFamilies.system,
  },
  timestamp: {
    fontSize: 12,
    fontFamily: fontFamilies.system,
  },
  description: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: fontFamilies.system,
  },
};
