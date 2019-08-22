/* global require */
/* global module */
import React from "react";
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import packageConf from "./../package";

withOptions({
  name: `Selfpub UI Design v${packageConf.version}`,
  url: 'https://github.com/MyBook/selfpub-ui/',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: false,
  sortStoriesByKind: true,
});

addDecorator((story) => (
  <div style={{margin: "15px"}}>
    {story()}
  </div>
));

addDecorator(withKnobs);

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
