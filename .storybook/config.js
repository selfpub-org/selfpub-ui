/* global require */
/* global module */
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import backgrounds from '@storybook/addon-backgrounds';

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
