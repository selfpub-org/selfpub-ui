import React, { Component } from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { sizes, targets, themes, iconSizes } from "./constants";
import Button from "../button";
import Icon from "../../icons/icon";

export default class ButtonWithEditablePropsExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Buttons with editable props</h3>
        <div style={{ display: "flex" }}>
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
        </div>
      </div>
    );
  }
}
