import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEME_MAIN } from "./index";

storiesOf("ui-styles", module).add("THEME_MAIN", () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    {Object.keys(THEME_MAIN.color).map((colorName, index) => (
      <React.Fragment key={index}>
        <div
          style={{
            fontSize: "24px",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "50px",
            margin: "10px",
          }}
        >
          {THEME_MAIN.color[colorName]}
          <div
            style={{
              background: THEME_MAIN.color[colorName],
              width: "150px",
              height: "50px",
              borderRadius: "6px",
              border: "1px solid",
            }}
          />
        </div>
      </React.Fragment>
    ))}
  </div>
));
