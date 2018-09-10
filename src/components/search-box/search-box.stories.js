/* global module */
import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProviderWrapper } from "./../index";
import SearchBoxExample from "./search-box-example";

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

storiesOf("Search-box", module).add(
  "1. Width editable props",
  withInfo({
    text: buttonsMdDocs,
    inline: true,
    propTablesExclude: [ThemeProviderWrapper, React.Fragment],
  })(() => <SearchBoxExample />),
);
