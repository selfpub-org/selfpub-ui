import React, { Component } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "index";

export default class ButtonAllInOneExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>All buttons</h3>
        <div style={{ display: "flex" }}>
          {Button.Themes.map(variation => (
            <div style={{ width: 300, marginRight: 40 }} key={variation}>
              <h4>{`Variation: ${variation}`}</h4>
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
                  <Button
                    size={size}
                    theme={variation}
                    onClick={action("clicked")}
                  >
                    Some text
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
