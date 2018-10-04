/* global module */
import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, select, boolean } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import { ThemeProviderWrapper, Popover, Link } from "index";

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
      <div>
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
        <Popover
          header={
            <Fragment>
              Имя владельца карты
              <sup>*</sup>
            </Fragment>
          }
          position="right"
        >
          <Fragment>
            Формула, по&nbsp;которой рассчитывается размер роялти, предельно
            проста: от&nbsp;розничной цены отнимается НДС и&nbsp;затем
            рассчитывается процент роялти согласно выбранному пакету.{" "}
            <Link href="#1" type="underline">
              Подробнее
            </Link>
          </Fragment>
        </Popover>
      </div>
    </ThemeProviderWrapper>
  )),
);
