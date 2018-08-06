/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { mainTheme } from "@selfpub-ui/components/ui-styles";

storiesOf("ui-styles", module).add("mainTheme", () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    {Object.keys(mainTheme.color).map((colorName, index) => (
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
          {mainTheme.color[colorName]}
          <div
            style={{
              background: mainTheme.color[colorName],
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
