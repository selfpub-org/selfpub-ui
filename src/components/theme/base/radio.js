import colors from "./../base/colors";

export default {
  animationDuration: 200,
  borderRadius: 1,
  fontSize: 14,
  size: 18,
  accent: colors.green,
  fill: colors.white,
  background: colors.white,
  base: colors.strongLighterCoal,
  hover: {
    accent: colors.green,
    fill: colors.green,
    background: "transparent",
  },
  active: {
    background: colors.green,
    border: colors.green,
    accent: colors.white,
  },
  disabled: {
    background: colors.gray,
    border: colors.lighterCoal,
    accent: colors.lighterCoal,
  },
  focus: {
    shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
  },
};
