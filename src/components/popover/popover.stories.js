/* global module */
import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, select, boolean } from "@storybook/addon-knobs";
import PropTypes from "prop-types";
import { ThemeProviderWrapper, Popover, Link } from "index";

const buttonsMdDocs = `
  Component dor display info and notes
`;

const Title = styled.div``;

const PopoverOverWrite = styled(Popover)`
  font-size: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
  color: red;
  vertical-align: middle;
  align-items: center;
`;


/**
 * Temporary hack for display React.Fragment without error
 * see: https://github.com/storybooks/addon-jsx/issues/34#issuecomment-377270299
 */
React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {
  children: PropTypes.node.isRequired,
};
React.Fragment.displayName = "Fragment";

storiesOf("Popover", module).add(
  "1. Width editable props",
  withInfo({
    text: buttonsMdDocs,
    inline: true,
    propTablesExclude: [
      ThemeProviderWrapper,
      React.Fragment,
      PopoverOverWrite,
      Link,
    ],
  })(() => (
    <ThemeProviderWrapper>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h4>Configured Popovers</h4>
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
              Самый распространенный формат текстовых файлов; используется
              в&nbsp;
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
        <div>
          <h4>Popover without header</h4>
          <Popover>
            <React.Fragment>
              Самый распространенный формат текстовых файлов; используется
              в&nbsp;
              <a href="#some-hash">Microsoft Word</a>.
            </React.Fragment>
          </Popover>
        </div>
        <div>
          <h4>Popover styled</h4>
          <PopoverOverWrite
            header={
              <Fragment>
                Имя владельца карты
                <sup>*</sup>
              </Fragment>
            }
          >
            <Fragment>
              Самый распространенный формат текстовых файлов; используется
              в&nbsp;
              <a href="#some-hash">Microsoft Word</a>.
            </Fragment>
          </PopoverOverWrite>
        </div>
      </div>
    </ThemeProviderWrapper>
  )),
);
