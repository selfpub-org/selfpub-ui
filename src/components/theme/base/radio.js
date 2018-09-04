import { mainTheme } from "../../ui-styles/index";

export default {
  animationDuration: 200,
  borderRadius: 1,
  fontSize: 14,
  size: 18,
  accent: mainTheme.color.green,
  fill: mainTheme.color.white,
  background: mainTheme.color.white,
  base: mainTheme.color.strongLighterCoal,
  hover: {
    accent: mainTheme.color.coal,
    fill: mainTheme.color.green,
    background: 0,
  },
  active: {
    background: mainTheme.color.green,
    border: mainTheme.color.green,
    accent: mainTheme.color.white,
  },
  disabled: {
    background: mainTheme.color.strongLighterCoal,
    border: mainTheme.color.lightCoal,
  },
  focus: {
    shadow: `0 2px 11px 0 rgba(154, 154, 154, 0.65)`,
  },
};
