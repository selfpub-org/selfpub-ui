import styled from "styled-components";
import { mainTheme } from "../ui-styles/index";
import { darken } from "../../utils/styled";

export const StyledInlineSelect = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 17px;
  color: ${mainTheme.color.blue};
  padding-right: 22px;

  &:after {
    content: "";
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjEgKDUxMTQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BcnRib2FyZCBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLUNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgPGcgaWQ9ImFycm93IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNS4wMDAwMDApIiBmaWxsPSIjMTA2RURGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNiw0LjU4NTc4NjQ0IEwxMC4yOTI4OTMyLDAuMjkyODkzMjE5IEMxMC42ODM0MTc1LC0wLjA5NzYzMTA3MjkgMTEuMzE2NTgyNSwtMC4wOTc2MzEwNzI5IDExLjcwNzEwNjgsMC4yOTI4OTMyMTkgQzEyLjA5NzYzMTEsMC42ODM0MTc1MTEgMTIuMDk3NjMxMSwxLjMxNjU4MjQ5IDExLjcwNzEwNjgsMS43MDcxMDY3OCBMNi43MDcxMDY3OCw2LjcwNzEwNjc4IEM2LjMxNjU4MjQ5LDcuMDk3NjMxMDcgNS42ODM0MTc1MSw3LjA5NzYzMTA3IDUuMjkyODkzMjIsNi43MDcxMDY3OCBMMC4yOTI4OTMyMTksMS43MDcxMDY3OCBDLTAuMDk3NjMxMDcyOSwxLjMxNjU4MjQ5IC0wLjA5NzYzMTA3MjksMC42ODM0MTc1MTEgMC4yOTI4OTMyMTksMC4yOTI4OTMyMTkgQzAuNjgzNDE3NTExLC0wLjA5NzYzMTA3MjkgMS4zMTY1ODI0OSwtMC4wOTc2MzEwNzI5IDEuNzA3MTA2NzgsMC4yOTI4OTMyMTkgTDYsNC41ODU3ODY0NCBaIiBpZD0iUGF0aC0zIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
    display: block;
    position: absolute;
    right: 3px;
    top: 2px;
    width: 16px;
    height: 16px;
    z-index: 1;
  }
`;

export const StyledSelectElem = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  font-size: 17px;
  opacity: 0;
  cursor: pointer;

  &:hover {
    color: ${darken(mainTheme.color.blue, 15)};
  }

  &:active {
    color: ${darken(mainTheme.color.blue, 25)};
  }
`;
