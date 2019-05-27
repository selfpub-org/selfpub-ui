/* global module */
import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";
import { hashFromArray } from "./../../utils/utils";

import { ThemeProviderWrapper, Radio } from "@selfpub-ui";

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

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      checked: null,
      radioValue: "a",
    };
  }

  handleChange = radioValue => {
    this.setState({ radioValue });
  };

  render() {
    return (
      <ThemeProviderWrapper>
        <div>
          <Radio
            value="a"
            checked={this.state.radioValue === "a"}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            a-radio
          </Radio>
          <Radio
            value="b"
            checked={this.state.radioValue === "b"}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            b-radio
          </Radio>
          <Radio
            value="c"
            checked={this.state.radioValue === "c"}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            c-radio
          </Radio>
          <Radio
            value="d"
            checked={this.state.radioValue === "d"}
            onChange={this.handleChange}
            disabled={true}
          >
            d-radio
          </Radio>
        </div>
      </ThemeProviderWrapper>
    );
  }
}

storiesOf("Radio", module)
  .add(
    "1. Width editable props",
    withInfo({
      text: buttonsMdDocs,
      inline: true,
      propTablesExclude: [ThemeProviderWrapper],
    })(() => {
      const id = text("id", "");
      const name = text("name", "Radio-name");
      const checked = boolean("checked", false);
      const disabled = boolean("disabled", false);
      const iconPosition = select(
        "iconPosition",
        hashFromArray(["left", "right"]),
      );
      const onCheck = eventData => action("radio toggle")(eventData);

      return (
        <ThemeProviderWrapper>
          <React.Fragment>
            <Radio
              id={id}
              name={name}
              value="a"
              checked={checked}
              onChange={onCheck}
              disabled={disabled}
              iconPosition={iconPosition}
            >
              a-radio
            </Radio>
          </React.Fragment>
        </ThemeProviderWrapper>
      );
    }),
  )
  .add(
    "2. Groups",
    withInfo({
      text: buttonsMdDocs,
      inline: true,
      propTablesExclude: [ThemeProviderWrapper, Test],
    })(() => <Test />),
  );
