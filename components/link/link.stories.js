/* global module */
import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import ClickableLink from "./index";
import Button from "../button";
import { withInfo } from "@storybook/addon-info";

// Init root for stories
const stories = storiesOf("Links", module);

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

stories.add("with all themes", () => {
  return (
    <React.Fragment>
      {ClickableLink.Themes.map(theme => (
        <div style={{ width: "100%" }} key={theme}>
          Theme: {theme}
          <div
            style={{ display: "flex", flexDirection: "row", FlexWrap: "wrap" }}
          >
            {ClickableLink.Types.map(type => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                key={type}
              >
                Type: {type}
                <ClickableLink
                  type={type}
                  target="_self"
                  href="#"
                  theme={theme}
                  onClick={action("clicked")}
                >
                  Some text
                </ClickableLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
});

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
            <ClickableLink
              type={select("type", types, "")}
              target={select("target", targets, "_self")}
              href={text("href", "#")}
              theme={select("theme", themes, "default")}
              onClick={action("clicked")}
            >
              Some text
            </ClickableLink>
          </div>
        </div>
      </div>
    );
  }),
);
