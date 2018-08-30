/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, select, boolean } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import { ThemeProviderWrapper, Radio } from "../index";
import { positions, themes } from "checkbox/__stories__/editable-props";
import { action } from "@storybook/addon-actions";

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

storiesOf("Radio", module).add(
  "1. Width editable props",
  withInfo({
    text: buttonsMdDocs,
    inline: true,
    propTablesExclude: [ThemeProviderWrapper],
  })(() => {
    const checked = boolean("checked", false);
    const disabled = boolean("disabled", false);
    const iconPosition = select("iconPosition", positions);
    const id = text("id", "");
    const name = text("name", "checkbox-name");
    const variation = select("variation", themes, "green");
    const onCheck = eventData => action("radio toggle")(eventData);

    return (
      <ThemeProviderWrapper>
        <React.Fragment>
          <Radio name="radio-name" onCheck={onCheck}>
            Some text
          </Radio>
          <Radio name="radio-name" onCheck={onCheck} checked>
            Some text
          </Radio>
        </React.Fragment>
      </ThemeProviderWrapper>
    );
  }),
);
