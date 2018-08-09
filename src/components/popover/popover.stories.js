/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, select, boolean } from "@storybook/addon-knobs";
import Popover from "./popover";

const buttonsMdDocs = `
  description or documentation about my component, supports markdown
`;

storiesOf("Popover", module).add(
  "1. Width editable props",
  withInfo({ text: buttonsMdDocs, inline: true })(() => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Popover
        header={text("header", "DOCX")}
        open={boolean("open", false)}
        position={select("position", { left: "left", right: "right" }, "right")}
      >
        {text(
          "content",
          "Самый распространенный формат текстовых файлов; используется в &nbsp; <a href='#'>Microsoft Word</a>.",
        )}
      </Popover>
    </div>
  )),
);
