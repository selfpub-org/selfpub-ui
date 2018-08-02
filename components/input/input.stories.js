/* global module */
import React from "react";
import {boolean, select, text} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox, {Input, LabelWrapper} from "./index";

// Init root for stories
const stories = storiesOf("Inputs", module);

const targets = {
  _blank: "_blank",
  _parent: "_parent",
  _self: "_self",
  _top: "_top",
  null: "empty props",
};

const types = {
  default: "default",
  underline: "underline",
  pseudo: "pseudo",
  small: "small",
  null: "empty props",
};

const themes = {
  default: "default",
  blue: "blue",
  white: "white",
  grey: "grey",
  null: "empty props",
};

const iconSizes = {
  "12": "Size12",
  "14": "Size14",
  "16": "Size16",
  "18": "Size18",
  "24": "Size24",
  "32": "Size32",
  "40": "Size40",
  "48": "Size48",
  "64": "Size64",
  "96": "Size96",
  "128": "Size128",
};

// stories.add("with all themes", () => {
//   return (
//     <React.Fragment>
//       {Checkbox.Themes.map(theme => (
//         <div style={{ width: "100%" }} key={theme}>
//           Theme: {theme}
//           <div
//             style={{ display: "flex", flexDirection: "row", FlexWrap: "wrap" }}
//           >
//             {ClickableLink.Types.map(type => (
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginRight: "10px",
//                   marginBottom: "10px",
//                 }}
//                 key={type}
//               >
//                 Type: {type}
//                 <ClickableLink
//                   type={type}
//                   target="_self"
//                   href="#"
//                   theme={theme}
//                   onClick={action("clicked")}
//                 >
//                   Some text
//                 </ClickableLink>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </React.Fragment>
//   );
// });

const positions = {
  left: "left",
  top: "top",
};

stories.add(
  "with editable props",
  withInfo(`
    Link component
  `)(() => {
    return (
      <div style={{ width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "row", FlexWrap: "wrap" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <Input
              disabled={boolean("disabled", false)}
              labelPosition={select("labelPosition", positions)}
              id={text("id", "")}
              name={text("name", "checkbox-name")}
              error={text("error", "")}
              size={select("size", iconSizes, "14")}
              theme={select("theme", themes, "default")}
              type={select("type", types, "")}
              onCheck={action("checkbox toggle")}
              labelText={text("labelText", "Some text")}
              value={text("value", "Some text")}
            />
            <Input
              disabled={boolean("disabled", false)}
              labelPosition={select("labelPosition", positions)}
              id={text("id", "")}
              name={text("name", "checkbox-name")}
              error={text("error", "")}
              size={select("size", iconSizes, "14")}
              theme={select("theme", themes, "default")}
              type={select("type", types, "")}
              onCheck={action("checkbox toggle")}
              labelText={text("labelText", "Some text")}
              value={text("value", "Some text")}
            />
          </div>
        </div>
      </div>
    );
  }),
);
