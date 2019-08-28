/* global module */
import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";

import { ThemeProviderWrapper, Popover } from "@selfpub-ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const PopoverOverWrite = styled(Popover)`
  font-size: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
  color: red;
  vertical-align: middle;
  align-items: center;
`;

const RowWrapper = styled.div`
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

storiesOf("Popover", module)
  .add("1. Width editable props", () => {
    const position = select(
      "position",
      { left: "left", right: "right", single: "single" },
      "right",
    );
    const trigger = select(
      "trigger",
      { onhover: "onhover", onclick: "onclick", onfocus: "onfocus" },
      "onhover",
    );
    const isOpen = boolean("open", false);

    return (
      <ThemeProviderWrapper>
        <div>
          <h4>Open on hover</h4>
          <RowWrapper>
            <div>
              <h4>Configured Popovers</h4>
              <RowWrapper>
                <Popover
                  header="DOCX"
                  position={position}
                  trigger={trigger}
                  open={isOpen}
                >
                  Самый распространенный формат текстовых файлов; используется в
                  Microsoft Word.
                </Popover>
                <Popover
                  header="FB2"
                  position={position}
                  trigger={trigger}
                  open={isOpen}
                >
                  Формат представления электронных версий книг в виде
                  XML-документов, где каждый элемент книги описывается своими
                  тегами.
                </Popover>
                <Popover
                  header={
                    <Fragment>
                      EPUB <sup>*</sup>
                    </Fragment>
                  }
                  position={position}
                  trigger={trigger}
                  open={isOpen}
                >
                  Формат представления электронных версий книг в виде
                  XML-документов, где каждый элемент книги описывается своими
                  тегами.
                </Popover>
              </RowWrapper>
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
                position={position}
                trigger={trigger}
                open={isOpen}
              >
                <Fragment>
                  Самый распространенный формат текстовых файлов; используется
                  в&nbsp;
                  <a href="#some-hash">Microsoft Word</a>.
                </Fragment>
              </PopoverOverWrite>
            </div>
          </RowWrapper>
        </div>
      </ThemeProviderWrapper>
    );
  })
  .add("2. All in one", () => (
    <ThemeProviderWrapper>
      <Wrapper>
        <RowWrapper>
          <div>
            <h4>Position Popovers</h4>
            <ItemWrapper>
              <Popover header="Right mark" position="right">
                Icon mark positioning <b>right</b> from from header text.
              </Popover>
              <Popover header="Single (only) mark" position="single">
                Single (only) mark.
              </Popover>
              <Popover header="Left mark" position="left">
                Icon mark positioning <b>left</b> from from header text.
              </Popover>
            </ItemWrapper>
          </div>
        </RowWrapper>
        <RowWrapper>
          <div>
            <h4>Styled popover from outer (styled-components)</h4>
            <PopoverOverWrite
              header={
                <Fragment>
                  <sub>*</sub>
                  Имя владельца карты
                  <sup>*</sup>
                </Fragment>
              }
            >
              Самый распространенный формат текстовых файлов; используется
              в&nbsp;
              <a href="#some-hash">Microsoft Word</a>.
            </PopoverOverWrite>
          </div>
        </RowWrapper>
        <RowWrapper>
          <div>
            <h4>Position Popovers</h4>
            <ItemWrapper>
              <Popover header="Click me" position="left" trigger="onclick">
                Popover activate by click.
              </Popover>
            </ItemWrapper>
            <ItemWrapper>
              <Popover header="Hover me" position="left" trigger="onhover">
                Popover activate by hover.
              </Popover>
            </ItemWrapper>
            <ItemWrapper>
              <Popover
                header="Focus me (may not work in storybook)"
                position="left"
                trigger="onfocus"
              >
                Popover activate by focus. (may not work in storybook)
              </Popover>
            </ItemWrapper>
          </div>
        </RowWrapper>
      </Wrapper>
    </ThemeProviderWrapper>
  ));
