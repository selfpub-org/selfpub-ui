import React from "react";

import { action } from "@storybook/addon-actions";
import { themes } from "./constants";

import Button from "./../index";

const warningIcon = "baseline-warning-24px";

export default function() {
  return (
    <>
      <h3>All buttons</h3>
      <div style={{ display: "flex" }}>
        {Object.keys(themes).map(variation => (
          <div style={{ minWidth: 200, marginRight: 40 }} key={variation}>
            <h4>{`Variation: ${variation}`}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "20px",
              }}
            >
              <h5>without Icon</h5>
              <Button
                variation={variation}
                onClick={action("clicked")}
                title={"Some text"}
              />
              <h5>without Icon, style "raised"</h5>
              <Button
                variation={variation}
                onClick={action("clicked")}
                title={"Some text"}
                appearance={"raised"}
              />
              <h5>with Icon</h5>
              <Button
                variation={variation}
                onClick={action("clicked")}
                title={"Some text"}
                iconName={warningIcon}
              />

              <h5>Disabled</h5>
              <Button
                variation={variation}
                onClick={action("clicked")}
                title={"Some text"}
                disabled
              />

              <h5>Loading...</h5>
              <Button
                variation={variation}
                onClick={action("clicked")}
                title={"Some text"}
                loading
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
