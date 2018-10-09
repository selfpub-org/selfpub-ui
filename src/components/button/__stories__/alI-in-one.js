import React, { Component } from "react";
import { action } from "@storybook/addon-actions";
import { Button, ThemeProviderWrapper } from "../../index";

export default function() {
  return (
    <ThemeProviderWrapper>
      <React.Fragment>
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
                    variation={variation}
                    onClick={action("clicked")}
                  >
                    Some text
                  </Button>
                </div>
              ))}
            </div>
          ))}
          <div style={{ width: 300, marginRight: 40 }}>
            <h4>Button with array</h4>
            <Button size="big" variation="primary" onClick={action("clicked")}>
              {["some", " text"]}
            </Button>
          </div>
        </div>
      </React.Fragment>
    </ThemeProviderWrapper>
  );
}
