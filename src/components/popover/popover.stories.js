/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, select, boolean } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import Popover from "./popover";
import { ThemeProviderWrapper } from "index";

const buttonsMdDocs = `
  Component dor display info and notes
`;

/**
 * Temporary hack for display React.Fragment without error
 * see: https://github.com/storybooks/addon-jsx/issues/34#issuecomment-377270299
 */
React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {
  children: PropTypes.node.isRequired,
};
React.Fragment.displayName = "React.Fragment";

storiesOf("Popover", module).add(
  "1. Width editable props",
  withInfo({
    text: buttonsMdDocs,
    inline: true,
    propTablesExclude: [ThemeProviderWrapper, React.Fragment],
  })(() => (
    <ThemeProviderWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Popover
          header={text("header", "DOCX")}
          open={boolean("open", false)}
          position={select(
            "position",
            { left: "left", right: "right" },
            "right",
          )}
        >
          <React.Fragment>
            Самый распространенный формат текстовых файлов; используется в&nbsp;
            <a href="#some-hash">Microsoft Word</a>.
          </React.Fragment>
        </Popover>
      </div>
    </ThemeProviderWrapper>
  )),
);
