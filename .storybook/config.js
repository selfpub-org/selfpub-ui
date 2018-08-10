/* global require */
/* global module */
import React from "react";
import backgrounds from '@storybook/addon-backgrounds';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";

setOptions({
  name: 'Selfpub UI Design',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: true,
  sortStoriesByKind: true,
});

addDecorator((story) => (
  <div style={{margin: "15px"}}>
    {story()}
  </div>
));

addDecorator(withKnobs);

addDecorator(
  backgrounds([
    { name: 'White', value: '#ffffff', default: true },
    { name: 'Main', value: '#efeee9' },
    { name: 'Footer, header', value: '#3b393f' },
    { name: 'Profile', value: '#efefef' },
  ])
);

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
