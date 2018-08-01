/* global module */
import React from "react";
import { addDecorator, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  text,
  boolean,
  select,
  number,
  selectV2,
} from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Button from "./index";
import Icon from "../icons";

// Init root for stories
const stories = storiesOf("Buttons", module);

const sizes = {
  small: "small",
  medium: "medium",
  big: "big",
  null: "empty props",
};

const themes = {
  default: "default",
  primary: "primary",
  success: "success",
  light: "light",
  lighter: "lighter",
  white: "white",
  danger: "danger",
  black: "black",
  "primary-light": "primary-light",
  null: "empty props",
};

const targets = {
  _blank: "_blank",
  _parent: "_parent",
  _self: "_self",
  _top: "_top",
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

stories.add(
  "with editable props and info",
  withInfo(`
    description or documentation about my component, supports markdown
  
    ~~~js    
    <Button
      disabled={false}
      size="small"
      href=""
      htmlType=""
      target=""
      theme="default"
      icon=""
      iconSize={Icon.Size.Size12)}
      loading={false}
      onClick={action("clicked")}
    >
      Some text
    </Button>
    ~~~
  
  `)(() => (
    <Button
      disabled={boolean("Disabled", false)}
      size={select("Size", sizes, "small")}
      href={text("href", "")}
      htmlType={text("htmlType", "")}
      target={select("target", targets, "")}
      theme={select("theme", themes, "default")}
      icon={text("icon", "")}
      iconSize={select("iconSize", iconSizes, Icon.Size.Size12)}
      loading={boolean("loading", false)}
      onClick={action("clicked")}
    >
      {text("Label (children)", "Some text")}
    </Button>
  )),
);

stories.add("with all themes", () => {
  return (
    <React.Fragment>
      {Button.Themes.map(theme => (
        <div style={{ width: "100%" }} key={theme}>
          Theme: {theme}
          <div
            style={{ display: "flex", flexDirection: "row", FlexWrap: "wrap" }}
          >
            {Button.Sizes.map((size, index) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                }}
                key={index}
              >
                Size: {size}
                <Button size={size} theme={theme} onClick={action("clicked")}>
                  Some text
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
});

stories.add("with loader", () => {
  return (
    <React.Fragment>
      {Button.Themes.map((theme, index) => (
        <React.Fragment key={index}>
          Theme: {theme}
          <Button
            size={select("Size", sizes, "small")}
            theme={theme}
            onClick={action("clicked")}
            loading={boolean("Loading", true)}
            disabled={boolean("Disabled", false)}
          >
            Some text
          </Button>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
});

// stories.add("defaults", () => (
//   <div className="buttons">
//     <Button>Button default</Button>
//
//     <Button short>...</Button>
//
//     <Button href="/">Button link</Button>
//
//     <Button loader>Button loader</Button>
//
//     <Button primary loader>
//       Primary loader
//     </Button>
//
//     <Button icon={"cross"} loader>
//       Icon loader
//     </Button>
//
//     {/*{renderButtonModifications()}*/}
//
//     <Button text>Text action</Button>
//
//     {/*{renderTextModifications()}*/}
//
//     <Button icon={"cross"}>Icon action</Button>
//
//     {/*{renderIconWithTextModifications()}*/}
//
//     <Button icon={"cross"} title="Icon action" />
//
//     {/*{renderIconActionModifications()}*/}
//   </div>
// ));
