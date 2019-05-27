/* global module */
import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";

import { ThemeProviderWrapper, InfoBox } from "@selfpub-ui";

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

storiesOf("InfoBox", module).add(
  "1. Width editable props",
  withInfo({
    text: buttonsMdDocs,
    inline: true,
    propTablesExclude: [ThemeProviderWrapper, React.Fragment],
  })(() => (
    <ThemeProviderWrapper>
      <React.Fragment>
        <InfoBox
          header={"Заполните профиль"}
          show={boolean("show", true)}
          variation="info"
          actionText="Перейти в профиль"
        >
          <React.Fragment>
            Вам доступен только Бесплатный пакет для размещение книги. Если вы
            хотите выставить книгу на продажу, заполните профиль.
            <a href="#some-hash">Microsoft Word</a>.
          </React.Fragment>
        </InfoBox>
        <InfoBox
          header={"Мы проверяем ваши данные"}
          show={boolean("show", true)}
          variation="warn"
          closeButton
        >
          <React.Fragment>
            Вам доступен только Бесплатный пакет для размещение книги. После
            подтверждения профиля вы сможете выбрать Базовый или Безлимитный
            пакет публикации. Проверка занимает до 7 рабочих дней с момента
            отправки формы.
            <a href="#some-hash">Microsoft Word</a>.
          </React.Fragment>
        </InfoBox>
        <InfoBox
          header={"Внесите изменения в профиль"}
          show={boolean("show", true)}
          variation="error"
          actionText="Перейти в профиль"
          closeButton
        >
          <React.Fragment>
            Вам доступен только Бесплатный пакет для размещение книги.
            Модераторы проверили ваши данные и нашли несоответствия. Если вы
            хотите выставить книгу на продажу, внесите изменения в профиль и
            отправьте данные на повторную проверку.
            <a href="#some-hash">Microsoft Word</a>.
          </React.Fragment>
        </InfoBox>
      </React.Fragment>
    </ThemeProviderWrapper>
  )),
);
